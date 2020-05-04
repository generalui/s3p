if (require("./use-build")) { // use build
  module.exports = require('./build');
} else {
  require('./register');
  module.exports = require('./index.caf');
}