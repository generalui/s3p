"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, require("./StandardImport"), require("./Lib")],
    (merge) => {
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
          "Source keys must contain the string, OR source keys must match the JavaScript regexp. Note: This won't speed up listing. Every key matching the specified prefifx, start-after and stop-at clause will ready from S3 and be tested with the provided pattern. It may, however, speed up copying by reducing the total number of files copied.",
        ],
        filter: [
          '"js:({Key, Size, LastModified, ETag, StorageClass, Owner}) => true"',
          "Filter which items will be processed. Note: This won't speed up listing. Every key matching the specified prefifx, start-after and stop-at clause will ready from S3 and be tested with the provided filter. It may, however, speed up copying by reducing the total number of files copied.",
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
            "Files larger than this byte-size will use the large-copy strategy, which is currently a shell-exec of 'aws s3 cp'. Currently this must be set <= 5368709120 (5 gigabytes). This is s3.copyObject's max supported size, so S3P must shell-exec aws-cli for larger files. 100 megabytes, the default, has been tested to be a good selection for maximum performance.",
        },
      });
      return {
        main: function (options) {
          return require("@art-suite/cli").start(
            merge(options, {
              description:
                "S3 summarize, compare, copy, sync and more with massively parallel power.\n\nConfigure AWS credentials with environment variables:\n  s3p uses the same creds as the aws-cli. Learn more:\n  https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html\n\nSource: https://github.com/generalui/s3p",
              commands: {
                each: {
                  run: require("./S3PCliCommands").each,
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
                    {
                      "summarize-folders": "show count and size of each folder",
                    },
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
                map: {
                  run: require("./S3PCliCommands").map,
                  description:
                    "Map and reduce over the results of listBucket. Though 'map' and 'reduce' have default values, you'll likely want to override at least one of them. Further, you may wish to add a 'finally' function.",
                  options: merge(allCommandOptions, advancedOptionsForAll, {
                    map: [
                      "function",
                      "This gets called for each item found.\nForm: ({Key, Size, LastModified, ETag, StorageClass, Owner}) => ...\nDefault: (a) => a",
                    ],
                    reduce: [
                      "function",
                      "Merge the two results of previous `map` or `reduce` calls into one.\nForm: (previousA, previousB) -> ...\nDefault: (a, b) => require('art-standard-lib').compactFlatten([a, b])",
                    ],
                    default: [
                      "any",
                      "The default value to return if no items were found.",
                    ],
                    finally: [
                      "function",
                      "If present, this function will be applied to produce the final result after the last call to reduce. Form: (finalReduceResult) -> ...",
                    ],
                  }),
                  examples: [
                    {
                      bucket: "my-bucket",
                      map: '"js:({Size}) => 1"',
                      reduce: '"js:(a, b) => a + b"',
                    },
                    "total count",
                    {
                      bucket: "my-bucket",
                      map: '"js:({Size}) => Size"',
                      reduce: '"js:(a, b) => a + b"',
                    },
                    "total file size",
                    {
                      bucket: "my-bucket",
                      reduce:
                        '"js:(a, b) => a.LastModified > b.lastModified ? a : b"',
                    },
                    "newest item detauls",
                    {
                      bucket: "my-bucket",
                      reduce:
                        '"js:(a, b) => a.LastModified > b.lastModified ? a : b"',
                      finally: '"js:({Key}) => Key"',
                    },
                    "key of the newest item",
                  ],
                },
                ls: {
                  run: require("./S3PCliCommands").ls,
                  description:
                    "List all matching files. Uses s3.listObjectsV2.",
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
                    { bucket: "my-bucket", "to-folder": "my/local/folder" },
                    "Copy everything from my-mucket to ./my/local/folder/*",
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
                      "to-key": "\"js:(key) => key + '-old'\"",
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
            })
          );
        },
      };
    }
  );
});
