const Home=require('../models/homes');

exports.getaddhomes=(req,res,next)=>{
    res.render('host/edit-home',{pageTitle:'Add homes',currentPage:'add-home',editing:false});
};

exports.getedithomes=(req,res,next)=>{
    const homeId=req.params.homeId;
    const editing=req.query.editing==='true';

    Home.findById(homeId).then((home)=>{
        if(!home){
            console.log("Home not found");
            res.redirect('/host/host-home-list');
        }
        console.log(homeId,editing,home);
        res.render('host/edit-home',{home:home, pageTitle:'Edit homes',currentPage:'edit-home',editing:editing});
    })

};

exports.postaddhomes=(req,res,next)=>{
    const {houseName,price,location,rating,photo,description}=req.body;
    const home=new Home({houseName,price,location,rating,photo,description});
    home.save().then(()=>{
        res.redirect('/host/host-home-list')
    });
    
}

exports.postedithomes=(req,res,next)=>{
    const {id,houseName,price,location,rating,photo,description}=req.body;
    // const home=new Home(houseName,price,location,rating,photo,description,id);
    Home.findById(id).then(home=>{
        home.houseName=houseName;
        home.price=price;
        home.location=location;
        home.rating=rating;
        home.photo=photo;
        home.description=description;

        home.save().then((result)=>{
            console.log(result);
        });
        res.redirect('/host/host-home-list')
    })

}

exports.postdeletehomes=(req,res,next)=>{
    const homeId=req.params.homeId;
    console.log('deleted',homeId);
    Home.findByIdAndDelete(homeId).then(()=>{
        res.redirect('/host/host-home-list');
    }).catch(err=>{
        if(err){
            console.log(err);
        }
    })
}


exports.gethosthomes=(req,res,next)=>{
  Home.find().then((registeredhomes)=>{
        res.render('host/host-home-list', {registeredhomes,pageTitle:'Host Homes Lists',currentPage:'host-home-list'});
    });
}