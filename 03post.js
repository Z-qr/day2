// 1.导入模块
const { constants } = require('buffer');
const { Console } = require('console');
const http = require('http');
const querystring = require("querystring");

// 2.创建web实例
const server = http.createServer();

// 3.监听qequest请求
server.on("request",(req,res)=>{
    // 定义空的容器
    let arr = [];
    // 逐块接受数据
    req.on("data",(buffer)=>{
        arr.push(buffer);
    });
    // 接受完毕进一步处理
    req.on("end",()=>{
        let buffer = Buffer.concat(arr);
        // 将buffer转化成我们可以识别的字符串
        let str = buffer.toString();
        // 通过querystring将字符串转成对象形式以方便使用
        Console.log(querystring.parse(str));
    });
});
// 4.启动服务
server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
}) 