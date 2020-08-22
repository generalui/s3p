"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "assert", "humanByteSize", "createS3Url", "shellExec"],
    [global, require("../StandardImport")],
    (test, assert, humanByteSize, createS3Url, shellExec) => {
      Caf.each2(
        [
          [0, "0_B"],
          [10, "10_B"],
          [1023, "1023_B"],
          [10240, "10.00kB"],
          [Caf.pow(1024, 1), "1.00kB"],
          [Caf.pow(1024, 2), "1.00mB"],
          [Caf.pow(1024, 3), "1.00gB"],
          [Caf.pow(1024, 4), "1.00tB"],
          [Caf.pow(1024, 5), "1.00pB"],
          [Caf.pow(1024, 6), "1.00eB"],
          [Caf.pow(1024, 1) - 1, "1023_B"],
          [Caf.pow(1024, 2) - 1, "1024.00kB"],
          [Caf.pow(1024, 3) - 1, "1024.00mB"],
          [Caf.pow(1024, 4) - 1, "1024.00gB"],
          [Caf.pow(1024, 5) - 1, "1024.00tB"],
          [Caf.pow(1024, 6) - 100, "1024.00pB"],
        ],
        ([input, output]) =>
          test(`humanByteSize ${Caf.toString(input)} >> ${Caf.toString(
            output
          )}`, function () {
            return assert.eq(humanByteSize(input), output);
          })
      );
      Caf.each2(
        [
          ["s3://my-bucket/my-key", "my-bucket", null, "my-key"],
          ["my-folder/my-key", "my-bucket", "my-folder", "my-key"],
          ["my-folder/my-key", null, "my-folder", "my-key"],
        ],
        ([output, ...args]) =>
          test(`createS3Url ${Caf.toString(args.join(", "))} >> ${Caf.toString(
            output
          )}`, function () {
            return assert.eq(createS3Url(...args), output);
          })
      );
      return test("shellExec pwd", function () {
        return shellExec("pwd").then((out) => assert.match(out, "/s3p"));
      });
    }
  );
});
