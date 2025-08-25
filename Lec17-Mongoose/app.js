const express=require('express');
const mongoose=require('mongoose');
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
    next();
})

app.use(express.urlencoded({ extended: false }));

app.use(storeRouter);
app.use("/host",hostRouter);

app.use(errorcontroller.pagenotfound);

const PORT=5000;

const dbPath="mongodb+srv://thenameisojas:TariPoha9333@thenameisojas.ilrjvw6.mongodb.net/Airbnb?retryWrites=true&w=majority&appName=thenameisojas";

mongoose.connect(dbPath).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server starts at: http://localhost:${PORT}`)
    })
});