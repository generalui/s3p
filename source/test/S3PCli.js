"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "assert", "S3PCli"],
    [global, require("./StandardImport")],
    (test, assert, S3PCli) => {
      return test("S3PCli", function () {
        return assert.match(S3PCli.main({ argv: ["version"] }), /foo/);
      });
    }
  );
});
