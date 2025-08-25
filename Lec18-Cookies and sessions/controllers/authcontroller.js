exports.getlogin=(req,res,next)=>{
    res.render("auth/login",{pageTitle:'Login',currentPage:'login'});
};
exports.postlogin=(req,res,next)=>{
    res.redirect("/");
};