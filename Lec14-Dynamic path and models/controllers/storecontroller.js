const Favourite = require('../models/favourites');
const Home=require('../models/homes');

exports.gethomes=(req,res,next)=>{
    Home.fetchAll(registeredhomes=>{
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
  Home.fetchAll((registeredhomes) => {
    res.render('store/index', {
      registeredhomes,
      pageTitle: 'Airbnb',
      currentPage: 'index'
    });
  });
};
exports.getfavourites=((req,res,next)=>{
     res.render('store/favourites', {pageTitle:'My favourites',currentPage:'favourites'});
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
exports.gethomedetails=((req,res,next)=>{
  const homeId=req.params.homeId;

  Home.findbyId(homeId,home=>{
    if(!home){
      res.redirect('/homes');
      console.log('Home not found: ',home);
    }else{
      console.log('Home found: ',home);
      res.render('store/home-detail', {home:home,pageTitle:'Home Details',currentPage:'home details'});
    }
  })
})
