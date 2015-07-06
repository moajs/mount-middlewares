var requireDirectory = require('require-directory');

function m(dir) {
  console.dir(dir)
  var a = dir.split('app');
  if(a.length !== 2){
    a = dir.split('node_modules');
  }else{
    throw  "mount-middlewares ERROR: " + dir + "里没有node_modules目录";
  }
  var _dir = a[0] + "app/middlewares";
  return requireDirectory(module, _dir);
}

module.exports = m;