const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    //console.log(req);
    console.log(req.url, req.method ,req.headers);

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Welcome to Home</h1><br><h3>Enter your details here</h3> <br> <form action="/submit-details" method="POST"><input type="text" name="username" placeholder="Enter your username"> <br> <label for="male">Male</label><input type="radio" id="male" value="male" name="gender"> <label for="female">Female</label><input type="radio" id="female" value="female" name="gender"> <br> <input type="submit" value="Submit"> </form></body></html>');
        return res.end();
    }else if(req.url.toLowerCase()==='/submit-details'&& req.method==="POST"){
        fs.writeFileSync('Lec4-Request and Response/user.txt','ojas');
        res.statusCode=302;
        res.setHeader('Location','/');
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Like/Share/Subscribe</h1></body></html>');
    res.end();
   a
})

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})