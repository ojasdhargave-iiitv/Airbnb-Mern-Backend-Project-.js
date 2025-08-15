const express=require('express');
const contactRouter=express.Router();
const path=require('path');
const rootdir=require('../utils/pathutil.js');


contactRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact-us.html'));
})
contactRouter.post("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contacted.html'));
})

module.exports=contactRouter;