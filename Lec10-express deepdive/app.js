const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use((req,res,next)=>{
    console.log('come to the first middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('come to the second middleware');
    next();
})
app.get("/",(req,res,next)=>{
    console.log('come to the home middleware');
    res.send('<h1>Welcome to the Home page</h1>')
    next();
})
app.get("/contact-us",(req,res,next)=>{
    console.log('come to the contact middleware');
    res.send(`
        <form action="/contact-us" method="POST">
            <h1>Please enter the details</h1>
            <input type="type" name="name" placeholder="Enter your name">
            <input type="email" name="email" placeholder="Enter your email">
            <input type="submit" value="submit">
        </form>
    `)
})
app.post("/contact-us",(req,res,next)=>{
    console.log('contacting successfull');
    next();
})

app.use(bodyParser.urlencoded());// this is used in bw 2 post fn of same url to fetch the data (req.body) from the browser

app.post("/contact-us",(req,res,next)=>{
    console.log('contacting successfull',req.url,req.method,req.body);
    res.send('<h1>we will connect to you shortly</h1>')
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})