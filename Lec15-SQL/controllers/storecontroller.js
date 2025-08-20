const Favourite = require('../models/favourites');
const Home=require('../models/homes');

exports.gethomes=(req,res,next)=>{
  Home.fetchAll().then(([registeredhomes,fields])=>{
        res.render('store/home-list', {registeredhomes,pageTitle:'Homes Lists',currentPage:'home-list'});
    });
    
    // const registeredhomes=Home.fetchAll();
    // res.render('home', {registeredhomes,pageTitle:'Airbnb',currentPage:'home'});//{'ejs filenmae,{the properties to import}}
}

exports.getBookings=((req,res,next)=>{
    console.log('Bookings route hit');
     res.render('store/bookings', {pageTitle:'Bookings',currentPage:'bookings'});
})


exports.getindex = (req, res, next) => {
  Home.fetchAll().then(([registeredhomes,fields])=>{
    res.render('store/index', {
      registeredhomes,
      pageTitle: 'Airbnb',
      currentPage: 'index'
    });
  })

};


exports.getfavourites=((req,res,next)=>{
    Favourite.getfavourites(favourites=>{
  Home.fetchAll().then(([registeredhomes,fields])=>{
        const favouritehomes= registeredhomes.filter(home=>{
          return favourites.includes(home.id);
        })
         res.render('store/favourites', {favouritehomes:favouritehomes, pageTitle:'My favourites',currentPage:'favourites'});
      })
    })
    
})

exports.postaddfavourites = (req, res, next) => {
  const homeId = req.body.homeId;
  Favourite.addtofavourites(homeId, (err) => {
    if (err) {
      console.error('Failed to save favourite:', err);
    }
    res.redirect('/favourites');
  });
};

exports.postdelfavourites = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deletefavourites(homeId, (err) => {
    if (err) {
      console.error('Failed to delete favourite:', err);
    }
    res.redirect('/favourites');
  });
};

exports.gethomedetails=((req,res,next)=>{
  const homeId=req.params.homeId;

  Home.findbyId(homeId).then(([homes])=>{
    const home=homes[0];
    if(!home){
      res.redirect('/homes');
      console.log('Home not found: ',home);
    }else{
      console.log('Home found: ',home);
      res.render('store/home-detail', {home:home,pageTitle:'Home Details',currentPage:'home details'});
    }
  })
})

