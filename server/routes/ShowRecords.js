const express = require("express");
const router = express.Router()
const mysql =require("mysql");




router.post("/api/showrecords",(req,res)=>{


    const clinic = req.body.clinic;
 
    //console.log(userName,password);
    const sqlSelect = "SELECT * FROM record WHERE clinic = ?  ";
    db.query (sqlSelect,[clinic],(err,result) => {

        if(err) {
            //console.log(err)
            res.send({result:false})
        } else {
            //console.log(result)
            res.send(result)
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