const express = require("express");
const router = express.Router()
const mysql =require("mysql");



router.post("/api/login",(req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
    //console.log(userName,password);
    const sqlSelect = "SELECT * FROM account WHERE email = ? AND password = ?";
    db.query (sqlSelect,[email,password],(err,result) => {
        if(result.length== 1) {
         
            console.log(result)
            res.send({result})
         
        
        }
    });
    
});


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"codetest",
});

module.exports = router