title: Node.js
speaker: Liu Qing
transition: slide
files: /js/demo.js,/css/demo.css

[slide]

# Node.js 模块开发
## 演讲者：刘卿

[slide]
# Nodejs是什么？
---
* 服务器端运行的 Javascript {:&.moveIn}
* 基于 V8
* 事件驱动
* 异步I/O
* 扩展js语义：增加了模块化
* 大约有8000行 c/c++代码，2000行 js 代码 [Node.js](https://github.com/joyent/node)

[slide]
# 安装

下载[安装](http://nodejs.org/download)


[slide]
# 5行代码实现一个简单的web服务器
----
```javascript
var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('First Demo！'); 
}).listen(8090, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8090/');
```

[slide]
# NPM (包管理器)
```
npm install package [-g]
```
[slide]
# 模块
```
exports.add = function(){
    return 1 + 1;
}
```
[slide]
## 模块缓冲

通过文件路径作为索引缓冲在 `Module._cache`对象上
```
Modules._extensions['.json'] = function(module, filename){
    ...
}
```

[slide]
# 包

目录结构

* package.json :  描述文件
* bin 二进制文件
* lib js核心文件
* doc 文档
* test 单元测试


