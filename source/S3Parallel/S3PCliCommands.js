"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "merge",
      "console",
      "formatDate",
      "pad",
      "humanByteSize",
      "Error",
      "isFunction",
    ],
    [global, require("./StandardImport"), require("./Lib")],
    (merge, console, formatDate, pad, humanByteSize, Error, isFunction) => {
      return {
        ls: function (options) {
          let output, temp;
          output =
            (temp = options.output) != null
              ? temp
              : (...args) => console.log(...args);
          return require("./S3Comprehensions")
            .each(
              merge({ quiet: true }, options, {
                mapList: (l) => {
                  let from, into, to, i;
                  from = l;
                  into = from;
                  if (from != null) {
                    to = from.length;
                    i = 0;
                    while (i < to) {
                      let LastModified, Size, Key;
                      ({ LastModified, Size, Key } = from[i]);
                      output(
                        options.long
                          ? `${Caf.toString(
                              formatDate(LastModified, "yyyy-mm-dd HH:MM:ss")
                            )} ${Caf.toString(
                              pad(humanByteSize(Size), 10, " ", true)
                            )} ${Caf.toString(Key)}`
                          : Key
                      );
                      i++;
                    }
                  }
                  into;
                  return null;
                },
              })
            )
            .then((info) => (options.verbose ? info : undefined));
        },
        each: function (options) {
          let map, mapList;
          map = options.map;
          mapList = options.mapList;
          if (!(map != null || mapList != null)) {
            throw new Error("--map or --map-list option required");
          }
          if (map && !isFunction(map)) {
            throw new Error("--map must be a function");
          }
          if (mapList && !isFunction(mapList)) {
            throw new Error("--map-list must be a function");
          }
          return require("./S3Comprehensions").each(options);
        },
        map: function (options) {
          return require("./S3Comprehensions").map(
            merge(options, { quiet: true })
          );
        },
      };
    }
  );
});
