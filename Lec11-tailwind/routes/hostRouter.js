const express=require('express');
const path=require('path');
const hostRouter=express.Router();
const rootdir = require('../utils/pathutil');

hostRouter.get("/add-homes",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-home.html'));
})
hostRouter.post("/add-homes",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootdir,'views','home-added.html'));
    // res.sendFile(path.join(__dirname,'../','views','home-added.html'));
})

module.exports=hostRouter;