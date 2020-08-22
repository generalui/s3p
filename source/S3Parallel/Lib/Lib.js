"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let exec;
  exec = require("util").promisify(require("child_process").exec);
  return [
    require("./S3Keys"),
    {
      shellExec: function (command) {
        return exec(command).then(({ stdout }) => stdout);
      },
      humanByteSize: function (bytes, decimals = 2) {
        return (() => {
          switch (false) {
            case !(bytes < 1024):
              return `${Caf.toString((bytes / Caf.pow(1024, 0)) | 0)}_B`;
            case !(bytes < Caf.pow(1024, 2)):
              return `${Caf.toString(
                (bytes / Caf.pow(1024, 1)).toFixed(decimals)
              )}kB`;
            case !(bytes < Caf.pow(1024, 3)):
              return `${Caf.toString(
                (bytes / Caf.pow(1024, 2)).toFixed(decimals)
              )}mB`;
            case !(bytes < Caf.pow(1024, 4)):
              return `${Caf.toString(
                (bytes / Caf.pow(1024, 3)).toFixed(decimals)
              )}gB`;
            case !(bytes < Caf.pow(1024, 5)):
              return `${Caf.toString(
                (bytes / Caf.pow(1024, 4)).toFixed(decimals)
              )}tB`;
            case !(bytes < Caf.pow(1024, 6)):
              return `${Caf.toString(
                (bytes / Caf.pow(1024, 5)).toFixed(decimals)
              )}pB`;
            default:
              return `${Caf.toString(
                (bytes / Caf.pow(1024, 6)).toFixed(decimals)
              )}eB`;
          }
        })();
      },
    },
  ];
});
