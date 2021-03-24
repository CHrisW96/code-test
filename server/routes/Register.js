const express = require("express");
const router = express.Router()
const mysql =require("mysql");




router.post("/api/register",(req,res)=>{


    const email = req.body.email;
    const password = req.body.password;
    const clinic_name = req.body.clinicName;
    const phone_number = req.body.phoneNumber;
    const address = req.body.address;
    const sqlInsert = "INSERT INTO account (email, password, clinic_name, phone_number, address) VALUES (?,?,?,?,?)";

    db.query(sqlInsert,[email,password,clinic_name,phone_number,address],(err,result)=> {
        if (err) {
            console.log(err);
   
            res.send({"result": false})
        } else {
       
            res.send({"result": true})        
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