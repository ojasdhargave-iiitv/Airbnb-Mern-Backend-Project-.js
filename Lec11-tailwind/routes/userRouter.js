const express=require('express');
const path=require('path');
const userRouter=express.Router();
const rootdir = require('../utils/pathutil');


userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','home.html'));
})

module.exports=userRouter;