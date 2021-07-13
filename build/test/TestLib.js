"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "Promise", "Date", "randomString"],
    [global, require("./StandardImport")],
    (compactFlatten, Promise, Date, randomString) => {
      let _largeListP, mockS3, generateLargeFileList, getLargeFileList;
      _largeListP = null;
      return {
        mockS3: (mockS3 = function (...keys) {
          keys = compactFlatten(keys).sort();
          return {
            list: ({ limit = 1000, startAfter }) => {
              let count;
              count = 0;
              return Promise.then(() =>
                Caf.array(
                  keys,
                  (file) => {
                    count++;
                    return {
                      Key: file,
                      Size: file.length,
                      LastModified: new Date(),
                      ETag: "abc123",
                      StorageClass: "STANDARD",
                      Owner: { DisplayName: "john", ID: "abc123" },
                    };
                  },
                  (file) => file > startAfter && count < limit
                )
              );
            },
          };
        }),
        generateLargeFileList: (generateLargeFileList = function () {
          let paths, out;
          paths = [
            "run1/job-status//",
            "run2/job-status/",
            "run2/sync-status/",
            "run2/fluffy/",
            "run2/upload-status/",
            "run2/output/",
          ];
          return Caf.each2(
            paths,
            (path) => {
              let into, i1;
              return (
                (into = out),
                (i1 = 0),
                (() => {
                  while (i1 < 10000) {
                    let i;
                    i = i1;
                    into.push(
                      `${Caf.toString(path)}${Caf.toString(randomString())}`
                    );
                    i1++;
                  }
                })(),
                into
              );
            },
            null,
            (out = [])
          ).sort();
        }),
        getLargeFileList: (getLargeFileList = function () {
          return _largeListP != null
            ? _largeListP
            : (_largeListP = Promise.then(generateLargeFileList));
        }),
      };
    }
  );
});
