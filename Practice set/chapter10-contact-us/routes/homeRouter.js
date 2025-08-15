const express=require('express');
const homeRouter=express.Router();
const path=require('path');
const rootdir=require('../utils/pathutil.js');

homeRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','home.html'));
})

module.exports=homeRouter;