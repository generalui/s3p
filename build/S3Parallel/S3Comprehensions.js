"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["PromiseWorkerPool", "getLastKeyWithPrefix", "Error", "compactFlatten", "log", "merge", "objectWithout", "Function", "Promise", "currentSecond", "interval", "durationString", "timeout", "getBisectKey", "pad", "debugKey", "Math", "peek", "formattedInspect"], [global, require('path'), require('art-standard-lib'), require('art-class-system'), require('./Lib'), {colors: require('colors')}], (PromiseWorkerPool, getLastKeyWithPrefix, Error, compactFlatten, log, merge, objectWithout, Function, Promise, currentSecond, interval, durationString, timeout, getBisectKey, pad, debugKey, Math, peek, formattedInspect) => {let S3Comprehensions; return S3Comprehensions = Caf.defClass(class S3Comprehensions extends Object {}, function(S3Comprehensions, classSuper, instanceSuper) {let filterNone; this.normalizeOptions = (options) => {let dryrun, quiet, toPrefix, addPrefix, prefix, pattern, pretend, toKey, map, mapList, returnValue, filter, startAfter, stopAt, copyConcurrency, largeCopyConcurrency, maxQueueSize, copyPwp, largeCopyPwp, largeCopyThreshold, withFn, whenFn, returningV, prefixStopAt, r, e, temp, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10; dryrun = options.dryrun; quiet = options.quiet; toPrefix = options.toPrefix; addPrefix = options.addPrefix; prefix = (undefined !== (temp = options.prefix)) ? temp : ""; pattern = options.pattern; pretend = (undefined !== (temp1 = options.pretend)) ? temp1 : dryrun; toKey = options.toKey; map = options.map; mapList = options.mapList; returnValue = options.returnValue; filter = options.filter; startAfter = (undefined !== (temp2 = options.startAfter)) ? temp2 : ""; stopAt = options.stopAt; copyConcurrency = (undefined !== (temp3 = options.copyConcurrency)) ? temp3 : 500; largeCopyConcurrency = (undefined !== (temp4 = options.largeCopyConcurrency)) ? temp4 : 75; maxQueueSize = (undefined !== (temp5 = options.maxQueueSize)) ? temp5 : copyConcurrency * 100; copyPwp = (undefined !== (temp6 = options.copyPwp)) ? temp6 : new PromiseWorkerPool(copyConcurrency); largeCopyPwp = (undefined !== (temp7 = options.largeCopyPwp)) ? temp7 : new PromiseWorkerPool(largeCopyConcurrency); largeCopyThreshold = (undefined !== (temp8 = options.largeCopyThreshold)) ? temp8 : 100 * Caf.pow(1024, 2); withFn = options.with; whenFn = options.when; returningV = ((temp9 = options.returning) != null ? temp9 : options.into); if (!(dryrun || toPrefix || withFn || pattern || returningV || whenFn || prefix != null || !(startAfter != null) || !(stopAt != null))) {return options;}; try {startAfter = `${Caf.toString(startAfter)}`; if (stopAt) {stopAt = `${Caf.toString(stopAt)}`;}; prefix = `${Caf.toString(prefix)}`; if (startAfter < prefix) {startAfter = prefix;}; prefixStopAt = getLastKeyWithPrefix(prefix != null ? prefix : ""); if (!stopAt || stopAt > prefixStopAt) {stopAt = prefixStopAt;}; if (whenFn) {if (filter) {throw new Error("only use one: when or filter");}; filter = whenFn;}; if (withFn || pattern) {if (compactFlatten([withFn, map, pattern, mapList]).length > 1) {throw new Error("only use one: with, map, pattern or mapList");}; map = withFn != null ? withFn : (({Key}) => Key.match(pattern));}; toKey != null ? toKey : toKey = (toPrefix != null || addPrefix != null) ? ((compactFlatten([toPrefix, addPrefix, toKey]).length > 1) ? (() => {throw new Error("only use one: addPrefix, toPrefix, toKey");})() : undefined, (toPrefix != null) ? prefix ? (r = RegExp(`^${Caf.toString(prefix)}`), (key) => key.replace(r, toPrefix)) : (key) => toPrefix + key : (key) => addPrefix + key) : (key) => key;} catch (error) {e = error; log.unquoted({options}); throw e;}; return merge(objectWithout(options, "dryrun", "toPrefix", "withFn", "pattern", "into", "returning", "whenFn", "prefix", "addPrefix"), {originalOptions: ((temp10 = options.originalOptions) != null ? temp10 : options), scratchState: {}, quiet, pretend, toKey, filter, map, mapList, returnValue, startAfter, stopAt, copyConcurrency, largeCopyConcurrency, maxQueueSize, copyPwp, largeCopyPwp, largeCopyThreshold});}; filterNone = function() {return true;}; this.eachPromises = (options) => {let failed, map, filter, temp; options = this.normalizeOptions(options); failed = undefined; map = options.map; filter = (undefined !== (temp = options.filter)) ? temp : filterNone; if (!(Caf.is(map, Function))) {throw new Error("Expecting options.map");}; return this.each(merge(options, {mapList: (items) => {let from, into, to, i, temp1; return Promise.all((from = items, into = [], (from != null) ? (to = from.length, i = 0, (() => {while (i < to) {let item; item = from[i]; if (filterNone(item)) {into.push(Promise.then(() => map(item)).catch((error) => {log({Key: item.Key, error}); return (failed != null ? failed : failed = []).push(item.Key);}));}; temp1 = i++;}; return temp1;})()) : undefined, into));}})).then((result) => (failed != null) ? merge(result, {failed}) : result);}; this.map = (options) => {let map, _reduce, result, temp, temp1; map != null ? map : map = ((temp = options.map) != null ? temp : ((a) => a)); _reduce = ((temp1 = options.reduce) != null ? temp1 : ((a, b) => compactFlatten([a, b]))); result = undefined; return this.each(merge(objectWithout(options, "map"), {mapList: (items) => {let from, into, to, i, temp2; return Promise.all((from = items, into = [], (from != null) ? (to = from.length, i = 0, (() => {while (i < to) {let item; item = from[i]; into.push(Promise.then(() => map(item)).then((m) => result = (result === undefined) ? m : _reduce(result, m))); temp2 = i++;}; return temp2;})()) : undefined, into));}})).catch((error) => error.found || (() => {throw error;})()).then(() => (result === undefined) ? options.default : options.finally ? options.finally(result) : result);}; this.find = (options) => {let withFn, temp; options = this.normalizeOptions(options); withFn = ((temp = options.map) != null ? temp : ((a) => a)); return this.each(merge(options, {map: (item) => (() => {throw {found: withFn(item)};})()})).catch((error) => error.found || (() => {throw error;})());}; this.array = (options) => {let withFn, apply, store, intoArray, temp, temp1, temp2; options = this.normalizeOptions(options); withFn = ((temp = ((temp1 = options.with) != null ? temp1 : options.map)) != null ? temp : ((a) => a)); apply = (item) => withFn(item, item.Key); store = (v) => intoArray.push(v); return this.each(merge(options, {into: intoArray = ((temp2 = options.into) != null ? temp2 : []), with: (item) => Promise.resolve(withFn(item, item.Key)).then(store)}));}; this.object = (options) => {let withFn, withKey, store, intoObject, temp, temp1, temp2; options = this.normalizeOptions(options); withFn = ((temp = options.map) != null ? temp : ((a) => a)); withKey = ((temp1 = options.withKey) != null ? temp1 : (({Key}) => Key)); store = ([k, v]) => intoObject[k] = v; return this.each(merge(options, {into: intoObject = ((temp2 = options.into) != null ? temp2 : {}), with: (item) => Promise.all([withKey(item, item.Key), withFn(item, item.Key)]).then(store)}));}; this.each = (options) => {let quiet, showProgress, debug, fetchOwner, bucket, startAfter, stopAt, filter, compare, toBucket, toKey, limit, maxListRequests, listConcurrency, returnValue, map, mapList, aggressive, getProgress, verboseProgress, throttle, stats, s3, pwp, _reduce, itemsFound, requestsUsed, maxOutstanding, outstanding, startTime, matchingItems, report, progressReporter, applyF, throttled, waitForThrottle, eachRecursive, temp, temp1, temp2, temp3, temp4; options = this.normalizeOptions(options); quiet = options.quiet; showProgress = (undefined !== (temp = options.showProgress)) ? temp : !quiet; debug = options.debug; fetchOwner = options.fetchOwner; bucket = options.bucket; startAfter = options.startAfter; stopAt = options.stopAt; filter = options.filter; compare = options.compare; toBucket = options.toBucket; toKey = options.toKey; limit = (undefined !== (temp1 = options.limit)) ? temp1 : 1000; maxListRequests = options.maxListRequests; listConcurrency = (undefined !== (temp2 = options.listConcurrency)) ? temp2 : 100; returnValue = options.returnValue; map = options.map; mapList = options.mapList; aggressive = options.aggressive; getProgress = options.getProgress; verboseProgress = options.verboseProgress; throttle = options.throttle; stats = options.stats; s3 = (undefined !== (temp3 = options.s3)) ? temp3 : require('./Lib/S3'); pwp = (undefined !== (temp4 = options.pwp)) ? temp4 : new PromiseWorkerPool(listConcurrency); if (compare && map && toBucket) {throw new Error("cannot use both `compare` and `map` - use mapList instead");}; _reduce = options.reduce; itemsFound = requestsUsed = maxOutstanding = outstanding = 0; startTime = currentSecond(); matchingItems = filter ? 0 : undefined; if (showProgress) {report = (message) => {let duration, itemsPerSecond, efficiency; duration = currentSecond() - startTime; itemsPerSecond = itemsFound / duration; efficiency = itemsFound / (requestsUsed * limit) * 100 | 0; return log("s3p: " + compactFlatten([`d: ${Caf.toString(durationString(duration, 2))}`, `items: ${Caf.toString(itemsFound)}`, `items/s: ${Caf.toString(itemsPerSecond | 0)}`, `listRequests: ${Caf.toString(requestsUsed)}`, verboseProgress ? `efficiency: ${Caf.toString(efficiency)}%` : undefined, verboseProgress ? `outstanding: ${Caf.toString(outstanding)}` : undefined, matchingItems ? `matches: ${Caf.toString(matchingItems)}` : undefined, (throttled > 0) ? "listWorkers: throttled" : (pwp.activeWorkers > 0) ? `listWorkers: ${Caf.toString(pwp.activeWorkers)}` : undefined, (pwp.queueSize > 0) ? `listQueue: ${Caf.toString(pwp.queueSize)}` : undefined, Caf.isF(getProgress) && getProgress(duration) || null, message]).join(", "));}; progressReporter = interval(1000, report);}; applyF = (items, compareItems, compareStartAfter, compareStopAt) => {itemsFound += items.length; return Promise.then(() => {let filteredItems, from, into, to, i, from1, into1, to1, i1, from2, into2, to2, i2, from3, into3, to3, i3, temp5, temp6, temp7, temp8; return (() => {switch (false) {case !mapList: return filter ? (filteredItems = (from = items, into = [], (from != null) ? (to = from.length, i = 0, (() => {while (i < to) {let item; item = from[i]; if (filter(item)) {into.push(item);}; temp5 = i++;}; return temp5;})()) : undefined, into), matchingItems += filteredItems.length, mapList(filteredItems, (from1 = compareItems, into1 = [], (from1 != null) ? (to1 = from1.length, i1 = 0, (() => {while (i1 < to1) {let item; item = from1[i1]; if (filter(item)) {into1.push(item);}; temp6 = i1++;}; return temp6;})()) : undefined, into1), compareStartAfter, compareStopAt)) : mapList(items, compareItems, compareStartAfter, compareStopAt); case !(map && filter): return (from2 = items, into2 = from2, (from2 != null) ? (to2 = from2.length, i2 = 0, (() => {while (i2 < to2) {let item; item = from2[i2]; if (filter(item)) {matchingItems++; map(item);}; temp7 = i2++;}; return temp7;})()) : undefined, into2); case !map: return (from3 = items, into3 = from3, (from3 != null) ? (to3 = from3.length, i3 = 0, (() => {while (i3 < to3) {let item; item = from3[i3]; map(item); temp8 = i3++;}; return temp8;})()) : undefined, into3);};})();}).then(() => items.length);}; throttled = 0; waitForThrottle = () => Promise.then(() => (Caf.isF(throttle) && throttle()) ? (throttled++, timeout(1000).then(() => {throttled--; return waitForThrottle();})) : undefined); eachRecursive = (startAfter, stopAt, usePrefixBisect = false, debugContext) => {let middleKey, rawLeftCount, rawRightCount, applyPromise; if (requestsUsed >= maxListRequests || startAfter >= stopAt) {return Promise.resolve(0);}; middleKey = getBisectKey(startAfter, stopAt, usePrefixBisect); if (showProgress === "verbose") {report();}; debug && log(`debug: START:  ${Caf.toString(pad(debugContext != null ? debugContext : "root", 10))} startAfter: ${Caf.toString(debugKey(startAfter))}  middleKey: ${Caf.toString(debugKey(middleKey))}  stopAt: ${Caf.toString(debugKey(stopAt))}  usePrefixBisect: ${Caf.toString(usePrefixBisect)}`); rawLeftCount = rawRightCount = null; applyPromise = null; return waitForThrottle().then(() => {requestsUsed += 2; maxOutstanding = Math.max(maxOutstanding, outstanding += 2); return Promise.all([pwp.queue(() => s3.list({bucket, limit, fetchOwner, startAfter})), pwp.queue(() => s3.list({bucket, limit, fetchOwner, startAfter: middleKey}))]).then(([rawLeftItems, rawRightItems]) => {let from, into, to, i, from1, into1, to1, i1, temp5, temp6; rawLeftCount = Caf.exists(rawLeftItems) && rawLeftItems.length; rawRightCount = Caf.exists(rawRightItems) && rawRightItems.length; return [(from = rawLeftItems, into = [], (from != null) ? (to = from.length, i = 0, (() => {while (i < to) {let item; item = from[i]; if (item.Key <= middleKey) {into.push(item);}; temp5 = i++;}; return temp5;})()) : undefined, into), (from1 = rawRightItems, into1 = [], (from1 != null) ? (to1 = from1.length, i1 = 0, (() => {while (i1 < to1) {let item; item = from1[i1]; if (item.Key <= stopAt) {into1.push(item);}; temp6 = i1++;}; return temp6;})()) : undefined, into1)];});}).finally(() => outstanding -= 2).then(([leftItems, rightItems]) => {let leftCompareOptions, rightCompareOptions; return Promise.all([leftItems, rightItems, compare && toBucket && this._compareList(leftCompareOptions = {limit, pwp, startAfter: toKey(startAfter), bucket: toBucket, stopAt: toKey((leftItems.length === limit) ? peek(leftItems).Key : middleKey)}), compare && toBucket && this._compareList(rightCompareOptions = {limit, pwp, bucket: toBucket, startAfter: toKey(middleKey), stopAt: toKey((rightItems.length === limit) ? peek(rightItems).Key : stopAt)}), leftCompareOptions, rightCompareOptions]);}).then(([leftItems, rightItems, compareLeftItems, compareRightItems, leftCompareOptions, rightCompareOptions]) => {let base, base1; applyPromise = Promise.all([applyF(leftItems, compareLeftItems, Caf.exists(leftCompareOptions) && leftCompareOptions.startAfter, Caf.exists(leftCompareOptions) && leftCompareOptions.stopAt), applyF(rightItems, compareRightItems, Caf.exists(rightCompareOptions) && rightCompareOptions.startAfter, Caf.exists(leftCompareOptions) && leftCompareOptions.stopAt)]); return [leftItems.length, rightItems.length, Caf.exists(base = peek(leftItems)) && base.Key, Caf.exists(base1 = peek(rightItems)) && base1.Key];}).then(([leftCount, rightCount, lastLeftKey, lastRightKey]) => {let recurseLeft, recurseRight, leftStartAfter, leftStopAt, rightStartAfter, rightStopAt, leftUsePrefixBisect, newMiddleKey, recurse; recurseLeft = leftCount >= limit; recurseRight = rightCount >= limit; leftStartAfter = lastLeftKey; leftStopAt = middleKey; rightStartAfter = lastRightKey; rightStopAt = stopAt; leftUsePrefixBisect = rightCount === 0; if (aggressive && leftCount === 0 && recurseRight) {recurseLeft = true; leftUsePrefixBisect = true; leftStartAfter = lastRightKey; leftStopAt = newMiddleKey = getBisectKey(lastRightKey, rightStopAt); rightStartAfter = newMiddleKey;}; recurse = recurseLeft ? recurseRight ? "both" : "left" : "right"; if (debug === "verbose") {log(`-------------------------------------------------------------\ndebug:\n  INPUTS:\n    startAfter:       ${Caf.toString(debugKey(startAfter))}\n    middleKey:        ${Caf.toString(debugKey(middleKey))}\n    stopAt:           ${Caf.toString(debugKey(stopAt))}\n    usePrefixBisect:  ${Caf.toString(usePrefixBisect)}\n  RESULTS: (before recursion)\n    overlap:          ${Caf.toString((lastLeftKey < middleKey) ? "no" : (lastLeftKey === lastRightKey) ? "full" : "partial")}\n    lastLeftKey:      ${Caf.toString(debugKey(lastLeftKey))}\n    lastRightKey:     ${Caf.toString(debugKey(lastRightKey))}\n    counts:           applied: [${Caf.toString(leftCount)}, ${Caf.toString(rightCount)}] raw: [${Caf.toString(rawLeftCount)}, ${Caf.toString(rawRightCount)}]\n  PLAN:\n    recurse:              ${Caf.toString(recurse)}\n    leftStartAfter:       ${Caf.toString(recurseLeft && debugKey(leftStartAfter))}\n    leftStopAt:           ${Caf.toString(recurseLeft && debugKey(leftStopAt))}\n    leftUsePrefixBisect:  ${Caf.toString(recurseLeft && leftUsePrefixBisect)}\n    rightStartAfter:      ${Caf.toString(recurseRight && debugKey(rightStartAfter))}\n    rightStopAt:          ${Caf.toString(recurseRight && debugKey(rightStopAt))}`);}; return Promise.all([applyPromise.finally(() => applyPromise = null), recurseLeft ? eachRecursive(leftStartAfter, leftStopAt, leftUsePrefixBisect, recurseRight ? "recurse-BL" : "recurse-L").then((c) => c + leftCount) : leftCount, recurseRight ? eachRecursive(rightStartAfter, rightStopAt, false, recurseLeft ? "recurse-BR" : "recurse-R").then((c) => c + rightCount) : rightCount]).then(([leftCount, rightCount]) => leftCount + rightCount);}).tapCatch((error) => (Caf.is(error, Error)) ? log.error({eachRecursive: {startAfter, stopAt, usePrefixBisect, error}}) : undefined);}; return eachRecursive(startAfter, stopAt).finally(() => Caf.exists(progressReporter) && progressReporter.stop()).then((count) => {let duration, itemsPerSecond, requestsPerSecond, averageItemsPerRequest, info, e; if (!quiet) {Caf.isF(report) && report("DONE");}; duration = currentSecond() - startTime; itemsPerSecond = itemsFound / duration; if (itemsPerSecond > 10) {itemsPerSecond = itemsPerSecond | 0;}; requestsPerSecond = verboseProgress && requestsUsed / duration; if (requestsPerSecond > 10) {requestsPerSecond = requestsPerSecond | 0;}; averageItemsPerRequest = verboseProgress && itemsFound / requestsUsed; if (averageItemsPerRequest > 10) {averageItemsPerRequest = averageItemsPerRequest | 0;}; info = merge({duration, matchingItems, items: itemsFound, itemsPerSecond, requests: requestsUsed, requestsPerSecond, maxOutstanding: verboseProgress && maxOutstanding, averageItemsPerRequest}); return (requestsUsed > maxListRequests) ? (e = Error("S3Comprehensions.each maxListRequestsReached:\n" + formattedInspect(info)), e.info = info, (() => {throw e;})()) : ((returnValue != null && showProgress) ? log.unquoted({finalStats: info}) : undefined, returnValue != null ? returnValue : merge({dryrun: options.pretend}, stats, info));});}; this._compareList = (options) => {let list; return this.each(merge(options, {returnValue: list = [], mapList: (l) => {let from, into, to, i, temp; return (from = l, into = list, (from != null) ? (to = from.length, i = 0, (() => {while (i < to) {let v; v = from[i]; into.push(v); temp = i++;}; return temp;})()) : undefined, into);}, quiet: true}));};});});});
//# sourceMappingURL=S3Comprehensions.js.map
