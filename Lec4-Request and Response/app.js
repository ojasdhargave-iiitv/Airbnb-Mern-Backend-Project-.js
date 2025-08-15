const http=require('http');

const server=http.createServer((req,res)=>{
    //console.log(req);
    console.log(req.url, req.method ,req.headers);

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Welcome to Home</h1></body></html>');
        return res.end();
    }else if(req.url==='/product'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Checkout your product</h1></body></html>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Like/Share/Subscribe</h1></body></html>');
    res.end();
   
})

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})