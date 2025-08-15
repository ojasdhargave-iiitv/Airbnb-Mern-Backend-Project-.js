const express=require('express');
const path=require('path');
const hostRouter=express.Router();
const rootdir = require('../utils/pathutil');

hostRouter.get("/add-homes",(req,res,next)=>{
    res.render('add-home',{pageTitle:'Add homes',currentPage:'add-home'});
})

const registeredhomes=[];
hostRouter.post("/add-homes",(req,res,next)=>{
    console.log(req.body);
    registeredhomes.push(req.body);
    res.render('home-added',{pageTitle:'Home Added Successfully',currentPage:'home-added'});
})

exports.hostRouter=hostRouter;
exports.registeredhomes=registeredhomes;