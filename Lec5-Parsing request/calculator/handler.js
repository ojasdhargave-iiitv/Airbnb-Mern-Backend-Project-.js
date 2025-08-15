const {sumhandler}=require('./sum');

const requesthandler=(req,res)=>{
    console.log(req.url,req.method);
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`<html>
                    <head>
                        <title>calculator</title>
                    </head>
                    <body>
                        <h1>Welcome to the Home</h1>
                        <a href="/calculator">Go to Calculator</a>
                    </body>
                </html>`)
        return res.end();
    }else if(req.url.toLowerCase()==='/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write(`<html>
                    <head>
                        <title>navbar</title>
                    </head>
                    <body>
                        <h1>Here is the calculator</h1>
                        <form action="/calculate" method="POST">
                            <input type="text" name="first" placeholder="First Num">
                            <input type="text" name="second" placeholder="Second Num">
                            <input type="submit" name="submit" placeholder="Sum">
                        </form>
                    </body>
                </html>`)
        return res.end();
    }else if(req.url.toLowerCase()==='/calculate'&& req.method==="POST"){
        return sumhandler(req,res);
    }

    res.setHeader('Content-Type','text/html');
    res.write(`<html>
                <head>
                    <title>navbar</title>
                </head>
                <body>
                    <h1>404 Page not found</h1>
                    <a href="/">Go to Home</a>
                </body>
            </html>`)
    res.end();
}

exports.requesthandler=requesthandler;