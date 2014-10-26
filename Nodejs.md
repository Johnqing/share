title: Node.js 模块化开发实践
speaker: Liu Qing
transition: slide
files: /js/demo.js,/css/demo.css

[slide]

# Node.js 模块化开发实践
## 演讲者：刘卿

[slide]
# Node.js是什么？
---
* 服务器端运行的 Javascript {:&.moveIn}
* 基于 V8
* 事件驱动
* 异步I/O
* 扩展js语义：增加了模块化
* 大约有8000行 c/c++代码，2000行 js 代码 [Node.js](https://github.com/joyent/node)

[slide]
# Node.js 给前端人员带来了什么？
---
* 模块复用
* 工具开发
* 前后端分层更加明确


[slide]
# 安装


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
# Node.js基础
---
* 模块
* 二进制


[slide]
# 包

## 目录结构
```
- app                               # 工程目录
    - bin/                          # 存放命令行相关代码
        node-dos
    + doc/                          # 存放文档
    - lib/                          # 存放API相关代码
        core.js
    - node_modules/                 # 存放三方包

    + test/                         # 存放测试用例
    package.json                    # 元数据文件
    README.md                       # 说明文件
```

[slide]
# NPM (包管理器)
* 下载包
* 下载命令行工具
* 上传包/命令行工具

[slide]
# fs文件系统
* Buffer
* Stream
* File System
* Path

通过**iconv-lite**来转换编码

[slide]
# 如何开发一个命令行工具？

