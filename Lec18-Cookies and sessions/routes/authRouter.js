const express=require('express');
const path=require('path');
const authRouter=express.Router();
const rootdir = require('../utils/pathutil');

const authcontroller=require('../controllers/authcontroller');

authRouter.get("/login",authcontroller.getlogin);
authRouter.post("/login",authcontroller.postlogin);

module.exports=authRouter;