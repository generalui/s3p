"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["describe", "test"], [global, require('../StandardImport'), {mockFs: require('mock-fs')}], (describe, test) => {return describe({createParentDirs: function() {return test("no-op", () => {});}});});});
//# sourceMappingURL=FsEasy.test.js.map
