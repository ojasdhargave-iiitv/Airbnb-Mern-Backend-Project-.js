const express=require('express');
const path=require('path');
const userRouter=express.Router();
const rootdir = require('../utils/pathutil');
const { registeredhomes } = require('./hostRouter');


userRouter.get("/",(req,res,next)=>{
    console.log(registeredhomes);
    res.render('home', {registeredhomes,pageTitle:'Airbnb',currentPage:'home'});//{'ejs filenmae,{the properties to import}}
})

module.exports=userRouter;