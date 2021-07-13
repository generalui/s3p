"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["path", "Promise", "fs"],
    [
      global,
      require("../StandardImport"),
      { fs: require("fs").promises, path: require("path") },
    ],
    (path, Promise, fs) => {
      let createWriteStream, FsEasy;
      createWriteStream = require("fs").createWriteStream;
      return (FsEasy = Caf.defClass(
        class FsEasy extends Object {},
        function (FsEasy, classSuper, instanceSuper) {
          this.createParentDirs = (filename, scratchState) => {
            let dir, p, temp;
            dir = path.dirname(filename);
            return scratchState != null
              ? ((p = path.resolve(dir)),
                (temp = scratchState[p]) != null
                  ? temp
                  : (scratchState[p] = this._createParentDirs(dir)))
              : this._createParentDirs(dir);
          };
          this.findAllFiles = (path, filter) => {};
          this.createWriteStreamSafe = (filename, scratchState) =>
            this.createParentDirs(filename, scratchState).then(() =>
              createWriteStream(filename)
            );
          this._createParentDirs = function (dir) {
            return Promise.then(() => fs.stat(dir)).then(
              () => 0,
              () =>
                this.createParentDirs(dir).then((numMade) =>
                  fs
                    .mkdir(dir)
                    .then(() => numMade + 1)
                    .catch((error) =>
                      fs
                        .stat(dir)
                        .then(() => 0)
                        .catch(() =>
                          (() => {
                            throw error;
                          })()
                        )
                    )
                )
            );
          };
        }
      ));
    }
  );
});
