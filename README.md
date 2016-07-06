# mount-middlewares


## Install

    npm install --save mount-middlewares

## Usages

```
var $middlewares = require('mount-middlewares')(__dirname);
console.log($middlewares);
```

在app.js根目录，可以加载app/middlewares

```
const app = new Koa()

var $middlewares  = require('mount-middlewares')(__dirname);
```

## Desc

 
    /Users/sang/workspace/moa/moa-seed1/node_modules/first/app/middlewares
    mount-path = /Users/sang/workspace/moa/moa-seed1/app/middlewares
    
    
    /Users/sang/workspace/moa/moa-seed1/app/middlewares
    mount-path = /Users/sang/workspace/moa/moa-seed1/app/middlewares
    
    
    '/Users/sang/workspace/moa/moa-seed1/node_modules/first/app/routes/api'
    mount-path = /Users/sang/workspace/moa/moa-seed1/app/middlewares
    
