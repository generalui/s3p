"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "Promise", "max"],
    [global, require("art-standard-lib"), require("art-class-system")],
    (BaseClass, Promise, max) => {
      let PromiseWorkerPool;
      return (PromiseWorkerPool = Caf.defClass(
        class PromiseWorkerPool extends BaseClass {
          constructor(_maxWorkers = 10) {
            super(...arguments);
            this._maxWorkers = _maxWorkers;
            this._stats = {
              jobs: { queued: 0, started: 0, succeeded: 0, failed: 0 },
              maxActiveWorkers: 0,
            };
            this._queue = [];
            this._availableWorkers = this._maxWorkers;
          }
        },
        function (PromiseWorkerPool, classSuper, instanceSuper) {
          this.getter("stats");
          this.getter({
            queueSize: function () {
              return this._queue.length;
            },
            activeWorkers: function () {
              return this._maxWorkers - this._availableWorkers;
            },
          });
          this.prototype.queue = function (job) {
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
          this.prototype._work = function () {
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
