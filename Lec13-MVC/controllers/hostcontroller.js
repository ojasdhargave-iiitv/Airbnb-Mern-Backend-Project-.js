const Home=require('../models/homes');

exports.getaddhomes=(req,res,next)=>{
    res.render('host/add-home',{pageTitle:'Add homes',currentPage:'add-home'});
};

exports.postaddhomes=(req,res,next)=>{
    const {houseName,price,location,rating,photo}=req.body;
    const home=new Home(houseName,price,location,rating,photo);
    home.save();

    res.render('host/home-added',{pageTitle:'Home Added Successfully',currentPage:'home-added'});
}

exports.gethosthomes=(req,res,next)=>{
    Home.fetchAll(registeredhomes=>{
        res.render('host/host-home-list', {registeredhomes,pageTitle:'Host Homes Lists',currentPage:'host-home-list'});
    });
}