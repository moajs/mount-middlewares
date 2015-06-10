module.exports = function (dir) {
  var _dir = "../middlewares";
  
  if (arguments[0]) {
    _dir = dir;
  }
  
  var requireDirectory = require('require-directory');
  return requireDirectory(module, _dir);
}