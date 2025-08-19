const express=require('express');
const path=require('path');
const storeRouter=express.Router();
const rootdir = require('../utils/pathutil');

const homecontroller=require('../controllers/storecontroller');

storeRouter.get("/homes",homecontroller.gethomes);
storeRouter.get("/",homecontroller.getindex);
storeRouter.get("/bookings",homecontroller.getBookings);
storeRouter.get("/favourites",homecontroller.getfavourites);
storeRouter.get("/homes/:homeId",homecontroller.gethomedetails);
storeRouter.post("/add-to-favourites",homecontroller.postaddfavourites);

module.exports=storeRouter;