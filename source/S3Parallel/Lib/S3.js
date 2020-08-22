"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "promisify",
      "BaseClass",
      "currentSecond",
      "log",
      "Array",
      "Error",
      "merge",
      "timeout",
      "Promise",
      "fs",
      "path",
      "isFunction",
      "present",
    ],
    [
      global,
      require("../StandardImport"),
      {
        promisify: require("util").promisify,
        fs: require("fs"),
        path: require("path"),
      },
    ],
    (
      promisify,
      BaseClass,
      currentSecond,
      log,
      Array,
      Error,
      merge,
      timeout,
      Promise,
      fs,
      path,
      isFunction,
      present
    ) => {
      let exec, shellEscape, escape, S3;
      exec = promisify(require("child_process").exec);
      shellEscape = require("shell-escape");
      escape = function (single) {
        return shellEscape([single]);
      };
      require("aws-sdk").config.setPromisesDependency(require("bluebird"));
      return (S3 = Caf.defClass(class S3 extends BaseClass {}, function (
        S3,
        classSuper,
        instanceSuper
      ) {
        this.awsSdkS3 = new (require("aws-sdk").S3)({});
        this.classGetter({
          s3: function () {
            return this.awsSdkS3;
          },
        });
        this.listBuckets = () =>
          this.s3
            .listBuckets()
            .promise()
            .then(({ Buckets }) =>
              Caf.object(
                Buckets,
                ({ Name, CreationDate }) => CreationDate,
                null,
                null,
                ({ Name, CreationDate }) => Name
              )
            );
        this.list = ({ bucket, prefix, limit = 1000, startAfter }) => {
          let startTime;
          startTime = currentSecond();
          return this.s3
            .listObjectsV2({
              Bucket: bucket,
              Prefix: prefix,
              MaxKeys: limit,
              StartAfter: startAfter,
            })
            .promise()
            .tapCatch((error) =>
              log.error({
                "S3.list-error": { bucket, prefix, startAfter, limit, error },
              })
            )
            .then((results) => {
              let duration;
              duration = currentSecond() - startTime;
              if (!Caf.is(results.Contents, Array)) {
                log.warn({
                  "S3.list-no-Contents": {
                    bucket,
                    prefix,
                    startAfter,
                    limit,
                    duration,
                    results,
                  },
                });
                throw new Error("S3.list: Contents is not an array");
              } else {
                if (duration > 60) {
                  log.warn({
                    "S3.list-slow": {
                      bucket,
                      prefix,
                      startAfter,
                      limit,
                      duration,
                      results: merge(results, {
                        Contents: `Array ${Caf.toString(
                          results.Contents.length
                        )}`,
                      }),
                    },
                  });
                }
              }
              return results.Contents;
            });
        };
        this.copy = (options) => {
          let fromBucket,
            toBucket,
            fromKey,
            toKey,
            size,
            toFolder,
            pretend,
            verbose,
            copyOptions,
            temp;
          temp = this._normalizeCopyOptions(options);
          fromBucket = temp.fromBucket;
          toBucket = temp.toBucket;
          fromKey = temp.fromKey;
          toKey = temp.toKey;
          size = temp.size;
          toFolder = temp.toFolder;
          pretend = temp.pretend;
          verbose = temp.verbose;
          return size >= Caf.pow(1024, 3) || /\s/.test(toKey)
            ? this.largeCopy({
                fromBucket,
                toBucket,
                toFolder,
                fromKey,
                toKey,
                pretend,
                verbose,
              })
            : ((copyOptions = toFolder
                ? { Bucket: fromBucket, Key: fromKey }
                : {
                    CopySource: `${Caf.toString(fromBucket)}/${Caf.toString(
                      fromKey
                    )}`,
                    Bucket: toBucket,
                    Key: toKey,
                  }),
              verbose ? log({ copyObject: copyOptions }) : undefined,
              pretend
                ? timeout(1, () => {
                    return { pretend: true };
                  })
                : toFolder
                ? Promise.then(() =>
                    fs.createWriteStream(path.join(toFolder, fromKey))
                  ).then(
                    (writeStream) =>
                      new Promise((resolve, reject) =>
                        this.s3
                          .getObject(copyOptions)
                          .createReadStream()
                          .pipe(writeStream)
                          .on("finish", resolve)
                          .on("error", reject)
                      )
                  )
                : this.s3.copyObject(copyOptions).promise());
        };
        this.delete = (options) =>
          this.s3.deleteObject({ Bucket: options.bucket, Key: options.key });
        this.largeCopy = (options) => {
          let fromBucket,
            toBucket,
            fromKey,
            toKey,
            pretend,
            verbose,
            command,
            temp;
          temp = this._normalizeCopyOptions(options);
          fromBucket = temp.fromBucket;
          toBucket = temp.toBucket;
          fromKey = temp.fromKey;
          toKey = temp.toKey;
          pretend = temp.pretend;
          verbose = temp.verbose;
          command = `aws s3 cp ${Caf.toString(
            escape(`s3://${Caf.toString(fromBucket)}/${Caf.toString(fromKey)}`)
          )} ${Caf.toString(
            escape(`s3://${Caf.toString(toBucket)}/${Caf.toString(toKey)}`)
          )}`;
          if (verbose) {
            log(command);
          }
          return pretend
            ? timeout(1, () => {
                return { pretend: true };
              })
            : exec(command);
        };
        this.headObject = ({ bucket, key }) =>
          this.s3.headObject({ Bucket: bucket, Key: key }).promise();
        this._normalizeCopyOptions = function (options) {
          let bucket,
            key,
            fromBucket,
            toBucket,
            fromKey,
            toKey,
            size,
            temp,
            temp1,
            temp2,
            temp3;
          bucket = options.bucket;
          key = options.key;
          fromBucket =
            undefined !== (temp = options.fromBucket) ? temp : bucket;
          toBucket = undefined !== (temp1 = options.toBucket) ? temp1 : bucket;
          fromKey = undefined !== (temp2 = options.fromKey) ? temp2 : key;
          toKey = undefined !== (temp3 = options.toKey) ? temp3 : key;
          size = options.size;
          if (isFunction(toKey)) {
            toKey = toKey(fromKey, fromBucket, toBucket, options.size);
          }
          if (
            !(
              present(fromBucket) &&
              present(toBucket) &&
              present(fromKey) &&
              present(toKey)
            )
          ) {
            throw new Error(
              "Missing one of: fromBucket, toBucket, fromKey, toKey or bucket or key as a default"
            );
          }
          return merge(options, { fromBucket, fromKey, toBucket, toKey });
        };
        this.shouldSyncObjects = function (options) {
          let fromBucket, toBucket, fromKey, toKey, temp;
          temp = this._normalizeCopyOptions(options);
          fromBucket = temp.fromBucket;
          toBucket = temp.toBucket;
          fromKey = temp.fromKey;
          toKey = temp.toKey;
          return Promise.then(() =>
            options.size < Caf.pow(1024, 2) || !options.size
              ? true
              : this.headObject(options).then(
                  ({ ContentLength }) => ContentLength !== options.size
                )
          );
        };
        this.syncObject = (options) =>
          this.shouldSyncObjects(options).then((shouldSync) =>
            shouldSync
              ? this.copyObject(options).then((result) =>
                  merge(result, { copied: true })
                )
              : { copied: false }
          );
      }));
    }
  );
});
