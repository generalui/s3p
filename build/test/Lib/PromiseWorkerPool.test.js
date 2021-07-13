"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["test", "PromiseWorkerPool", "Promise", "max", "timeout", "log", "assert"],
    [global, require("../StandardImport")],
    (test, PromiseWorkerPool, Promise, max, timeout, log, assert) => {
      return test("pwp", function () {
        let currentlyActive,
          maxActive,
          totalDone,
          doWork,
          pwp,
          poolSize,
          numQueued,
          into,
          to,
          i,
          by;
        currentlyActive = 0;
        maxActive = 0;
        totalDone = 0;
        doWork = () => {
          currentlyActive++;
          maxActive = max(currentlyActive, maxActive);
          return timeout(1).then(() => {
            totalDone++;
            return currentlyActive--;
          });
        };
        pwp = new PromiseWorkerPool((poolSize = 10));
        return Promise.all(
          ((into = []),
          (to = numQueued = 100),
          (i = 0),
          (by = i < to ? 1 : -1),
          (() => {
            while ((by > 0 && i < to) || (by < 0 && i > to)) {
              let v;
              v = i;
              into.push(pwp.queue(doWork));
              i += by;
            }
          })(),
          into)
        ).then(() => {
          log({ currentlyActive, maxActive, poolSize, numQueued });
          assert.eq(maxActive, poolSize);
          return assert.eq(totalDone, numQueued);
        });
      });
    }
  );
});
