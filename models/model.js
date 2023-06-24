const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"practice"})
.then(()=>{console.log("database conected")})
.catch(()=>{console.log("error")});

const sc= new mongoose.Schema({
    name:String,
    email:String,
    password:String,


});

export const mo=mongoose.model( "api",sc);
