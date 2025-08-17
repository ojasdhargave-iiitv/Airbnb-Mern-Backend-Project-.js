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
    console.log('Bookings route hit');
     res.render('store/favourites', {pageTitle:'My favourites',currentPage:'favourites'});
})
