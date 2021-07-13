"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "describe",
      "beforeAll",
      "afterAll",
      "chainedTest",
      "test",
      "mockFs",
      "createParentDirs",
      "assert",
      "Promise",
      "objectKeyCount",
      "Object",
      "createWriteStreamSafe",
    ],
    [global, require("../StandardImport"), { mockFs: require("mock-fs") }],
    (
      describe,
      beforeAll,
      afterAll,
      chainedTest,
      test,
      mockFs,
      createParentDirs,
      assert,
      Promise,
      objectKeyCount,
      Object,
      createWriteStreamSafe
    ) => {
      return describe({
        createParentDirs: function () {
          beforeAll(() => mockFs({}));
          afterAll(() => mockFs.restore());
          chainedTest("createParentDirs foo/bar.txt", () =>
            createParentDirs("foo/bar.txt").then((numCreated) =>
              assert.eq(numCreated, 1)
            )
          )
            .thenTest("called twice", () =>
              createParentDirs("foo/bar.txt").then((numCreated) =>
                assert.eq(numCreated, 0)
              )
            )
            .thenTest("many subdirs", () =>
              createParentDirs("foo/baz/bud/bob/bar.txt").then((numCreated) =>
                assert.eq(numCreated, 3)
              )
            );
          test("race condidtion", () =>
            Promise.all([
              createParentDirs("race/bar.txt"),
              createParentDirs("race/bar.txt"),
            ]).then(([a, b]) => {
              assert.eq(a + b, 1);
              return assert.ok(a === 0 || b === 0);
            }));
          test("scratchState", () => {
            let scratchState;
            return createParentDirs(
              "withss/bar.text",
              (scratchState = {})
            ).then(() => {
              assert.eq(1, objectKeyCount(scratchState));
              Caf.each2(scratchState, (entry) => assert.isPromise(entry));
              return Promise.all(Object.values(scratchState));
            });
          });
          return test("createWriteStreamSafe :food/baz", () =>
            createWriteStreamSafe("food/baz").then((writeStream) =>
              writeStream.close()
            ));
        },
      });
    }
  );
});
