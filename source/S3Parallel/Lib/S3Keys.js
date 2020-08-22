"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek", "present", "Error", "formattedInspect", "pad", "Math"],
    [global, require("../StandardImport")],
    (peek, present, Error, formattedInspect, pad, Math) => {
      let supportedKeyChars,
        maxKeyLength,
        lastKeyChar,
        middleKeyChar,
        getKeyCharIndex,
        getNextKeyChar,
        getBisectChar,
        getUpToNextSlash,
        getBisectKey,
        escapeKey,
        padKey,
        getLastKeyWithPrefix,
        debugKey;
      return {
        supportedKeyChars: (supportedKeyChars =
          " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"),
        maxKeyLength: (maxKeyLength = 1024),
        lastKeyChar: (lastKeyChar = peek(supportedKeyChars)),
        middleKeyChar: (middleKeyChar =
          supportedKeyChars[(supportedKeyChars.length / 2) | 0]),
        getKeyCharIndex: (getKeyCharIndex = function (character) {
          return character ? supportedKeyChars.indexOf(character) : 0;
        }),
        getNextKeyChar: (getNextKeyChar = function (character) {
          return supportedKeyChars[1 + getKeyCharIndex(character)];
        }),
        getBisectChar: (getBisectChar = function (c1, c2) {
          let i1, i2;
          i1 = present(c1) ? getKeyCharIndex(c1) : 0;
          i2 = present(c2) ? getKeyCharIndex(c2) : supportedKeyChars.length - 1;
          return supportedKeyChars[((i1 + i2) / 2) | 0];
        }),
        getUpToNextSlash: (getUpToNextSlash = function (key, i) {
          let m, found;
          m = key.slice(i, key.length).match(/(^[^\/]*)\//);
          return (found = Caf.exists(m) && m[0])
            ? key.slice(0, i + found.length)
            : undefined;
        }),
        getBisectKey: (getBisectKey = function (
          startAfter,
          stopAt,
          bisectPrefix
        ) {
          let i,
            lastCommonSlash,
            charIndex1,
            charIndex2,
            bisectKey,
            prefixBisectI,
            key;
          return startAfter < stopAt
            ? ((i = 0),
              (lastCommonSlash = null),
              (() => {
                while (startAfter[i] === stopAt[i]) {
                  if (startAfter[i] === "/") {
                    lastCommonSlash = i;
                  }
                  i++;
                }
              })(),
              (charIndex1 =
                i === startAfter.length ? 0 : getKeyCharIndex(startAfter[i])),
              (charIndex2 = getKeyCharIndex(stopAt[i])),
              charIndex1 < 0 || charIndex2 < 0
                ? (() => {
                    throw new Error(
                      "Invalid character found in inputs:\n" +
                        formattedInspect({
                          startAfter,
                          stopAt,
                          i,
                          charIndex1,
                          charIndex2,
                          supportedKeyChars,
                        })
                    );
                  })()
                : undefined,
              (bisectKey = (() => {
                switch (false) {
                  case !(
                    bisectPrefix &&
                    i < (prefixBisectI = ((i + startAfter.length) / 2) | 0) &&
                    (key = getUpToNextSlash(
                      startAfter,
                      lastCommonSlash != null ? lastCommonSlash + 1 : 0
                    ))
                  ):
                    return getLastKeyWithPrefix(key);
                  case !(charIndex1 + 1 === charIndex2):
                    return (
                      startAfter.slice(0, i + 1) +
                      supportedKeyChars[
                        ((supportedKeyChars.length -
                          1 +
                          getKeyCharIndex(startAfter[i + 1])) /
                          2) |
                          0
                      ]
                    );
                  default:
                    return (
                      startAfter.slice(0, i) +
                      supportedKeyChars[((charIndex1 + charIndex2) / 2) | 0]
                    );
                }
              })()),
              !(startAfter <= bisectKey && bisectKey <= stopAt)
                ? (() => {
                    throw new Error(
                      `Whoops! ${Caf.toString(startAfter)} <= ${Caf.toString(
                        bisectKey
                      )} <= ${Caf.toString(stopAt)} -- something's not right`
                    );
                  })()
                : undefined,
              bisectKey)
            : undefined;
        }),
        escapeKey: (escapeKey = function (key) {
          return /[\s()]/.test(key) ? `"${Caf.toString(key)}"` : key;
        }),
        padKey: (padKey = function (key) {
          return pad(key, 20 * Math.ceil(key.length / 20));
        }),
        getLastKeyWithPrefix: (getLastKeyWithPrefix = function (prefix) {
          return prefix.length < maxKeyLength
            ? prefix + lastKeyChar.repeat(maxKeyLength - prefix.length)
            : undefined;
        }),
        debugKey: (debugKey = function (key, shouldPad = true) {
          let tail, i, lastIndex;
          return key != null
            ? ((tail = 0),
              (i = lastIndex = key.length - 1),
              (() => {
                while (key[i] === lastKeyChar) {
                  i--;
                }
              })(),
              (key = (() => {
                switch (false) {
                  case !(key === ""):
                    return "''";
                  case !(i < lastIndex):
                    return (
                      escapeKey(key.slice(0, i + 1)) +
                      `(${Caf.toString(lastKeyChar)}*${Caf.toString(
                        lastIndex - i
                      )})`
                    );
                  default:
                    return escapeKey(key);
                }
              })()),
              shouldPad ? padKey(key) : key)
            : `(${Caf.toString("" + key)})`;
        }),
      };
    }
  );
});
