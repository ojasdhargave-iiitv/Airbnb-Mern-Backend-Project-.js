//core module
//const http=require('http'); no need of this node core module now express will do it for us

//external module
const express=require('express');

//local module
const requesthandler=require('./user');

const app=express();

app.get("/",(req,res,next)=>{
    console.log(req.url,req.method,'come to the first middleware');
    //res.send('come to the first middleware');
    next();
})

app.post("/submit-details",(req,res,next)=>{
    console.log(req.url,req.method,'come to the submit page');
    res.send('Welcome to the backend practice set page')
})

app.use("/",(req,res,next)=>{
    console.log(req.url,req.method,'come to the another middleware');
    res.send('come to the another middleware')
})
//const server=http.createServer(app);

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})