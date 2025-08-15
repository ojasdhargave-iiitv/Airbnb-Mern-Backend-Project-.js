const sumhandler=(req,res)=>{
    const body=[];
    req.on("data",chunk=>{
        body.push(chunk);
    })
    req.on("end",()=>{
        const fullbody=Buffer.concat(body).toString();
        const params=new URLSearchParams(fullbody);
        const bodyobject=Object.fromEntries(params);
        const result= Number(bodyobject.first)+Number(bodyobject.second);
        console.log(result);

        res.setHeader('Content-Type','text/html');
        res.write(`<html>
                    <head>
                        <title>navbar</title>
                    </head>
                    <body>
                        <h1>Your Result is: ${result}</h1>
                        <a href="/calculator">Go to calculator</a>
                    </body>
                </html>`)
       return res.end();
    })
}

exports.sumhandler=sumhandler;