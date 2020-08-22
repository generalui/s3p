"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["describe", "test", "S3P", "mockS3", "assert", "getLargeFileList"],
    [global, require("./StandardImport"), require("./TestLib")],
    (describe, test, S3P, mockS3, assert, getLargeFileList) => {
      return describe({
        summarize: function () {
          test("3-items", () =>
            S3P.summarize({
              quiet: true,
              limit: 2,
              s3: mockS3("alpha", "beta", "gamma"),
            }).then((result) =>
              assert.selectedEq({ items: 3, size: 14 }, result)
            ));
          return test("largeList", () =>
            getLargeFileList().then((files) =>
              S3P.summarize({ quiet: true, s3: mockS3(files) }).then((result) =>
                assert.selectedEq(
                  { items: files.length, size: files.join("").length },
                  result
                )
              )
            ));
        },
      });
    }
  );
});
