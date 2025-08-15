const express=require('express');
const path=require('path');

//local modules
const userRouter = require('./routes/userRouter');
const {hostRouter,registerdhomes} = require('./routes/hostRouter');
const rootdir = require('./utils/pathutil');


const app=express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootdir,'public')))

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'404 Not Found '});
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})