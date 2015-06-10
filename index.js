var requireDirectory = require('require-directory');

function m() {
  var a = __dirname.split('node_modules')  
  if(a.length !== 2){
    throw  "mount-middlewares ERROR: " + __dirname + "里没有node_modules目录";
  }
  var _dir = a[0] + "app/middlewares";
  return requireDirectory(module, _dir);
}

module.exports = new m();