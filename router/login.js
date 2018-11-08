const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.post("/login",(req,res)=>{
    var {email,upwd}=req.body;
    var sql="select * from cfb_userlist where email = ? and upwd = ?"
    pool.query(sql,[email,upwd],(err,result)=>{
        if(result.length>0){
            res.send({code:1,msg:result[0]});  
        }else if(result.length==0){
            res.send({code:-1,msg:"邮箱或密码错误"});
        }
    })  
})
module.exports = router;