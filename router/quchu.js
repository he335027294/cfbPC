const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/quchu",(req,res)=>{
    var sql="select * from cfb_quchu";
    pool.query(sql,(err,result)=>{
        res.send(result);
    })
})
module.exports = router;