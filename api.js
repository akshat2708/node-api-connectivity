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

const mo=mongoose.model( "api",sc);


app.get("",(req,res)=>{
    res.send("hello");
});
app.get("/users/all",async(req,res)=>{

    const users=await mo.find({});
    console.log(req.query);
    res.json({
        success:true, 
        users:[],
    });
});
app.get("/userid",async(req,res)=>{
    const {id}=req.body;

    const users=await mo.findById(id);
    console.log(req.query);
    res.json({
        success:true, 
        users:[],
    });
});
app.post("/users/new",async(req,res)=>{

    const{name,email,password}= req.body;

  
    await mo.create({
        name,
        email,
        password,
    });
    res.json({
        success:true, 
        message:"Registered Succesfully",
    });
});

app.listen(4000,()=>{
    console.log("live on 4000 port")
});