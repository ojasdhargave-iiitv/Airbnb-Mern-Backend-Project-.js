const Home=require('../models/homes');

exports.getaddhomes=(req,res,next)=>{
    res.render('host/edit-home',{pageTitle:'Add homes',currentPage:'add-home',editing:false});
};

exports.getedithomes=(req,res,next)=>{
    const homeId=req.params.homeId;
    const editing=req.query.editing==='true';

    Home.findbyId(homeId,home=>{
        if(!home){
            console.log("Home not found");
            res.redirect('/host/host-home-list');
        }
        console.log(homeId,editing,home);
        res.render('host/edit-home',{home:home, pageTitle:'Edit homes',currentPage:'edit-home',editing:editing});
    })

};

exports.postaddhomes=(req,res,next)=>{
    const {houseName,price,location,rating,photo}=req.body;
    const home=new Home(houseName,price,location,rating,photo);
    home.save();
    res.redirect('/host/host-home-list')
    
}

exports.postedithomes=(req,res,next)=>{
    const {id,houseName,price,location,rating,photo}=req.body;
    const home=new Home(houseName,price,location,rating,photo);
    home.id=id;
    home.save();

    res.redirect('/host/host-home-list')
}

exports.postdeletehomes=(req,res,next)=>{
    const homeId=req.params.homeId;
    console.log('deleted',homeId);
    Home.deletebyId(homeId,err=>{
        if(err){
            console.log(err);
        }
        res.redirect('/host/host-home-list');
    })
}


exports.gethosthomes=(req,res,next)=>{
    Home.fetchAll(registeredhomes=>{
        res.render('host/host-home-list', {registeredhomes,pageTitle:'Host Homes Lists',currentPage:'host-home-list'});
    });
}