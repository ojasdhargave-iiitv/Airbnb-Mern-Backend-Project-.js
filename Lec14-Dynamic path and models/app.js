const express=require('express');
const path=require('path');


//local modules
const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const rootdir = require('./utils/pathutil');
const errorcontroller=require('./controllers/error')


const app=express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootdir,'public')))

app.use((req,res,next)=>{
    console.log(`Request Received: ${req.method} ${req.url}`); // This log is helpful
    next();
})

app.use(express.urlencoded({ extended: false }));

app.use(storeRouter);
app.use("/host",hostRouter);

app.use(errorcontroller.pagenotfound);

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})