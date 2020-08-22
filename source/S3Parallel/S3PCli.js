"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "merge",
      "Error",
      "isFunction",
      "console",
      "formatDate",
      "pad",
      "humanByteSize",
    ],
    [global, require("./StandardImport"), require("./Lib")],
    (merge, Error, isFunction, console, formatDate, pad, humanByteSize) => {
      let allCommandOptions,
        writeOptions,
        toBucketOptions,
        toFolderOptions,
        advancedOptionsForAll,
        advancedOptionsForCopy;
      allCommandOptions = {
        quiet: "no output",
        verbose: "extra output",
        bucket: {
          argument: "bucket-name",
          description: "The source bucket",
          required: true,
        },
        prefix: [
          "key",
          "Only iterate over keys with this prefix. If 'startAfter' or 'stopAt' are also specified, the set-intersection of the two will be used.",
        ],
        "start-after": [
          "key",
          "Start iteratating after this key. If 'prefix' is also specified, the set-intersection of the two will be used.",
        ],
        "stop-at": [
          "key",
          "Iterate up to, and including, this key. If 'prefix' is also specified, the set-intersection of the two will be used.",
        ],
        pattern: [
          "string OR js:/^any-javascript-regexp/i",
          "Source keys must contain the string, OR source keys must match the JavaScript regexp.",
        ],
        filter: [
          '"js:({Key, Size, LastModified, ETag, StorageClass, Owner}) => true"',
          "Filter results of listObjects.",
        ],
      };
      writeOptions = {
        dryrun: {
          description:
            "Will not modify anything. For sync/copy commands, do everything except actually copy files.",
        },
        pretend: { description: "alias for 'dryrun'" },
      };
      toBucketOptions = {
        "to-bucket": {
          argument: "bucket-name",
          required: true,
          description: "The target bucket. It can be the same bucket.",
        },
        "to-prefix": [
          "key-prefix",
          "If 'prefix' is specified, the target key will REPLACE it's source prefix with toPrefix Otherwise, this is the same as add-prefix.",
        ],
        "add-prefix": [
          "key-prefix",
          "The source key is prepended with this string for the target bucket.",
        ],
        "to-key": [
          '"js:(key) => key"',
          "Provide an arbitrary JavaScript function for re-keying keys.",
        ],
      };
      toFolderOptions = {
        "to-bucket": [
          "bucket-name",
          "The target bucket. It can be the same bucket. (to-bucket OR to-folder required)",
        ],
        "to-folder": [
          "to-folder",
          "Path to a folder in the local file system. (to-bucket OR to-folder required)",
        ],
      };
      advancedOptionsForAll = {
        "list-concurrency": {
          advanced: true,
          argument: "100",
          description: "Maximum number of simultaneous list operations",
        },
        "max-list-requests": {
          advanced: true,
          argument: "number",
          description:
            "Not set by default; If set, will stop when hit. Use to limit how many requests get used.",
        },
      };
      advancedOptionsForCopy = merge(advancedOptionsForAll, {
        "copy-concurrency": {
          advanced: true,
          argument: "500",
          description: "Maximum number of simultaneous small-copies",
        },
        "large-copy-concurrency": {
          advanced: true,
          argument: "75",
          description: "Maximum number of simultaneous large-copies",
        },
        "max-queue-size": {
          advanced: true,
          argument: "50000",
          description:
            "Maximum number of files that can be queued for copying before list-reading is throttled.",
        },
        "large-copy-threshold": {
          advanced: true,
          argument: "104857600",
          description:
            "Files larger than this byte-size will use the large-copy strategy, which is currently a shell-exec of 'aws s3 cp'. Currently this must be set <= 5368709120 (5 gigabytes). This is s3.copyObject's max supported size, so S3P must shell-exec aws-cli for larger files.",
        },
      });
      return {
        main: function () {
          return require("@art-suite/cli").start({
            description:
              "S3 summarize, compare, copy, sync and more with massively parallel power.\n\nconfigure AWS credentials with environment variables:\n  s3p uses the same creds as the aws-cli. Learn more:\n  https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html\n\ns3p source:\n  https://github.com/generalui/s3p",
            commands: {
              each: {
                run: (options) => {
                  let map, mapList;
                  map = options.map;
                  mapList = options.mapList;
                  if (!(options.map || options.mapList)) {
                    throw new Error("--map or --map-list option required");
                  }
                  if (!(map && !isFunction(map))) {
                    throw new Error("--map must be a function");
                  }
                  if (!(mapList && !isFunction(mapList))) {
                    throw new Error("--map-list must be a function");
                  }
                  return require("./S3Comprehensions").each(options);
                },
                description:
                  "Create your own iteration. Specify a --map or --map-list option.",
                options: merge(allCommandOptions, advancedOptionsForAll, {
                  map: [
                    "function",
                    "This gets called for each item found. A javascript function of the form (item) => ...",
                  ],
                  "map-list": [
                    "function",
                    "This gets called with an array of items (length between 1 and 1000). A javascript function of the form (itemList) => ...",
                  ],
                }),
                examples: [
                  'each --bucket my-bucket --map "js:(item) => console.log(item)"',
                  "Log every item found.",
                ],
              },
              "list-buckets": {
                run: require("./Lib/S3").listBuckets,
                description: "List all your S3 buckets.",
              },
              version: {
                run: () => require("../../package").version,
                description: "Show s3p's version.",
              },
              summarize: {
                run: require("./S3P").summarize,
                description:
                  "Scan all items in one bucket and produce a summary of all the items. Uses s3.listObjectsV2.",
                options: merge(
                  allCommandOptions,
                  { "summarize-folders": "show count and size of each folder" },
                  advancedOptionsForAll
                ),
                examples: [
                  { bucket: "my-bucket" },
                  "get a detailed summary of item counts and sizes in my-bucket",
                  {
                    bucket: "my-bucket",
                    filter: '"js:({Size}) => Size > 1024*1024"',
                  },
                  "summarize all files larger than 1 Megabyte",
                ],
              },
              ls: {
                run: (options) =>
                  require("./S3Comprehensions").each(
                    merge({ quiet: true }, options, {
                      mapList: (l) => {
                        let from, into, to, i, temp;
                        return (
                          (from = l),
                          (into = from),
                          from != null
                            ? ((to = from.length),
                              (i = 0),
                              (() => {
                                while (i < to) {
                                  let LastModified, Size, Key;
                                  ({ LastModified, Size, Key } = from[i]);
                                  console.log(
                                    `${Caf.toString(
                                      formatDate(
                                        LastModified,
                                        "yyyy-mm-dd HH:MM:ss"
                                      )
                                    )} ${Caf.toString(
                                      pad(humanByteSize(Size), 10, " ", true)
                                    )} ${Caf.toString(Key)}`
                                  );
                                  temp = i++;
                                }
                                return temp;
                              })())
                            : undefined,
                          into
                        );
                      },
                    })
                  ),
                description: "List all matching files. Uses s3.listObjectsV2.",
                options: merge(allCommandOptions, advancedOptionsForAll),
              },
              compare: {
                run: require("./S3P").compare,
                description:
                  "Compare two buckets and produce a summary of their differences. Uses s3.listObjectsV2.",
                options: merge(
                  allCommandOptions,
                  toBucketOptions,
                  advancedOptionsForAll
                ),
                examples: [
                  { bucket: "my-bucket", "to-bucket": "my-to-bucket" },
                  "Compare items from my-mucket with my-to-bucket. Shows how many items exist in both, only one, or are difference sizes.",
                ],
              },
              cp: {
                run: require("./S3P").copy,
                description:
                  "Copy all files from one bucket to another bucket. Uses s3.listObjectsV2, s3.copyObject and shell-exec 'aws s3 cp'.\n\nNOTE: This overwrites existing files in the target bucket. Try the 'sync' command for smarter copies when some of the files have already been copied.",
                options: merge(
                  allCommandOptions,
                  toBucketOptions,
                  writeOptions,
                  advancedOptionsForCopy,
                  toFolderOptions
                ),
                examples: [
                  { bucket: "my-bucket", "to-bucket": "my-to-bucket" },
                  "Copy everything from my-mucket to my-to-bucket",
                  {
                    bucket: "my-bucket",
                    "to-bucket": "my-to-bucket",
                    prefix: "2020-04-14/",
                  },
                  'Copy everything from my-mucket to my-to-bucket with the prefix "2020-04-14/". The copied items will have the same keys as source items.',
                  {
                    bucket: "my-bucket",
                    "to-bucket": "my-to-bucket",
                    prefix: "2020-04-14/",
                    "to-prefix": "2020-04-14-backup/",
                  },
                  'Copy everything from my-mucket to my-to-bucket with the prefix "2020-04-14/" and REPLACES prefixes. Example: "2020-04-14/foo.jpg" is copied to "2020-04-14-backup/foo.jpg"',
                  {
                    bucket: "my-bucket",
                    "to-bucket": "my-to-bucket",
                    prefix: "2020-04-14/",
                    "add-prefix": "backup/",
                  },
                  'Copy everything from my-mucket to my-to-bucket with the prefix "2020-04-14/" and ADDS prefixes. Example: "2020-04-14/foo.jpg" is copied to "backup/2020-04-14/foo.jpg"',
                  {
                    bucket: "my-bucket",
                    "to-bucket": "my-to-bucket",
                    prefix: "2020-04-14/",
                    "to-key": "\"js:(key) => key + 'old'\"",
                  },
                  'Copy everything from my-mucket to my-to-bucket with CUSTOM function that adds suffixes. Example: "2020-04-14/foo.jpg" is copied to "2020-04-14/foo.jpg-old"',
                ],
              },
              sync: {
                run: require("./S3P").sync,
                description:
                  "Only copy files which do not exist in the target bucket. Uses s3.listObjectsV2, s3.copyObject and shell-exec 'aws s3 cp'.",
                options: merge(
                  allCommandOptions,
                  toBucketOptions,
                  writeOptions,
                  advancedOptionsForCopy,
                  {
                    overwrite:
                      "If set, sync will overwrite existing files with different file sizes.",
                  }
                ),
                examples: [
                  { bucket: "my-bucket", "to-bucket": "my-to-bucket" },
                  "Copy everything from my-mucket to my-to-bucket",
                ],
              },
            },
          });
        },
      };
    }
  );
});
