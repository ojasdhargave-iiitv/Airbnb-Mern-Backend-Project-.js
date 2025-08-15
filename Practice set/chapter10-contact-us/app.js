const express=require('express');
const path=require('path');

const app=express();

const homeRouter=require('./routes/homeRouter.js')
const contactRouter=require('./routes/contactRouter.js');
//const { CONNREFUSED } = require('dns');
const rootdir=require('./utils/pathutil.js');


app.use(express.urlencoded());

app.use((req,res,next)=>{
    console.log(req.url,req.method,req.body);
    next();
});


app.use(homeRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})