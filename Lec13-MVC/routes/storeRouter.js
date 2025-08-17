const express=require('express');
const path=require('path');
const storeRouter=express.Router();
const rootdir = require('../utils/pathutil');

const homecontroller=require('../controllers/storecontroller');

storeRouter.get("/homes",homecontroller.gethomes);
storeRouter.get("/",homecontroller.getindex);
storeRouter.get("/bookings",homecontroller.getBookings);
storeRouter.get("/favourites",homecontroller.getfavourites);

module.exports=storeRouter;