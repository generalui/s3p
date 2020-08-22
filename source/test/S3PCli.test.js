"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "S3PCli", "assert"],
    [global, require("./StandardImport")],
    (test, S3PCli, assert) => {
      return test("S3PCli", function () {
        let output;
        output = [];
        return S3PCli.main({
          output: (out) => output.push(out),
          argv: ["nodeJs", "s3p", "version"],
        }).then((version) => {
          assert.match(version, /^\d+\.\d+\.\d+$/);
          return assert.eq(output, [version]);
        });
      });
    }
  );
});
