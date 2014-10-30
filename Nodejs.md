title: Node.js一小步，前端一大步
speaker: Liu Qing
transition: slide
files: /js/demo.js,/css/demo.css

[slide]

# Node.js一小步，前端一大步
## 演讲者：刘卿

[slide]
# Node.js是什么？
---
* 服务器端运行的 Javascript {:&.moveIn}
* 扩展js语义：增加了模块化
* 大约有8000行 c/c++代码，2000行 js 代码 [Node.js](https://github.com/joyent/node)

[slide]
# Node.js 优势？
---
* 基于 V8
* 事件驱动
* 异步I/O
* 符合前端团队的能力模型
* 前后端代码及模块共用

[slide]
# Node.js 劣势？
* 不适合CPU密集型
* 技术未成熟，发展快，模块多选择困难
* 反人类的多层闭包嵌套造成代码可读性差

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
# 应用
---
* 前后端分离
* 命令行工具/包

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
# 前端集成方案

Why?

[slide]
# 目前实现的集成工具
<img src="/nodejs/fe-build.jpg">

[slide]
# 前后端分离
## What?

后端只提供数据，前端负责展现

[slide]
# SPA 
* SPA用例不多，问题多多
* 后端还是处理了一些展现的逻辑

[slide]
# 目前使用最多的分离方式
<img src="/nodejs/fe-end.png">

[slide]
# 为什么使用Node.js做为中间件？
* 模块共用
* 前端最熟悉的语言
* 容易切换开发模式