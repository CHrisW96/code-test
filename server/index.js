const express = require("express");
const bodyParser = require( 'body-parser');
const cors = require("cors");
const mysql =require("mysql");
const app = express();
const Register = require('./routes/Register')
const Login = require('./routes/Login')
const Createrecord = require('./routes/Createrecord')
const ShowRecords = require('./routes/ShowRecords')

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Login)
app.use(Register)
app.use(Createrecord)
app.use(ShowRecords)




const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"codetest",
});

app.listen(3003,()=>{
    console.log ("running on port 3001")
})