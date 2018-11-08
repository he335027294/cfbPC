const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.post("/register",(req,res)=>{
    var {email,uname,upwd}=req.body;
    (async function(){
        var existed=false;
        var step1=await new Promise((resolve,reject)=>{
            var sql="select * from cfb_userlist where email = ?"
            pool.query(sql,[email],(err,result)=>{
                if(result.length>0){
                    res.send({code:-1,msg:"该邮箱已被注册，请登陆"});
                    existed=true;
                }
                resolve();
            }) 
        })
        var step2=await new Promise((resolve,reject)=>{
            if(!existed){
                var sql="INSERT INTO cfb_userlist VALUES (null,?,?,?)"
                pool.query(sql,[email,uname,upwd],(err,result)=>{
                    if(result.affectedRows==1){
                        res.send({code:1,msg:"注册成功！"})
                    }
                })
            } 
        })
    })();        
})
module.exports = router;