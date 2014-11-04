title: 基于Nodejs的工程化实践
speaker: Liu Qing
transition: slide
files: /js/demo.js,/css/demo.css

[slide]

# 基于Nodejs的工程化实践
## 演讲者：刘卿

[slide]
# Node.js是什么？
---
> 业界写法 Node.js/Nodejs/Node

* 服务器端运行的 Javascript {:&.moveIn}
* 扩展js语义：增加了模块化
* 大约有8000行 c/c++代码，2000行 js 代码 [Node.js](https://github.com/joyent/node)

[slide]
# Node.js 优势？
---
* 基于 V8 {:&.moveIn}
* 异步I/O、事件驱动
* 符合前端团队的能力模型
* 前后端代码及模块共用

[slide]
# Node.js 劣势？
---
* 不适合CPU密集型 {:&.moveIn}
* 技术未成熟，发展快，模块多选择困难
* 反人类的多层闭包嵌套造成代码可读性差

[slide]
# 5行代码实现一个简单的web服务器

```javascript
var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('hellow wolrd!'); 
}).listen(8090, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8090/');
```

[slide]
# 目前主流应用
---
* 自动化工具
* 前后端分离 

[slide]
# 问题

* 不支持预编译工具 {:&.moveIn}
* 自动编译
* 远程调试
* 压缩规则可配
* 自动刷新
* 自动部署
* 前后端联调成本过高
* 重复的模块和工作太多
* 页面零散，不方便管理
* 现有工具的弊端

[slide]
# 前期

* 编译less、coffeescript的脚本
* 抽离js公共组件和模块，形成UI组件库，通过Nodejs编译不同的模块组合到需要的项目
```
common
  ├─demo # demo示例目录，不上线
  ├─docs # 文档目录，doxx生成
  ├─lib # 静态资源
  │  ├─components # 组件库
  |  |   ├─tabs   # 包含 css/js/html
  |  |   ├─calendar
  |  |   ├─...
  │  ├─base.js    # 命名空间/基础方法
  │  ├─class.js   # 类封装
  │  └─nt.js      # js模板引擎
  └─build.js      # nodejs工具
```
[slide]

# 理财2期遇到的问题

* 开发环境无法走完整个流程 {:&.moveIn}
* 编译脚本每次都要手动执行
* 需要部署到开发环境，然后在通过脚本部署到测试环境
* 现有燕尾服，不支持压缩规则自定义
* 开发时，需要频繁的刷新页面

[slide]
# 思考

> 为什么不把这些零散的工具组合起来，形成一套完整的工作流

[slide]
# 理财二期
<img src="/nodejs/fe-build.jpg">

[slide]

# 待解决问题
* 通过配置自动化构建项目，并下载配置中的组件
* smarty公共模块抽离
* 前端受限于服务端的开发时间
* 零散的需求，散落在各个地方

[slide]
# 前后端分离思考

* 前端开发模式的转变完全受限与后端
* 前后端模板无法公用
* ...

[slide]
# 支付宝提出的方案
<img src="/nodejs/fe-end.png">

[slide]
# 为什么使用Node.js做为中间件？
* 模块共用 {:&.moveIn}
* 前端最熟悉的语言
* 容易切换开发模式