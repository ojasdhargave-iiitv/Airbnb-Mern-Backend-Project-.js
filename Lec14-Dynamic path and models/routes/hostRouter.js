const express=require('express');
const path=require('path');
const hostRouter=express.Router();
const rootdir = require('../utils/pathutil');

const hostcontroller=require('../controllers/hostcontroller');

hostRouter.get("/add-homes",hostcontroller.getaddhomes);
hostRouter.post("/add-homes",hostcontroller.postaddhomes);
hostRouter.get("/host-home-list",hostcontroller.gethosthomes);

module.exports=hostRouter;
