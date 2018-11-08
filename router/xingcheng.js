const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/local",(req,res)=>{
    var sql="select * from cfb_xingcheng_local";
    pool.query(sql,(err,result)=>{
        res.send(result);
    })
})
router.get("/foreign",(req,res)=>{
    var sql="select * from cfb_xingcheng_foreign";
    pool.query(sql,(err,result)=>{
        res.send(result);
    })
})
module.exports = router;