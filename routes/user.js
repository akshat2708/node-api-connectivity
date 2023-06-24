const express=require('express');
const mongoose=require('mongoose');
const app=express();
const router=express.router();
router.get("/users/all",async(req,res)=>{

    const users=await mo.find({});
    console.log(req.query);
    res.json({
        success:true, 
        users,
    });
});
app.post("/users/new",async(req,res)=>{

    const{name,email,password}= req.body;

  
    await mo.create({
        name,
        email,
        password,
    });
    res.status(201).cookie("temp","akshat").json({
        success:true, 
        message:"Registered Succesfully",
    });
      
    });

export default router;