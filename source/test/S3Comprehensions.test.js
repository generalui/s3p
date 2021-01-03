"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "mockS3",
      "describe",
      "test",
      "S3Comprehensions",
      "assert",
      "S3P",
      "getLargeFileList",
    ],
    [global, require("./StandardImport"), require("./TestLib")],
    (
      mockS3,
      describe,
      test,
      S3Comprehensions,
      assert,
      S3P,
      getLargeFileList
    ) => {
      let smallMockFs;
      smallMockFs = mockS3("alpha", "beta", "gamma");
      return describe({
        map: function () {
          test("no map or reduce", () =>
            S3Comprehensions.map({
              quiet: true,
              limit: 2,
              s3: smallMockFs,
            }).then((result) => assert.eq(result.length, 3)));
          test("custom map", () =>
            S3Comprehensions.map({
              quiet: true,
              limit: 2,
              s3: smallMockFs,
              map: ({ Size }) => Size,
            }).then((result) => assert.eq(result, [5, 4, 5])));
          test("example: total-size", () =>
            S3Comprehensions.map({
              quiet: true,
              s3: smallMockFs,
              map: ({ Size }) => Size,
              reduce: (a, b) => a + b,
            }).then((result) => assert.eq(result, 14)));
          test("example: smallest", () =>
            S3Comprehensions.map({
              quiet: true,
              s3: smallMockFs,
              reduce: (a, b) => (a.Size < b.Size ? a : b),
            }).then((result) => assert.eq(result.Key, "beta")));
          return test("example: newest", () =>
            S3Comprehensions.map({
              quiet: true,
              s3: smallMockFs,
              reduce: (a, b) =>
                a != null ? (a.LastModified < b.LastModified ? b : a) : b,
              finally: ({ Key }) => `KEY: ${Caf.toString(Key)}`,
            }).then((result) => {
              assert.isString(result);
              assert.match(result, /^KEY/);
              return assert.present(result);
            }));
        },
        each: function () {
          test("3-items", () =>
            S3Comprehensions.each({
              quiet: true,
              limit: 2,
              s3: smallMockFs,
            }).then((result) => assert.eq(result.items, 3)));
          return test("10-items", () => {
            let items10, into, i1;
            items10 =
              ((into = []),
              (i1 = 0),
              (() => {
                while (i1 < 10) {
                  let i;
                  i = i1;
                  into.push(`a${Caf.toString(i)}`);
                  i1++;
                }
              })(),
              into);
            return S3Comprehensions.each({
              quiet: true,
              limit: 2,
              s3: mockS3(...items10),
            }).then((result) => assert.eq(result.items, 10));
          });
        },
        summarize: function () {
          test("3-items", () =>
            S3P.summarize({
              quiet: true,
              limit: 2,
              s3: smallMockFs,
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
