const express = require("express");
const router = express.Router()
const mysql =require("mysql");




router.post("/api/createrecord",(req,res)=>{


    const clinic = req.body.clinic;
    const doctorName = req.body.doctorName;
    const patient = req.body.patient;
    const diagnosis = req.body.diagnosis;
    const medication = req.body.medication;
    const consulationFee = req.body.consulationFee;
    const followUp = req.body.followUp;

    const sqlInsert = "INSERT INTO record (	clinic,	doctor_name, patient_name, diagnosis, medication, consulation_fee, follow_up ) VALUES (?,?,?,?,?,?,?)";

    db.query(sqlInsert,[clinic,doctorName,patient,diagnosis,medication,consulationFee,followUp],(err,result)=> {
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