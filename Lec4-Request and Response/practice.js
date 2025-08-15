const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url==='/home'){
        res.write('Welcome to the Home');
        return res.end();
    }else if(req.url==="/men"){
        res.write('Welcome to the Mens Section');
        return res.end();
    }
    else if(req.url==="/women"){
        res.write('Welcome to the Womens Section');
        return res.end();
    }
    else if(req.url==="/kids"){
        res.write('Welcome to the Kids Section');

        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write(`<html>
                <head>
                    <title>navbar</title>
                </head>
                <body>
                    <a href="/home">Home</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/kids">Kids</a>
                </body>
            </html>`)
    res.end();
})

const PORT=3301;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})