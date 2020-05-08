module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.caf ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ./source */ 3);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** external "require('caffeine-script-runtime' /* ABC - not inlining fellow NPM *_/)" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-script-runtime' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 3 */
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./S3Parallel */ 4);

/***/ }),
/* 4 */
/*!************************************!*\
  !*** ./source/S3Parallel/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: S3Parallel/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 5))
.includeInNamespace(__webpack_require__(/*! ./S3Parallel */ 9))
.addModules({
  S3Comprehensions: __webpack_require__(/*! ./S3Comprehensions */ 26),
  S3P:              __webpack_require__(/*! ./S3P */ 23),
  S3PCli:           __webpack_require__(/*! ./S3PCli */ 27),
  StandardImport:   __webpack_require__(/*! ./StandardImport */ 15)
});
__webpack_require__(/*! ./Lib */ 10);

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./source/S3Parallel/namespace.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: S3Parallel/namespace.js

module.exports = __webpack_require__(/*! neptune-namespaces */ 6).addNamespace(
  'S3Parallel',
  (class S3Parallel extends Neptune.PackageNamespace {})
  ._configureNamespace(__webpack_require__(/*! ../../package.json */ 7))
);
__webpack_require__(/*! ./Lib/namespace */ 8);

/***/ }),
/* 6 */
/*!*************************************************************************************!*\
  !*** external "require('neptune-namespaces' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('neptune-namespaces' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 7 */
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: author, bin, bugs, dependencies, description, devDependencies, homepage, license, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"author\":\"GenUI LLC\",\"bin\":{\"s3p\":\"./s3p\"},\"bugs\":\"https:/github.com/generalui/s3p/issues\",\"dependencies\":{\"@art-suite/cli\":\"^1.1.1\",\"art-class-system\":\"^1.11.2\",\"art-standard-lib\":\"^1.65.1\",\"aws-sdk\":\"^2.643.0\",\"caffeine-script-runtime\":\"^1.13.3\",\"neptune-namespaces\":\"^4.0.0\",\"shell-escape\":\"^0.2.0\"},\"description\":\"S3P is a CLI and library that is 5x to 50x faster than aws-cli for bulk S3 operations including: summarize, compare, copy and sync.\",\"devDependencies\":{\"art-build-configurator\":\"^1.26.9\",\"art-testbench\":\"^1.17.2\",\"caffeine-script\":\"^0.72.1\",\"case-sensitive-paths-webpack-plugin\":\"^2.2.0\",\"chai\":\"^4.2.0\",\"coffee-loader\":\"^0.7.3\",\"css-loader\":\"^3.0.0\",\"json-loader\":\"^0.5.7\",\"mocha\":\"^7.1.1\",\"mock-fs\":\"^4.10.0\",\"script-loader\":\"^0.7.2\",\"style-loader\":\"^1.0.0\",\"webpack\":\"^4.39.1\",\"webpack-cli\":\"*\",\"webpack-dev-server\":\"^3.7.2\",\"webpack-merge\":\"^4.2.1\",\"webpack-node-externals\":\"^1.7.2\",\"webpack-stylish\":\"^0.1.8\"},\"homepage\":\"https://github.com/generalui/s3p\",\"license\":\"ISC\",\"name\":\"s3p\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/generalui/s3p.git\"},\"scripts\":{\"build\":\"webpack --progress\",\"start\":\"webpack-dev-server --hot --inline --progress --env.devServer\",\"test\":\"nn -s;mocha -u tdd\",\"testInBrowser\":\"webpack-dev-server --progress --env.devServer\"},\"version\":\"2.6.1\"}");

/***/ }),
/* 8 */
/*!********************************************!*\
  !*** ./source/S3Parallel/Lib/namespace.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: S3Parallel/Lib/namespace.js

module.exports = __webpack_require__(/*! ../namespace */ 5).addNamespace(
  'Lib',
  class Lib extends Neptune.PackageNamespace {}
);


/***/ }),
/* 9 */
/*!******************************************!*\
  !*** ./source/S3Parallel/S3Parallel.caf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return [__webpack_require__(/*! ./Lib */ 10), __webpack_require__(/*! ./S3P */ 23), __webpack_require__(/*! ./S3Comprehensions */ 26)];
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 10 */
/*!****************************************!*\
  !*** ./source/S3Parallel/Lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// generated by Neptune Namespaces v4.x.x
// file: S3Parallel/Lib/index.js

(module.exports = __webpack_require__(/*! ./namespace */ 8))
.includeInNamespace(__webpack_require__(/*! ./Lib */ 11))
.addModules({
  PromiseWorkerPool: __webpack_require__(/*! ./PromiseWorkerPool */ 18),
  S3:                __webpack_require__(/*! ./S3 */ 19),
  S3Keys:            __webpack_require__(/*! ./S3Keys */ 14)
});

/***/ }),
/* 11 */
/*!***************************************!*\
  !*** ./source/S3Parallel/Lib/Lib.caf ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  let exec;
  exec = __webpack_require__(/*! util */ 12).promisify(__webpack_require__(/*! child_process */ 13).exec);
  return [
    __webpack_require__(/*! ./S3Keys */ 14),
    {
      shellExec: function(command) {
        return exec(command).then(({ stdout }) => stdout);
      },
      humanByteSize: function(bytes, decimals = 2) {
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
      }
    }
  ];
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 12 */
/*!***********************************************************************!*\
  !*** external "require('util' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('util' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 13 */
/*!********************************************************************************!*\
  !*** external "require('child_process' /* ABC - not inlining fellow NPM *_/)" ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('child_process' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 14 */
/*!******************************************!*\
  !*** ./source/S3Parallel/Lib/S3Keys.caf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek", "present", "Error", "formattedInspect", "pad", "Math"],
    [global, __webpack_require__(/*! ../StandardImport */ 15)],
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
        getKeyCharIndex: (getKeyCharIndex = function(character) {
          return character ? supportedKeyChars.indexOf(character) : 0;
        }),
        getNextKeyChar: (getNextKeyChar = function(character) {
          return supportedKeyChars[1 + getKeyCharIndex(character)];
        }),
        getBisectChar: (getBisectChar = function(c1, c2) {
          let i1, i2;
          i1 = present(c1) ? getKeyCharIndex(c1) : 0;
          i2 = present(c2) ? getKeyCharIndex(c2) : supportedKeyChars.length - 1;
          return supportedKeyChars[((i1 + i2) / 2) | 0];
        }),
        getUpToNextSlash: (getUpToNextSlash = function(key, i) {
          let m, found;
          m = key.slice(i, key.length).match(/(^[^\/]*)\//);
          return (found = Caf.exists(m) && m[0])
            ? key.slice(0, i + found.length)
            : undefined;
        }),
        getBisectKey: (getBisectKey = function(
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
                          supportedKeyChars
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
        escapeKey: (escapeKey = function(key) {
          return /[\s()]/.test(key) ? `"${Caf.toString(key)}"` : key;
        }),
        padKey: (padKey = function(key) {
          return pad(key, 20 * Math.ceil(key.length / 20));
        }),
        getLastKeyWithPrefix: (getLastKeyWithPrefix = function(prefix) {
          return prefix.length < maxKeyLength
            ? prefix + lastKeyChar.repeat(maxKeyLength - prefix.length)
            : undefined;
        }),
        debugKey: (debugKey = function(key, shouldPad = true) {
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
        })
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 15 */
/*!**********************************************!*\
  !*** ./source/S3Parallel/StandardImport.caf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 16).mergeWithSelf(__webpack_require__(/*! art-class-system */ 17));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 16 */
/*!***********************************************************************************!*\
  !*** external "require('art-standard-lib' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-standard-lib' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 17 */
/*!***********************************************************************************!*\
  !*** external "require('art-class-system' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-class-system' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 18 */
/*!*****************************************************!*\
  !*** ./source/S3Parallel/Lib/PromiseWorkerPool.caf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "Promise", "max"],
    [global, __webpack_require__(/*! art-standard-lib */ 16), __webpack_require__(/*! art-class-system */ 17)],
    (BaseClass, Promise, max) => {
      let PromiseWorkerPool;
      return (PromiseWorkerPool = Caf.defClass(
        class PromiseWorkerPool extends BaseClass {
          constructor(_maxWorkers = 10) {
            super(...arguments);
            this._maxWorkers = _maxWorkers;
            this._stats = {
              jobs: { queued: 0, started: 0, succeeded: 0, failed: 0 },
              maxActiveWorkers: 0
            };
            this._queue = [];
            this._availableWorkers = this._maxWorkers;
          }
        },
        function(PromiseWorkerPool, classSuper, instanceSuper) {
          this.getter("stats");
          this.getter({
            queueSize: function() {
              return this._queue.length;
            },
            activeWorkers: function() {
              return this._maxWorkers - this._availableWorkers;
            }
          });
          this.prototype.queue = function(job) {
            this._jobCount++;
            return new Promise((resolve, reject) => {
              this._stats.jobs.queued++;
              this._queue.push(() => {
                this._stats.jobs.started++;
                return Promise.then(job)
                  .tap(() => this._stats.jobs.succeeded++)
                  .tapCatch(() => this._stats.jobs.failed++)
                  .then(resolve, reject);
              });
              return this._work();
            });
          };
          this.prototype._work = function() {
            let work, temp;
            return this._availableWorkers > 0 && (work = this._queue.pop())
              ? ((temp = this._finishWork) != null
                  ? temp
                  : (this._finishWork = () => {
                      this._availableWorkers++;
                      return this._work();
                    }),
                this._availableWorkers--,
                (this._stats.maxActiveWorkers = max(
                  this._stats.maxActiveWorkers,
                  this.activeWorkers
                )),
                Promise.then(work).finally(this._finishWork))
              : undefined;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 19 */
/*!**************************************!*\
  !*** ./source/S3Parallel/Lib/S3.caf ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "promisify",
      "BaseClass",
      "currentSecond",
      "log",
      "Array",
      "Error",
      "merge",
      "timeout",
      "isFunction",
      "present",
      "Promise"
    ],
    [
      global,
      __webpack_require__(/*! ../StandardImport */ 15),
      { promisify: __webpack_require__(/*! util */ 12).promisify }
    ],
    (
      promisify,
      BaseClass,
      currentSecond,
      log,
      Array,
      Error,
      merge,
      timeout,
      isFunction,
      present,
      Promise
    ) => {
      let exec, shellEscape, escape, S3;
      exec = promisify(__webpack_require__(/*! child_process */ 13).exec);
      shellEscape = __webpack_require__(/*! shell-escape */ 20);
      escape = function(single) {
        return shellEscape([single]);
      };
      __webpack_require__(/*! aws-sdk */ 21).config.setPromisesDependency(__webpack_require__(/*! bluebird */ 22));
      return (S3 = Caf.defClass(class S3 extends BaseClass {}, function(
        S3,
        classSuper,
        instanceSuper
      ) {
        this.awsSdkS3 = new (__webpack_require__(/*! aws-sdk */ 21).S3)({});
        this.classGetter({
          s3: function() {
            return this.awsSdkS3;
          }
        });
        this.listBuckets = () =>
          this.s3
            .listBuckets()
            .promise()
            .then(({ Buckets }) =>
              Caf.object(
                Buckets,
                ({ Name, CreationDate }) => CreationDate,
                null,
                null,
                ({ Name, CreationDate }) => Name
              )
            );
        this.list = ({ bucket, prefix, limit = 1000, startAfter }) => {
          let startTime;
          startTime = currentSecond();
          return this.s3
            .listObjectsV2({
              Bucket: bucket,
              Prefix: prefix,
              MaxKeys: limit,
              StartAfter: startAfter
            })
            .promise()
            .tapCatch(error =>
              log.error({
                "S3.list-error": { bucket, prefix, startAfter, limit, error }
              })
            )
            .then(results => {
              let duration;
              duration = currentSecond() - startTime;
              if (!Caf.is(results.Contents, Array)) {
                log.warn({
                  "S3.list-no-Contents": {
                    bucket,
                    prefix,
                    startAfter,
                    limit,
                    duration,
                    results
                  }
                });
                throw new Error("S3.list: Contents is not an array");
              } else {
                if (duration > 60) {
                  log.warn({
                    "S3.list-slow": {
                      bucket,
                      prefix,
                      startAfter,
                      limit,
                      duration,
                      results: merge(results, {
                        Contents: `Array ${Caf.toString(
                          results.Contents.length
                        )}`
                      })
                    }
                  });
                }
              }
              return results.Contents;
            });
        };
        this.copy = options => {
          let fromBucket,
            toBucket,
            fromKey,
            toKey,
            size,
            pretend,
            verbose,
            copyOptions,
            temp;
          temp = this._normalizeCopyOptions(options);
          fromBucket = temp.fromBucket;
          toBucket = temp.toBucket;
          fromKey = temp.fromKey;
          toKey = temp.toKey;
          size = temp.size;
          pretend = temp.pretend;
          verbose = temp.verbose;
          return size >= Caf.pow(1024, 3) || /\s/.test(toKey)
            ? this.largeCopy({
                fromBucket,
                toBucket,
                fromKey,
                toKey,
                pretend,
                verbose
              })
            : ((copyOptions = {
                CopySource: `${Caf.toString(fromBucket)}/${Caf.toString(
                  fromKey
                )}`,
                Bucket: toBucket,
                Key: toKey
              }),
              verbose ? log({ copyObject: copyOptions }) : undefined,
              pretend
                ? timeout(1, () => {
                    return { pretend: true };
                  })
                : this.s3.copyObject(copyOptions).promise());
        };
        this.delete = options =>
          this.s3.deleteObject({ Bucket: options.bucket, Key: options.key });
        this.largeCopy = options => {
          let fromBucket,
            toBucket,
            fromKey,
            toKey,
            pretend,
            verbose,
            command,
            temp;
          temp = this._normalizeCopyOptions(options);
          fromBucket = temp.fromBucket;
          toBucket = temp.toBucket;
          fromKey = temp.fromKey;
          toKey = temp.toKey;
          pretend = temp.pretend;
          verbose = temp.verbose;
          command = `aws s3 cp ${Caf.toString(
            escape(`s3://${Caf.toString(fromBucket)}/${Caf.toString(fromKey)}`)
          )} ${Caf.toString(
            escape(`s3://${Caf.toString(toBucket)}/${Caf.toString(toKey)}`)
          )}`;
          if (verbose) {
            log(command);
          }
          return pretend
            ? timeout(1, () => {
                return { pretend: true };
              })
            : exec(command);
        };
        this.headObject = ({ bucket, key }) =>
          this.s3.headObject({ Bucket: bucket, Key: key }).promise();
        this._normalizeCopyOptions = function(options) {
          let bucket,
            key,
            fromBucket,
            toBucket,
            fromKey,
            toKey,
            size,
            temp,
            temp1,
            temp2,
            temp3;
          bucket = options.bucket;
          key = options.key;
          fromBucket =
            undefined !== (temp = options.fromBucket) ? temp : bucket;
          toBucket = undefined !== (temp1 = options.toBucket) ? temp1 : bucket;
          fromKey = undefined !== (temp2 = options.fromKey) ? temp2 : key;
          toKey = undefined !== (temp3 = options.toKey) ? temp3 : key;
          size = options.size;
          if (isFunction(toKey)) {
            toKey = toKey(fromKey, fromBucket, toBucket, options.size);
          }
          if (
            !(
              present(fromBucket) &&
              present(toBucket) &&
              present(fromKey) &&
              present(toKey)
            )
          ) {
            throw new Error(
              "Missing one of: fromBucket, toBucket, fromKey, toKey or bucket or key as a default"
            );
          }
          return merge(options, { fromBucket, fromKey, toBucket, toKey });
        };
        this.shouldSyncObjects = function(options) {
          let fromBucket, toBucket, fromKey, toKey, temp;
          temp = this._normalizeCopyOptions(options);
          fromBucket = temp.fromBucket;
          toBucket = temp.toBucket;
          fromKey = temp.fromKey;
          toKey = temp.toKey;
          return Promise.then(() =>
            options.size < Caf.pow(1024, 2) || !options.size
              ? true
              : this.headObject(options).then(
                  ({ ContentLength }) => ContentLength !== options.size
                )
          );
        };
        this.syncObject = options =>
          this.shouldSyncObjects(options).then(shouldSync =>
            shouldSync
              ? this.copyObject(options).then(result =>
                  merge(result, { copied: true })
                )
              : { copied: false }
          );
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 20 */
/*!*******************************************************************************!*\
  !*** external "require('shell-escape' /* ABC - not inlining fellow NPM *_/)" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('shell-escape' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 21 */
/*!**************************************************************************!*\
  !*** external "require('aws-sdk' /* ABC - not inlining fellow NPM *_/)" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('aws-sdk' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 22 */
/*!***************************************************************************!*\
  !*** external "require('bluebird' /* ABC - not inlining fellow NPM *_/)" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('bluebird' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 23 */
/*!***********************************!*\
  !*** ./source/S3Parallel/S3P.caf ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "merge",
      "compactFlatten",
      "colors",
      "humanByteSize",
      "Math",
      "dirname",
      "Number",
      "Object",
      "Error",
      "objectDiff",
      "log",
      "objectWithout",
      "Promise",
      "PromiseWorkerPool",
      "present"
    ],
    [
      global,
      __webpack_require__(/*! path */ 24),
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 17),
      __webpack_require__(/*! ./Lib */ 10),
      { colors: __webpack_require__(/*! colors */ 25) }
    ],
    (
      merge,
      compactFlatten,
      colors,
      humanByteSize,
      Math,
      dirname,
      Number,
      Object,
      Error,
      objectDiff,
      log,
      objectWithout,
      Promise,
      PromiseWorkerPool,
      present
    ) => {
      let S3C,
        itemsByKey,
        summarizeHistogramGroups,
        summarizeHistogramGroupUnits,
        S3P;
      S3C = __webpack_require__(/*! ./S3Comprehensions */ 26);
      itemsByKey = function(itemList, toKey) {
        let from, into, to, i, temp;
        return (
          (from = itemList),
          (into = {}),
          from != null
            ? ((to = from.length),
              (i = 0),
              (() => {
                while (i < to) {
                  let Key, Size;
                  ({ Key, Size } = from[i]);
                  into[toKey != null ? toKey(Key) : Key] = Size;
                  temp = i++;
                }
                return temp;
              })())
            : undefined,
          into
        );
      };
      summarizeHistogramGroups = [
        "bytes",
        "kilobytes",
        "megabytes",
        "gigabytes",
        "terabytes",
        "petabytes",
        "exabytes",
        "zetabytes"
      ];
      summarizeHistogramGroupUnits = [
        "_B",
        "kB",
        "mB",
        "gB",
        "tB",
        "pB",
        "eB",
        "zB"
      ];
      return (S3P = Caf.defClass(class S3P extends Object {}, function(
        S3P,
        classSuper,
        instanceSuper
      ) {
        this.list = options => {
          let list;
          return S3C.each(
            merge(options, {
              returning: (list = []),
              mapList: l => {
                let from, into, to, i, temp;
                return (
                  (from = l),
                  (into = list),
                  from != null
                    ? ((to = from.length),
                      (i = 0),
                      (() => {
                        while (i < to) {
                          let v;
                          v = from[i];
                          into.push(v);
                          temp = i++;
                        }
                        return temp;
                      })())
                    : undefined,
                  into
                );
              }
            })
          );
        };
        this.summarize = options => {
          let summarizeFolders, summary;
          summarizeFolders = options.summarizeFolders;
          summary = {
            size: 0,
            maxSize: null,
            minSize: null,
            maxSizeKey: null,
            minSizeKey: null,
            sizeHistogram: {},
            folders: summarizeFolders && {}
          };
          return S3C.each(
            merge(options, {
              getProgress: () =>
                compactFlatten([
                  `totalSize: ${Caf.toString(
                    colors.green(`${Caf.toString(humanByteSize(summary.size))}`)
                  )}`,
                  `minSize: ${Caf.toString(
                    colors.green(
                      `${Caf.toString(humanByteSize(summary.minSize))}`
                    )
                  )}`,
                  `maxSize: ${Caf.toString(
                    colors.green(
                      `${Caf.toString(humanByteSize(summary.maxSize))}`
                    )
                  )}`
                ]).join(" "),
              map: ({ Size, Key }) => {
                let floorSize,
                  logSize,
                  group,
                  groupKey,
                  groupUnit,
                  g,
                  out,
                  folder,
                  temp,
                  temp1,
                  base,
                  into,
                  i1,
                  temp2,
                  temp3,
                  temp4;
                floorSize = humanByteSize(
                  Math.pow(
                    2,
                    1 + (logSize = (Math.log(Size) / Math.log(2)) | 0)
                  ),
                  0
                );
                group =
                  (temp =
                    summarizeHistogramGroups[
                      (groupKey = ((logSize + 1) / 10) | 0)
                    ]) != null
                    ? temp
                    : "big";
                groupUnit = summarizeHistogramGroupUnits[groupKey];
                g =
                  (temp1 = (base = summary.sizeHistogram)[group]) != null
                    ? temp1
                    : (base[group] =
                        ((into = out = { items: 0, size: 0 }),
                        (i1 = 0),
                        (() => {
                          while (i1 < 10) {
                            let i;
                            i = i1;
                            out[(1 << i) + groupUnit] = 0;
                            i1++;
                          }
                        })(),
                        into));
                g.items += 1;
                g.size += Size;
                g[floorSize] = (g[floorSize] | 0) + 1;
                if (summarizeFolders) {
                  folder = summary.folders;
                  Caf.each2(dirname(Key).split("/"), subFolder => {
                    let temp5;
                    folder =
                      (temp5 = folder[subFolder]) != null
                        ? temp5
                        : (folder[subFolder] = { size: 0, files: 0 });
                    folder.size += Size;
                    return folder.files++;
                  });
                }
                summary.size += Size;
                if ((temp2 = Size >= summary.maxSize) != null ? temp2 : Size) {
                  summary.maxSize = Size;
                  summary.maxSizeKey = Key;
                }
                if ((temp3 = Size <= summary.minSize) != null ? temp3 : Size) {
                  summary.minSize = Size;
                  summary.minSizeKey = Key;
                }
                return (summary.minSize = Math.min(
                  (temp4 = summary.minSize) != null ? temp4 : Size,
                  Size
                ));
              }
            })
          ).then(stats => {
            let humanize, temp;
            summary.averageSize =
              (summary.size /
                ((temp = stats.matchingItems) != null ? temp : stats.items)) |
              0;
            if (summarizeFolders) {
              humanize = folder => {
                if (Caf.is(folder.size, Number)) {
                  folder.humanSize = humanByteSize(folder.size);
                }
                return Caf.each2(
                  folder,
                  subFolder => humanize(subFolder),
                  subFolder => Caf.is(subFolder, Object)
                );
              };
              humanize(summary.folders);
            }
            return merge(stats, summary, {
              human: Caf.object(
                summary,
                (v, k) => humanByteSize(v),
                (v, k) => /size$/i.test(k)
              )
            });
          });
        };
        this.compare = options => {
          let logToDelete,
            logToCopy,
            logToReplace,
            verbose,
            toKey,
            bucket,
            toBucket,
            stats,
            counts,
            bytes;
          options = S3C.normalizeOptions(options);
          logToDelete = options.logToDelete;
          logToCopy = options.logToCopy;
          logToReplace = options.logToReplace;
          verbose = options.verbose;
          toKey = options.toKey;
          bucket = options.bucket;
          toBucket = options.toBucket;
          if (!toBucket) {
            throw new Error("toBucket required");
          }
          return S3C.each(
            merge(
              [
                options,
                {
                  returning: (stats = {
                    counts: (counts = {
                      needToCopy: 0,
                      needToReplace: 0,
                      needToDelete: 0,
                      missingInTarget: 0,
                      different: 0,
                      replaceSmaller: 0,
                      replaceBigger: 0,
                      same: 0
                    }),
                    bytes: (bytes = {
                      needToCopy: 0,
                      needToDelete: 0,
                      needToReplace: 0,
                      needToReplaceWith: 0,
                      same: 0
                    })
                  })
                }
              ],
              {
                getProgress: () =>
                  compactFlatten([
                    counts.same > 0
                      ? `same: ${Caf.toString(
                          colors.green(
                            `${Caf.toString(counts.same)}(${Caf.toString(
                              humanByteSize(bytes.same)
                            )})`
                          )
                        )}`
                      : undefined,
                    counts.needToCopy > 0
                      ? `toCopy: ${Caf.toString(
                          colors.green(
                            `${Caf.toString(counts.needToCopy)}(${Caf.toString(
                              humanByteSize(bytes.needToCopy)
                            )})`
                          )
                        )}`
                      : undefined,
                    counts.needToReplace > 0
                      ? `toReplace: ${Caf.toString(
                          colors.green(
                            `${Caf.toString(
                              counts.needToReplace
                            )}(${Caf.toString(
                              humanByteSize(bytes.needToReplace)
                            )} with ${Caf.toString(
                              humanByteSize(bytes.needToReplaceWith)
                            )})`
                          )
                        )}`
                      : undefined,
                    counts.needToDelete > 0
                      ? `toDelete: ${Caf.toString(
                          colors.green(
                            `${Caf.toString(
                              counts.needToDelete
                            )}(${Caf.toString(
                              humanByteSize(bytes.needToDelete)
                            )})`
                          )
                        )}`
                      : undefined
                  ]).join(" "),
                compare: true,
                mapList: (sourceItems, targetItems) => {
                  let reverseKeyMap;
                  reverseKeyMap =
                    toKey &&
                    Caf.object(
                      sourceItems,
                      ({ Key }) => Key,
                      null,
                      null,
                      ({ Key }) => toKey(Key)
                    );
                  return objectDiff(
                    itemsByKey(sourceItems, toKey),
                    itemsByKey(targetItems),
                    (key, sourceValue) => {
                      let fromKey, temp;
                      fromKey =
                        (temp =
                          Caf.exists(reverseKeyMap) && reverseKeyMap[key]) !=
                        null
                          ? temp
                          : key;
                      if (logToCopy || verbose) {
                        log(
                          `aws s3 cp s3://${Caf.toString(
                            bucket
                          )}/${Caf.toString(fromKey)} s3://${Caf.toString(
                            toBucket
                          )}/${Caf.toString(key)} # ${Caf.toString(
                            humanByteSize(sourceValue)
                          )}`
                        );
                      }
                      bytes.needToCopy += sourceValue;
                      counts.needToCopy++;
                      return counts.missingInTarget++;
                    },
                    (key, targetValue) => {
                      if (logToDelete || verbose) {
                        log(
                          `rm s3://${Caf.toString(toBucket)}/${Caf.toString(
                            key
                          )} # ${Caf.toString(humanByteSize(targetValue))}`
                        );
                      }
                      bytes.needToDelete += targetValue;
                      return counts.needToDelete++;
                    },
                    (key, sourceValue, targetValue) => {
                      let fromKey, temp;
                      fromKey =
                        (temp =
                          Caf.exists(reverseKeyMap) && reverseKeyMap[key]) !=
                        null
                          ? temp
                          : key;
                      if (logToReplace || verbose) {
                        log(
                          `aws s3 cp s3://${Caf.toString(
                            bucket
                          )}/${Caf.toString(fromKey)} s3://${Caf.toString(
                            toBucket
                          )}/${Caf.toString(key)} # replace ${Caf.toString(
                            humanByteSize(targetValue)
                          )} with ${Caf.toString(humanByteSize(sourceValue))}`
                        );
                      }
                      counts.different++;
                      counts.needToReplace++;
                      bytes.needToReplace += targetValue;
                      bytes.needToReplaceWith += sourceValue;
                      return sourceValue > targetValue
                        ? counts.replaceSmaller++
                        : counts.replaceBigger++;
                    },
                    (key, value) => {
                      bytes.same += value;
                      return counts.same++;
                    }
                  );
                }
              }
            )
          ).then(stats => {
            let cleanStats;
            cleanStats = s =>
              Caf.object(
                s,
                v => (Caf.is(v, Object) ? cleanStats(v) : v),
                v => v !== 0
              );
            return cleanStats(stats);
          });
        };
        this.copy = options =>
          this._copyWrapper(options, updatedOptions =>
            S3C.eachPromises(updatedOptions)
          );
        this.sync = options =>
          this._copyWrapper(options, options2 => {
            let copyFile,
              stats,
              overwrite,
              dryrun,
              pretend,
              toKey,
              toBucket,
              temp;
            copyFile = options2.map;
            stats = options2.stats;
            overwrite = options2.overwrite;
            dryrun = options2.dryrun;
            pretend = undefined !== (temp = options2.pretend) ? temp : dryrun;
            toKey = options2.toKey;
            toBucket = options2.toBucket;
            stats.toDeleteFiles = 0;
            stats.toDeleteBytes = 0;
            stats.toReplaceFiles = 0;
            stats.toReplaceBytes = 0;
            stats.toReplaceWithBytes = 0;
            stats.replacedFiles = 0;
            stats.replacedBytes = 0;
            stats.unchangedFiles = 0;
            stats.unchangedBytes = 0;
            return S3C.each(
              merge(objectWithout(options2, "map"), {
                compare: true,
                getProgress: duration =>
                  options2.getProgress(duration) +
                  ` same: ${Caf.toString(
                    colors.green(
                      `${Caf.toString(stats.unchangedFiles)}(${Caf.toString(
                        humanByteSize(stats.unchangedBytes)
                      )})`
                    )
                  )} toDelete: ${Caf.toString(
                    colors.green(
                      `${Caf.toString(stats.toDeleteFiles)}(${Caf.toString(
                        humanByteSize(stats.toDeleteBytes)
                      )})`
                    )
                  )}`,
                mapList: (sourceItems, targetItems) => {
                  let copyPromises, reverseKeyMap;
                  copyPromises = [];
                  reverseKeyMap =
                    toKey &&
                    Caf.object(
                      sourceItems,
                      ({ Key }) => Key,
                      null,
                      null,
                      ({ Key }) => toKey(Key)
                    );
                  objectDiff(
                    itemsByKey(sourceItems, toKey),
                    itemsByKey(targetItems),
                    (key, sourceValue) => {
                      let fromKey, temp1;
                      fromKey =
                        (temp1 =
                          Caf.exists(reverseKeyMap) && reverseKeyMap[key]) !=
                        null
                          ? temp1
                          : key;
                      return copyPromises.push(
                        copyFile({ Key: fromKey, Size: sourceValue })
                      );
                    },
                    (key, targetValue) => {
                      log(
                        `aws s3 rm s3://${Caf.toString(
                          toBucket
                        )}/${Caf.toString(
                          key
                        )} # you must do this. size: ${Caf.toString(
                          humanByteSize(targetValue)
                        )}`
                      );
                      stats.toDeleteBytes += targetValue;
                      return stats.toDeleteFiles++;
                    },
                    (key, sourceValue, targetValue) => {
                      let fromKey, temp1;
                      fromKey =
                        (temp1 =
                          Caf.exists(reverseKeyMap) && reverseKeyMap[key]) !=
                        null
                          ? temp1
                          : key;
                      return overwrite
                        ? (log(
                            `# overwriting s3://${Caf.toString(
                              toBucket
                            )}/${Caf.toString(
                              key
                            )} - replacing targetSize: ${Caf.toString(
                              targetValue
                            )} with sourceSize ${Caf.toString(sourceValue)}`
                          ),
                          copyPromises.push(
                            copyFile({ Key: fromKey, Size: sourceValue })
                          ),
                          stats.replacedFiles++,
                          (stats.replacedBytes += targetValue))
                        : (log(
                            `# NOT overwriting s3://${Caf.toString(
                              toBucket
                            )}/${Caf.toString(
                              key
                            )} - replacing targetSize: ${Caf.toString(
                              targetValue
                            )} with sourceSize ${Caf.toString(
                              sourceValue
                            )} (use overwrite: true to overwrite)`
                          ),
                          stats.toReplaceFiles++,
                          (stats.toReplaceBytes += targetValue),
                          (stats.toReplaceWithBytes = sourceValue));
                    },
                    (key, value) => {
                      stats.unchangedBytes += value;
                      return stats.unchangedFiles++;
                    }
                  );
                  return Promise.all(copyPromises);
                }
              })
            );
          });
        this._copyWrapper = (options, eachFunction) => {
          let s3,
            toKey,
            stats,
            pretend,
            verbose,
            copyConcurrency,
            largeCopyConcurrency,
            maxQueueSize,
            copyPwp,
            largeCopyPwp,
            largeCopyThreshold,
            temp,
            temp1,
            temp2,
            temp3,
            temp4,
            temp5,
            temp6;
          options = S3C.normalizeOptions(options);
          s3 = undefined !== (temp = options.s3) ? temp : __webpack_require__(/*! ./Lib/S3 */ 19);
          toKey = options.toKey;
          stats = options.stats;
          pretend = options.pretend;
          verbose = options.verbose;
          copyConcurrency =
            undefined !== (temp1 = options.copyConcurrency) ? temp1 : 500;
          largeCopyConcurrency =
            undefined !== (temp2 = options.largeCopyConcurrency) ? temp2 : 75;
          maxQueueSize =
            undefined !== (temp3 = options.maxQueueSize)
              ? temp3
              : copyConcurrency * 100;
          copyPwp =
            undefined !== (temp4 = options.copyPwp)
              ? temp4
              : new PromiseWorkerPool(copyConcurrency);
          largeCopyPwp =
            undefined !== (temp5 = options.largeCopyPwp)
              ? temp5
              : new PromiseWorkerPool(largeCopyConcurrency);
          largeCopyThreshold =
            undefined !== (temp6 = options.largeCopyThreshold)
              ? temp6
              : 100 * Caf.pow(1024, 2);
          stats != null ? stats : (stats = {});
          stats.copiedBytes = 0;
          stats.copiedBytesPerSecond = 0;
          stats.copyingBytesInFlight = 0;
          stats.copyingBytesStarted = 0;
          stats.copyingFilesStarted = 0;
          stats.copiedFiles = 0;
          if (!present(options.toBucket)) {
            throw new Error("toBucket required");
          }
          return eachFunction(
            merge(options, {
              stats,
              throttle: () =>
                copyPwp.queueSize + largeCopyPwp.queueSize >= maxQueueSize,
              getProgress: duration =>
                compactFlatten([
                  "copied",
                  `${Caf.toString(
                    colors.green(
                      `${Caf.toString(stats.copiedFiles)}/${Caf.toString(
                        stats.copyingFilesStarted
                      )} ${Caf.toString(
                        humanByteSize(stats.copiedBytes)
                      )}/${Caf.toString(
                        humanByteSize(stats.copyingBytesStarted)
                      )}`
                    )
                  )}`,
                  colors.blue(
                    `${Caf.toString(
                      humanByteSize(
                        (stats.copiedBytesPerSecond =
                          stats.copiedBytes / duration)
                      )
                    )}/s`
                  ),
                  `inFlight: ${Caf.toString(
                    colors.green(humanByteSize(stats.copyingBytesInFlight))
                  )}`,
                  `copyWorkers: ${Caf.toString(
                    colors.green(
                      `${Caf.toString(copyPwp.activeWorkers)} + ${Caf.toString(
                        largeCopyPwp.activeWorkers
                      )}`
                    )
                  )}`,
                  0 < copyPwp.queueSize + largeCopyPwp.queueSize
                    ? `copyQueue: ${Caf.toString(
                        colors.green(
                          `${Caf.toString(copyPwp.queueSize)} + ${Caf.toString(
                            largeCopyPwp.queueSize
                          )}`
                        )
                      )}`
                    : undefined,
                  pretend ? colors.yellow("PRETENDING") : undefined
                ]).join(" "),
              map: ({ Key: key, Size }) => {
                stats.copyingFilesStarted++;
                stats.copyingBytesStarted += Size;
                return (Size < largeCopyThreshold
                  ? copyPwp
                  : largeCopyPwp
                ).queue(() => {
                  stats.copyingBytesInFlight += Size;
                  options = {
                    pretend,
                    verbose,
                    bucket: options.bucket,
                    toBucket: options.toBucket,
                    key,
                    size: Size
                  };
                  return (Size < largeCopyThreshold
                    ? s3.copy(options)
                    : s3.largeCopy(options)
                  ).then(() => {
                    stats.copyingBytesInFlight -= Size;
                    stats.copiedFiles++;
                    return (stats.copiedBytes += Size);
                  });
                });
              }
            })
          ).then(stats => {
            delete stats.copyingBytesInFlight;
            delete stats.copyingFilesStarted;
            delete stats.copyingBytesStarted;
            stats.copiedBytesPerSecond = stats.copiedBytes / stats.duration;
            return this.getStatsWithHumanByteSizes(stats);
          });
        };
        this.getStatsWithHumanByteSizes = function(stats) {
          return merge(stats, {
            human: Caf.object(
              stats,
              (stat, key) => humanByteSize(stat),
              (stat, key) => /byte|size/i.test(key)
            )
          });
        };
      }));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 24 */
/*!***********************************************************************!*\
  !*** external "require('path' /* ABC - not inlining fellow NPM *_/)" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('path' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 25 */
/*!*************************************************************************!*\
  !*** external "require('colors' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('colors' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 26 */
/*!************************************************!*\
  !*** ./source/S3Parallel/S3Comprehensions.caf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "getLastKeyWithPrefix",
      "Error",
      "compactFlatten",
      "log",
      "merge",
      "objectWithout",
      "Function",
      "Promise",
      "PromiseWorkerPool",
      "currentSecond",
      "interval",
      "durationString",
      "timeout",
      "getBisectKey",
      "pad",
      "debugKey",
      "Math",
      "peek",
      "formattedInspect",
      "isFunction"
    ],
    [
      global,
      __webpack_require__(/*! path */ 24),
      __webpack_require__(/*! art-standard-lib */ 16),
      __webpack_require__(/*! art-class-system */ 17),
      __webpack_require__(/*! ./Lib */ 10),
      { colors: __webpack_require__(/*! colors */ 25) }
    ],
    (
      getLastKeyWithPrefix,
      Error,
      compactFlatten,
      log,
      merge,
      objectWithout,
      Function,
      Promise,
      PromiseWorkerPool,
      currentSecond,
      interval,
      durationString,
      timeout,
      getBisectKey,
      pad,
      debugKey,
      Math,
      peek,
      formattedInspect,
      isFunction
    ) => {
      let S3Comprehensions;
      return (S3Comprehensions = Caf.defClass(
        class S3Comprehensions extends Object {},
        function(S3Comprehensions, classSuper, instanceSuper) {
          let filterNone;
          this.normalizeOptions = options => {
            let dryrun,
              toPrefix,
              addPrefix,
              prefix,
              pattern,
              pretend,
              toKey,
              map,
              mapList,
              returnValue,
              filter,
              startAfter,
              stopAt,
              withFn,
              whenFn,
              returningV,
              prefixStopAt,
              r,
              e,
              temp,
              temp1,
              temp2,
              temp3,
              temp4;
            dryrun = options.dryrun;
            toPrefix = options.toPrefix;
            addPrefix = options.addPrefix;
            prefix = undefined !== (temp = options.prefix) ? temp : "";
            pattern = options.pattern;
            pretend = undefined !== (temp1 = options.pretend) ? temp1 : dryrun;
            toKey = options.toKey;
            map = options.map;
            mapList = options.mapList;
            returnValue = options.returnValue;
            filter = options.filter;
            startAfter =
              undefined !== (temp2 = options.startAfter) ? temp2 : "";
            stopAt = options.stopAt;
            withFn = options.with;
            whenFn = options.when;
            returningV =
              (temp3 = options.returning) != null ? temp3 : options.into;
            if (
              !(
                dryrun ||
                toPrefix ||
                withFn ||
                pattern ||
                returningV ||
                whenFn ||
                prefix != null ||
                !(startAfter != null) ||
                !(stopAt != null)
              )
            ) {
              return options;
            }
            try {
              startAfter = `${Caf.toString(startAfter)}`;
              if (stopAt) {
                stopAt = `${Caf.toString(stopAt)}`;
              }
              prefix = `${Caf.toString(prefix)}`;
              if (startAfter < prefix) {
                startAfter = prefix;
              }
              prefixStopAt = getLastKeyWithPrefix(prefix != null ? prefix : "");
              if (!stopAt || stopAt > prefixStopAt) {
                stopAt = prefixStopAt;
              }
              if (whenFn) {
                if (filter) {
                  throw new Error("only use one: when or filter");
                }
                filter = whenFn;
              }
              if (withFn || pattern) {
                if (
                  compactFlatten([withFn, map, pattern, mapList]).length > 1
                ) {
                  throw new Error(
                    "only use one: with, map, pattern or mapList"
                  );
                }
                map = withFn != null ? withFn : ({ Key }) => Key.match(pattern);
              }
              if (toPrefix || addPrefix) {
                if (compactFlatten([toPrefix, addPrefix, toKey]).length > 1) {
                  throw new Error("only use one: addPrefix, toPrefix, toKey");
                }
                toKey = (() => {
                  switch (false) {
                    case !toPrefix:
                      return prefix
                        ? ((r = RegExp(`^${Caf.toString(prefix)}`)),
                          key => key.replace(r, toPrefix))
                        : key => toPrefix + key;
                    case !addPrefix:
                      return key => addPrefix + key;
                  }
                })();
              }
            } catch (error) {
              e = error;
              log({ options });
              throw e;
            }
            return merge(
              objectWithout(
                options,
                "dryrun",
                "toPrefix",
                "withFn",
                "pattern",
                "into",
                "returning",
                "whenFn",
                "prefix",
                "addPrefix"
              ),
              {
                originalOptions:
                  (temp4 = options.originalOptions) != null ? temp4 : options,
                pretend,
                toKey,
                filter,
                map,
                mapList,
                returnValue,
                startAfter,
                stopAt
              }
            );
          };
          filterNone = function() {
            return true;
          };
          this.eachPromises = options => {
            let failed, map, filter, temp;
            options = this.normalizeOptions(options);
            failed = undefined;
            map = options.map;
            filter = undefined !== (temp = options.filter) ? temp : filterNone;
            if (!Caf.is(map, Function)) {
              throw new Error("Expecting options.map");
            }
            return this.each(
              merge(options, {
                mapList: items => {
                  let from, into, to, i, temp1;
                  return Promise.all(
                    ((from = items),
                    (into = []),
                    from != null
                      ? ((to = from.length),
                        (i = 0),
                        (() => {
                          while (i < to) {
                            let item;
                            item = from[i];
                            if (filterNone(item)) {
                              into.push(
                                Promise.then(() => map(item)).catch(error => {
                                  log({ Key: item.Key, error });
                                  return (failed != null
                                    ? failed
                                    : (failed = [])
                                  ).push(item.Key);
                                })
                              );
                            }
                            temp1 = i++;
                          }
                          return temp1;
                        })())
                      : undefined,
                    into)
                  );
                }
              })
            ).then(result =>
              failed != null ? merge(result, { failed }) : result
            );
          };
          this.find = options => {
            let withFn, temp;
            options = this.normalizeOptions(options);
            withFn = (temp = options.map) != null ? temp : a => a;
            return this.each(
              merge(options, {
                map: item =>
                  (() => {
                    throw { found: withFn(item) };
                  })()
              })
            ).catch(
              error =>
                error.found ||
                (() => {
                  throw error;
                })()
            );
          };
          this.array = options => {
            let withFn, apply, store, intoArray, temp, temp1, temp2;
            options = this.normalizeOptions(options);
            withFn =
              (temp = (temp1 = options.with) != null ? temp1 : options.map) !=
              null
                ? temp
                : a => a;
            apply = item => withFn(item, item.Key);
            store = v => intoArray.push(v);
            return this.each(
              merge(options, {
                into: (intoArray = (temp2 = options.into) != null ? temp2 : []),
                with: item =>
                  Promise.resolve(withFn(item, item.Key)).then(store)
              })
            );
          };
          this.object = options => {
            let withFn, withKey, store, intoObject, temp, temp1, temp2;
            options = this.normalizeOptions(options);
            withFn = (temp = options.map) != null ? temp : a => a;
            withKey =
              (temp1 = options.withKey) != null ? temp1 : ({ Key }) => Key;
            store = ([k, v]) => (intoObject[k] = v);
            return this.each(
              merge(options, {
                into: (intoObject =
                  (temp2 = options.into) != null ? temp2 : {}),
                with: item =>
                  Promise.all([
                    withKey(item, item.Key),
                    withFn(item, item.Key)
                  ]).then(store)
              })
            );
          };
          this.each = options => {
            let quiet,
              showProgress,
              debug,
              bucket,
              startAfter,
              stopAt,
              filter,
              compare,
              toBucket,
              toKey,
              limit,
              maxListRequests,
              listConcurrency,
              returnValue,
              map,
              mapList,
              aggressive,
              getProgress,
              verboseProgress,
              throttle,
              stats,
              s3,
              pwp,
              _reduce,
              itemsFound,
              requestsUsed,
              maxOutstanding,
              outstanding,
              startTime,
              matchingItems,
              report,
              progressReporter,
              applyF,
              throttled,
              waitForThrottle,
              eachRecursive,
              temp,
              temp1,
              temp2,
              temp3,
              temp4,
              temp5;
            options = this.normalizeOptions(options);
            quiet = options.quiet;
            showProgress =
              undefined !== (temp = options.showProgress) ? temp : !quiet;
            debug = options.debug;
            bucket = options.bucket;
            startAfter = options.startAfter;
            stopAt = options.stopAt;
            filter = options.filter;
            compare = options.compare;
            toBucket = options.toBucket;
            toKey = undefined !== (temp1 = options.toKey) ? temp1 : a => a;
            limit = undefined !== (temp2 = options.limit) ? temp2 : 1000;
            maxListRequests = options.maxListRequests;
            listConcurrency =
              undefined !== (temp3 = options.listConcurrency) ? temp3 : 100;
            returnValue = options.returnValue;
            map = options.map;
            mapList = options.mapList;
            aggressive = options.aggressive;
            getProgress = options.getProgress;
            verboseProgress = options.verboseProgress;
            throttle = options.throttle;
            stats = options.stats;
            s3 =
              undefined !== (temp4 = options.s3) ? temp4 : __webpack_require__(/*! ./Lib/S3 */ 19);
            pwp =
              undefined !== (temp5 = options.pwp)
                ? temp5
                : new PromiseWorkerPool(listConcurrency);
            if (compare && map && toBucket) {
              throw new Error(
                "cannot use both `compare` and `map` - use mapList instead"
              );
            }
            _reduce = options.reduce;
            itemsFound = requestsUsed = maxOutstanding = outstanding = 0;
            startTime = currentSecond();
            matchingItems = filter ? 0 : undefined;
            if (showProgress) {
              report = message => {
                let duration, itemsPerSecond, efficiency;
                duration = currentSecond() - startTime;
                itemsPerSecond = itemsFound / duration;
                efficiency = ((itemsFound / (requestsUsed * limit)) * 100) | 0;
                return log(
                  "s3p: " +
                    compactFlatten([
                      `d: ${Caf.toString(durationString(duration, 2))}`,
                      `items: ${Caf.toString(itemsFound)}`,
                      `items/s: ${Caf.toString(itemsPerSecond | 0)}`,
                      `listRequests: ${Caf.toString(requestsUsed)}`,
                      verboseProgress
                        ? `efficiency: ${Caf.toString(efficiency)}%`
                        : undefined,
                      verboseProgress
                        ? `outstanding: ${Caf.toString(outstanding)}`
                        : undefined,
                      matchingItems
                        ? `matches: ${Caf.toString(matchingItems)}`
                        : undefined,
                      throttled > 0
                        ? "listWorkers: throttled"
                        : pwp.activeWorkers > 0
                        ? `listWorkers: ${Caf.toString(pwp.activeWorkers)}`
                        : undefined,
                      pwp.queueSize > 0
                        ? `listQueue: ${Caf.toString(pwp.queueSize)}`
                        : undefined,
                      (Caf.isF(getProgress) && getProgress(duration)) || null,
                      message
                    ]).join(", ")
                );
              };
              progressReporter = interval(1000, report);
            }
            applyF = (
              items,
              compareItems,
              compareStartAfter,
              compareStopAt
            ) => {
              itemsFound += items.length;
              return Promise.then(() => {
                let filteredItems,
                  from,
                  into,
                  to,
                  i,
                  from1,
                  into1,
                  to1,
                  i1,
                  from2,
                  into2,
                  to2,
                  i2,
                  from3,
                  into3,
                  to3,
                  i3,
                  temp6,
                  temp7,
                  temp8,
                  temp9;
                return (() => {
                  switch (false) {
                    case !mapList:
                      return filter
                        ? ((filteredItems =
                            ((from = items),
                            (into = []),
                            from != null
                              ? ((to = from.length),
                                (i = 0),
                                (() => {
                                  while (i < to) {
                                    let item;
                                    item = from[i];
                                    if (filter(item)) {
                                      into.push(item);
                                    }
                                    temp6 = i++;
                                  }
                                  return temp6;
                                })())
                              : undefined,
                            into)),
                          (matchingItems += filteredItems.length),
                          mapList(
                            filteredItems,
                            ((from1 = compareItems),
                            (into1 = []),
                            from1 != null
                              ? ((to1 = from1.length),
                                (i1 = 0),
                                (() => {
                                  while (i1 < to1) {
                                    let item;
                                    item = from1[i1];
                                    if (filter(item)) {
                                      into1.push(item);
                                    }
                                    temp7 = i1++;
                                  }
                                  return temp7;
                                })())
                              : undefined,
                            into1),
                            compareStartAfter,
                            compareStopAt
                          ))
                        : mapList(
                            items,
                            compareItems,
                            compareStartAfter,
                            compareStopAt
                          );
                    case !(map && filter):
                      return (
                        (from2 = items),
                        (into2 = from2),
                        from2 != null
                          ? ((to2 = from2.length),
                            (i2 = 0),
                            (() => {
                              while (i2 < to2) {
                                let item;
                                item = from2[i2];
                                if (filter(item)) {
                                  matchingItems++;
                                  map(item);
                                }
                                temp8 = i2++;
                              }
                              return temp8;
                            })())
                          : undefined,
                        into2
                      );
                    case !map:
                      return (
                        (from3 = items),
                        (into3 = from3),
                        from3 != null
                          ? ((to3 = from3.length),
                            (i3 = 0),
                            (() => {
                              while (i3 < to3) {
                                let item;
                                item = from3[i3];
                                map(item);
                                temp9 = i3++;
                              }
                              return temp9;
                            })())
                          : undefined,
                        into3
                      );
                  }
                })();
              }).then(() => items.length);
            };
            throttled = 0;
            waitForThrottle = () =>
              Promise.then(() =>
                Caf.isF(throttle) && throttle()
                  ? (throttled++,
                    timeout(1000).then(() => {
                      throttled--;
                      return waitForThrottle();
                    }))
                  : undefined
              );
            eachRecursive = (
              startAfter,
              stopAt,
              usePrefixBisect = false,
              debugContext
            ) => {
              let middleKey, rawLeftCount, rawRightCount, applyPromise;
              if (requestsUsed >= maxListRequests || startAfter >= stopAt) {
                return Promise.resolve(0);
              }
              middleKey = getBisectKey(startAfter, stopAt, usePrefixBisect);
              if (showProgress === "verbose") {
                report();
              }
              debug &&
                log(
                  `debug: START:  ${Caf.toString(
                    pad(debugContext != null ? debugContext : "root", 10)
                  )} startAfter: ${Caf.toString(
                    debugKey(startAfter)
                  )}  middleKey: ${Caf.toString(
                    debugKey(middleKey)
                  )}  stopAt: ${Caf.toString(
                    debugKey(stopAt)
                  )}  usePrefixBisect: ${Caf.toString(usePrefixBisect)}`
                );
              rawLeftCount = rawRightCount = null;
              applyPromise = null;
              return waitForThrottle()
                .then(() => {
                  requestsUsed += 2;
                  maxOutstanding = Math.max(maxOutstanding, (outstanding += 2));
                  return Promise.all([
                    pwp.queue(() => s3.list({ bucket, limit, startAfter })),
                    pwp.queue(() =>
                      s3.list({ bucket, limit, startAfter: middleKey })
                    )
                  ]).then(([rawLeftItems, rawRightItems]) => {
                    let from, into, to, i, from1, into1, to1, i1, temp6, temp7;
                    rawLeftCount =
                      Caf.exists(rawLeftItems) && rawLeftItems.length;
                    rawRightCount =
                      Caf.exists(rawRightItems) && rawRightItems.length;
                    return [
                      ((from = rawLeftItems),
                      (into = []),
                      from != null
                        ? ((to = from.length),
                          (i = 0),
                          (() => {
                            while (i < to) {
                              let item;
                              item = from[i];
                              if (item.Key <= middleKey) {
                                into.push(item);
                              }
                              temp6 = i++;
                            }
                            return temp6;
                          })())
                        : undefined,
                      into),
                      ((from1 = rawRightItems),
                      (into1 = []),
                      from1 != null
                        ? ((to1 = from1.length),
                          (i1 = 0),
                          (() => {
                            while (i1 < to1) {
                              let item;
                              item = from1[i1];
                              if (item.Key <= stopAt) {
                                into1.push(item);
                              }
                              temp7 = i1++;
                            }
                            return temp7;
                          })())
                        : undefined,
                      into1)
                    ];
                  });
                })
                .finally(() => (outstanding -= 2))
                .then(([leftItems, rightItems]) => {
                  let leftCompareOptions, rightCompareOptions;
                  return Promise.all([
                    leftItems,
                    rightItems,
                    compare &&
                      toBucket &&
                      this._compareList(
                        (leftCompareOptions = {
                          limit,
                          pwp,
                          startAfter: toKey(startAfter),
                          bucket: toBucket,
                          stopAt: toKey(
                            leftItems.length === limit
                              ? peek(leftItems).Key
                              : middleKey
                          )
                        })
                      ),
                    compare &&
                      toBucket &&
                      this._compareList(
                        (rightCompareOptions = {
                          limit,
                          pwp,
                          bucket: toBucket,
                          startAfter: toKey(middleKey),
                          stopAt: toKey(
                            rightItems.length === limit
                              ? peek(rightItems).Key
                              : stopAt
                          )
                        })
                      ),
                    leftCompareOptions,
                    rightCompareOptions
                  ]);
                })
                .then(
                  ([
                    leftItems,
                    rightItems,
                    compareLeftItems,
                    compareRightItems,
                    leftCompareOptions,
                    rightCompareOptions
                  ]) => {
                    let base, base1;
                    applyPromise = Promise.all([
                      applyF(
                        leftItems,
                        compareLeftItems,
                        Caf.exists(leftCompareOptions) &&
                          leftCompareOptions.startAfter,
                        Caf.exists(leftCompareOptions) &&
                          leftCompareOptions.stopAt
                      ),
                      applyF(
                        rightItems,
                        compareRightItems,
                        Caf.exists(rightCompareOptions) &&
                          rightCompareOptions.startAfter,
                        Caf.exists(leftCompareOptions) &&
                          leftCompareOptions.stopAt
                      )
                    ]);
                    return [
                      leftItems.length,
                      rightItems.length,
                      Caf.exists((base = peek(leftItems))) && base.Key,
                      Caf.exists((base1 = peek(rightItems))) && base1.Key
                    ];
                  }
                )
                .then(([leftCount, rightCount, lastLeftKey, lastRightKey]) => {
                  let recurseLeft,
                    recurseRight,
                    leftStartAfter,
                    leftStopAt,
                    rightStartAfter,
                    rightStopAt,
                    leftUsePrefixBisect,
                    newMiddleKey,
                    recurse;
                  recurseLeft = leftCount >= limit;
                  recurseRight = rightCount >= limit;
                  leftStartAfter = lastLeftKey;
                  leftStopAt = middleKey;
                  rightStartAfter = lastRightKey;
                  rightStopAt = stopAt;
                  leftUsePrefixBisect = rightCount === 0;
                  if (aggressive && leftCount === 0 && recurseRight) {
                    recurseLeft = true;
                    leftUsePrefixBisect = true;
                    leftStartAfter = lastRightKey;
                    leftStopAt = newMiddleKey = getBisectKey(
                      lastRightKey,
                      rightStopAt
                    );
                    rightStartAfter = newMiddleKey;
                  }
                  recurse = recurseLeft
                    ? recurseRight
                      ? "both"
                      : "left"
                    : "right";
                  if (debug === "verbose") {
                    log(
                      `-------------------------------------------------------------\ndebug:\n  INPUTS:\n    startAfter:       ${Caf.toString(
                        debugKey(startAfter)
                      )}\n    middleKey:        ${Caf.toString(
                        debugKey(middleKey)
                      )}\n    stopAt:           ${Caf.toString(
                        debugKey(stopAt)
                      )}\n    usePrefixBisect:  ${Caf.toString(
                        usePrefixBisect
                      )}\n  RESULTS: (before recursion)\n    overlap:          ${Caf.toString(
                        lastLeftKey < middleKey
                          ? "no"
                          : lastLeftKey === lastRightKey
                          ? "full"
                          : "partial"
                      )}\n    lastLeftKey:      ${Caf.toString(
                        debugKey(lastLeftKey)
                      )}\n    lastRightKey:     ${Caf.toString(
                        debugKey(lastRightKey)
                      )}\n    counts:           applied: [${Caf.toString(
                        leftCount
                      )}, ${Caf.toString(rightCount)}] raw: [${Caf.toString(
                        rawLeftCount
                      )}, ${Caf.toString(
                        rawRightCount
                      )}]\n  PLAN:\n    recurse:              ${Caf.toString(
                        recurse
                      )}\n    leftStartAfter:       ${Caf.toString(
                        recurseLeft && debugKey(leftStartAfter)
                      )}\n    leftStopAt:           ${Caf.toString(
                        recurseLeft && debugKey(leftStopAt)
                      )}\n    leftUsePrefixBisect:  ${Caf.toString(
                        recurseLeft && leftUsePrefixBisect
                      )}\n    rightStartAfter:      ${Caf.toString(
                        recurseRight && debugKey(rightStartAfter)
                      )}\n    rightStopAt:          ${Caf.toString(
                        recurseRight && debugKey(rightStopAt)
                      )}`
                    );
                  }
                  return Promise.all([
                    applyPromise.finally(() => (applyPromise = null)),
                    recurseLeft
                      ? eachRecursive(
                          leftStartAfter,
                          leftStopAt,
                          leftUsePrefixBisect,
                          recurseRight ? "recurse-BL" : "recurse-L"
                        ).then(c => c + leftCount)
                      : leftCount,
                    recurseRight
                      ? eachRecursive(
                          rightStartAfter,
                          rightStopAt,
                          false,
                          recurseLeft ? "recurse-BR" : "recurse-R"
                        ).then(c => c + rightCount)
                      : rightCount
                  ]).then(([leftCount, rightCount]) => leftCount + rightCount);
                })
                .tapCatch(error =>
                  Caf.is(error, Error)
                    ? log.error({
                        eachRecursive: {
                          startAfter,
                          stopAt,
                          usePrefixBisect,
                          error
                        }
                      })
                    : undefined
                );
            };
            return eachRecursive(startAfter, stopAt)
              .finally(
                () => Caf.exists(progressReporter) && progressReporter.stop()
              )
              .then(count => {
                let duration,
                  itemsPerSecond,
                  requestsPerSecond,
                  averageItemsPerRequest,
                  info,
                  e;
                Caf.isF(report) && report("DONE");
                duration = currentSecond() - startTime;
                itemsPerSecond = itemsFound / duration;
                if (itemsPerSecond > 10) {
                  itemsPerSecond = itemsPerSecond | 0;
                }
                requestsPerSecond = verboseProgress && requestsUsed / duration;
                if (requestsPerSecond > 10) {
                  requestsPerSecond = requestsPerSecond | 0;
                }
                averageItemsPerRequest =
                  verboseProgress && itemsFound / requestsUsed;
                if (averageItemsPerRequest > 10) {
                  averageItemsPerRequest = averageItemsPerRequest | 0;
                }
                info = merge({
                  duration,
                  matchingItems,
                  items: itemsFound,
                  itemsPerSecond,
                  requests: requestsUsed,
                  requestsPerSecond,
                  maxOutstanding: verboseProgress && maxOutstanding,
                  averageItemsPerRequest
                });
                return requestsUsed > maxListRequests
                  ? ((e = Error(
                      "S3Comprehensions.each maxListRequestsReached:\n" +
                        formattedInspect(info)
                    )),
                    (e.info = info),
                    (() => {
                      throw e;
                    })())
                  : (returnValue != null && showProgress
                      ? log({
                          final: {
                            options: Caf.object(
                              options.originalOptions,
                              null,
                              v => !isFunction(v)
                            ),
                            stats: info
                          }
                        })
                      : undefined,
                    returnValue != null
                      ? returnValue
                      : merge(stats, info, {
                          pretend: options.pretend,
                          options: Caf.object(
                            options.originalOptions,
                            null,
                            (v, k) =>
                              !isFunction(v) || k === "filter" || k === "toKey"
                          )
                        }));
              });
          };
          this._compareList = options => {
            let list;
            return this.each(
              merge(options, {
                returnValue: (list = []),
                mapList: l => {
                  let from, into, to, i, temp;
                  return (
                    (from = l),
                    (into = list),
                    from != null
                      ? ((to = from.length),
                        (i = 0),
                        (() => {
                          while (i < to) {
                            let v;
                            v = from[i];
                            into.push(v);
                            temp = i++;
                          }
                          return temp;
                        })())
                      : undefined,
                    into
                  );
                },
                quiet: true
              })
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 27 */
/*!**************************************!*\
  !*** ./source/S3Parallel/S3PCli.caf ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 2);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "merge",
      "Error",
      "isFunction",
      "console",
      "formatDate",
      "pad",
      "humanByteSize"
    ],
    [global, __webpack_require__(/*! ./StandardImport */ 15), __webpack_require__(/*! ./Lib */ 10)],
    (merge, Error, isFunction, console, formatDate, pad, humanByteSize) => {
      let commands,
        summarize,
        compare,
        copy,
        sync,
        allCommandOptions,
        writeOptions,
        toBucketOptions,
        advancedOptionsForAll,
        advancedOptionsForCopy;
      commands =
        (({ summarize, compare, copy, sync } = __webpack_require__(/*! ./S3P */ 23)),
        { summarize, compare, copy, sync });
      commands.cp = commands.copy;
      commands.listBuckets = __webpack_require__(/*! ./Lib/S3 */ 19).listBuckets;
      commands.version = function() {
        return __webpack_require__(/*! ../../package */ 7).version;
      };
      commands.each = options => {
        let map, mapList;
        map = options.map;
        mapList = options.mapList;
        if (!(options.map || options.mapList)) {
          throw new Error("--map or --map-list option required");
        }
        if (!(map && !isFunction(map))) {
          throw new Error("--map must be a function");
        }
        if (!(mapList && !isFunction(mapList))) {
          throw new Error("--map-list must be a function");
        }
        return __webpack_require__(/*! ./S3Comprehensions */ 26).each(options);
      };
      commands.list = options =>
        __webpack_require__(/*! ./S3Comprehensions */ 26).each(
          merge({ quiet: true }, options, {
            mapList: l => {
              let from, into, to, i, temp;
              return (
                (from = l),
                (into = from),
                from != null
                  ? ((to = from.length),
                    (i = 0),
                    (() => {
                      while (i < to) {
                        let LastModified, Size, Key;
                        ({ LastModified, Size, Key } = from[i]);
                        console.log(
                          `${Caf.toString(
                            formatDate(LastModified, "yyyy-mm-dd HH:MM:ss")
                          )} ${Caf.toString(
                            pad(humanByteSize(Size), 10, " ", true)
                          )} ${Caf.toString(Key)}`
                        );
                        temp = i++;
                      }
                      return temp;
                    })())
                  : undefined,
                into
              );
            }
          })
        );
      commands.ls = commands.list;
      allCommandOptions = {
        quiet: "no output",
        verbose: "extra output",
        bucket: {
          argument: "bucket-name",
          description: "The source bucket",
          required: true
        },
        prefix: [
          "key",
          "Only iterate over keys with this prefix. If 'startAfter' or 'stopAt' are also specified, the set-intersection of the two will be used."
        ],
        "start-after": [
          "key",
          "Start iteratating after this key. If 'prefix' is also specified, the set-intersection of the two will be used."
        ],
        "stop-at": [
          "key",
          "Iterate up to, and including, this key. If 'prefix' is also specified, the set-intersection of the two will be used."
        ],
        pattern: [
          "string OR js:/^any-javascript-regexp/i",
          "Source keys must contain the string, OR source keys must match the JavaScript regexp."
        ],
        filter: [
          '"js:({Key, Size, LastModified, ETag, StorageClass, Owner}) => true"',
          "Filter results of listObjects."
        ]
      };
      writeOptions = {
        dryrun: {
          description:
            "Will not modify anything. For sync/copy commands, do everything except actually copy files."
        },
        pretend: { description: "alias for 'dryrun'" }
      };
      toBucketOptions = {
        "to-bucket": {
          argument: "bucket-name",
          required: true,
          description: "The target bucket. It can be the same bucket."
        },
        "to-prefix": [
          "key-prefix",
          "If 'prefix' is specified, the target key will REPLACE it's source prefix with toPrefix Otherwise, this is the same as add-prefix."
        ],
        "add-prefix": [
          "key-prefix",
          "The source key is prepended with this string for the target bucket."
        ],
        "to-key": [
          '"js:(key) => key"',
          "Provide an arbitrary JavaScript function for re-keying keys."
        ]
      };
      advancedOptionsForAll = {
        "list-concurrency": {
          advanced: true,
          argument: "100",
          description: "Maximum number of simultaneous list operations"
        },
        "max-list-requests": {
          advanced: true,
          argument: "number",
          description:
            "Not set by default; If set, will stop when hit. Use to limit how many requests get used."
        }
      };
      advancedOptionsForCopy = merge(advancedOptionsForAll, {
        "copy-concurrency": {
          advanced: true,
          argument: "500",
          description: "Maximum number of simultaneous small-copies"
        },
        "large-copy-concurrency": {
          advanced: true,
          argument: "75",
          description: "Maximum number of simultaneous large-copies"
        },
        "max-queue-size": {
          advanced: true,
          argument: "50000",
          description:
            "Maximum number of files that can be queued for copying before list-reading is throttled."
        },
        "large-copy-threshold": {
          advanced: true,
          argument: "104857600",
          description:
            "Files larger than this byte-size will use the large-copy strategy, which is currently a shell-exec of 'aws s3 cp'. Currently this must be set <= 5368709120 (5 gigabytes). This is s3.copyObject's max supported size, so S3P must shell-exec aws-cli for larger files."
        }
      });
      return {
        main: function() {
          return __webpack_require__(/*! @art-suite/cli */ 28).start({
            commands,
            help: {
              description:
                "S3 summarize, compare, copy, sync and more with massively parallel power.\n\nconfigure AWS credentials with environment variables:\n  s3p uses the same creds as the aws-cli. Learn more:\n  https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html\n\ns3p source:\n  https://github.com/generalui/s3p",
              commands: {
                each: {
                  description:
                    "Create your own iteration. Specify a --map or --map-list option.",
                  options: merge(allCommandOptions, advancedOptionsForAll, {
                    map: [
                      "function",
                      "This gets called for each item found. A javascript function of the form (item) => ..."
                    ],
                    "map-list": [
                      "function",
                      "This gets called with an array of items (length between 1 and 1000). A javascript function of the form (itemList) => ..."
                    ]
                  }),
                  examples: [
                    'each --bucket my-bucket --map "js:(item) => console.log(item)"',
                    "Log every item found."
                  ]
                },
                "list-buckets": { description: "List all your S3 buckets." },
                version: { description: "Show s3p's version." },
                summarize: {
                  description:
                    "Scan all items in one bucket and produce a summary of all the items. Uses s3.listObjectsV2.",
                  options: merge(
                    allCommandOptions,
                    {
                      "summarize-folders": "show count and size of each folder"
                    },
                    advancedOptionsForAll
                  ),
                  examples: [
                    { bucket: "my-bucket" },
                    "get a detailed summary of item counts and sizes in my-bucket",
                    {
                      bucket: "my-bucket",
                      filter: '"js:({Size}) => Size > 1024*1024"'
                    },
                    "summarize all files larger than 1 Megabyte"
                  ]
                },
                list: {
                  alias: "ls",
                  description:
                    "List all matching files. Uses s3.listObjectsV2.",
                  options: merge(allCommandOptions, advancedOptionsForAll)
                },
                compare: {
                  description:
                    "Compare two buckets and produce a summary of their differences. Uses s3.listObjectsV2.",
                  options: merge(
                    allCommandOptions,
                    toBucketOptions,
                    advancedOptionsForAll
                  ),
                  examples: [
                    { bucket: "my-bucket", "to-bucket": "my-to-bucket" },
                    "Compare items from my-mucket with my-to-bucket. Shows how many items exist in both, only one, or are difference sizes."
                  ]
                },
                copy: {
                  alias: "cp",
                  description:
                    "Copy all files from one bucket to another bucket. Uses s3.listObjectsV2, s3.copyObject and shell-exec 'aws s3 cp'.\n\nNOTE: This overwrites existing files in the target bucket. Try the 'sync' command for smarter copies when some of the files have already been copied.",
                  options: merge(
                    allCommandOptions,
                    toBucketOptions,
                    writeOptions,
                    advancedOptionsForCopy
                  ),
                  examples: [
                    { bucket: "my-bucket", "to-bucket": "my-to-bucket" },
                    "Copy everything from my-mucket to my-to-bucket",
                    {
                      bucket: "my-bucket",
                      "to-bucket": "my-to-bucket",
                      prefix: "2020-04-14/"
                    },
                    'Copy everything from my-mucket to my-to-bucket with the prefix "2020-04-14/". The copied items will have the same keys as source items.',
                    {
                      bucket: "my-bucket",
                      "to-bucket": "my-to-bucket",
                      prefix: "2020-04-14/",
                      "to-prefix": "2020-04-14-backup/"
                    },
                    'Copy everything from my-mucket to my-to-bucket with the prefix "2020-04-14/" and REPLACES prefixes. Example: "2020-04-14/foo.jpg" is copied to "2020-04-14-backup/foo.jpg"',
                    {
                      bucket: "my-bucket",
                      "to-bucket": "my-to-bucket",
                      prefix: "2020-04-14/",
                      "add-prefix": "backup/"
                    },
                    'Copy everything from my-mucket to my-to-bucket with the prefix "2020-04-14/" and ADDS prefixes. Example: "2020-04-14/foo.jpg" is copied to "backup/2020-04-14/foo.jpg"',
                    {
                      bucket: "my-bucket",
                      "to-bucket": "my-to-bucket",
                      prefix: "2020-04-14/",
                      "to-key": "\"js:(key) => key + 'old'\""
                    },
                    'Copy everything from my-mucket to my-to-bucket with CUSTOM function that adds suffixes. Example: "2020-04-14/foo.jpg" is copied to "2020-04-14/foo.jpg-old"'
                  ]
                },
                sync: {
                  description:
                    "Only copy files which do not exist in the target bucket. Uses s3.listObjectsV2, s3.copyObject and shell-exec 'aws s3 cp'.",
                  options: merge(
                    allCommandOptions,
                    toBucketOptions,
                    writeOptions,
                    advancedOptionsForCopy,
                    {
                      overwrite:
                        "If set, sync will overwrite existing files with different file sizes."
                    }
                  ),
                  examples: [
                    { bucket: "my-bucket", "to-bucket": "my-to-bucket" },
                    "Copy everything from my-mucket to my-to-bucket"
                  ]
                }
              }
            }
          });
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ 1)(module)))

/***/ }),
/* 28 */
/*!*********************************************************************************!*\
  !*** external "require('@art-suite/cli' /* ABC - not inlining fellow NPM *_/)" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('@art-suite/cli' /* ABC - not inlining fellow NPM */);

/***/ })
/******/ ]);