//1:加载相应模块
const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
const bodyParser = require('body-parser');
//2:创建express服务器
var app = express();
app.use( bodyParser.urlencoded({extended: true}) );
app.use(express.static(__dirname+"/public"));
const routerLogin=require("./router/login");
const routerRegister=require("./router/register");
const routerXingcheng=require("./router/xingcheng");
const routerQuchu=require("./router/quchu");
//3:绑定监听端口
app.listen(3000,()=>{
    console.log("server create success,home page http://127.0.0.1:3000/font_page.html")
});
app.use("/login",routerLogin);
app.use("/register",routerRegister);
app.use("/xingcheng",routerXingcheng);
app.use("/quchu",routerQuchu);
