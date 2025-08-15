const express=require('express');
const path=require('path');

//local modules
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootdir = require('./utils/pathutil'); //by this util we dont need to remember or worry about the ../ or ./ of the file path just give the name of the folder and file and move on


const app=express();

app.use(express.static(path.join(rootdir,'public')))
//app.use(express.static('public'));

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded()); // no need to use bodyparser.url... bw 2 post express do it for us

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})