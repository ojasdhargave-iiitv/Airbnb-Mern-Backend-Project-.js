const fs=require('fs');
const { buffer, json } = require('stream/consumers');

const requesthandler=((req,res)=>{
    console.log(req.url, req.method);

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Welcome to Home</h1><br><h3>Enter your details here</h3> <br> <form action="/submit-details" method="POST"><input type="text" name="username" placeholder="Enter your username"> <br> <label for="male">Male</label><input type="radio" id="male" value="male" name="gender"> <label for="female">Female</label><input type="radio" id="female" value="female" name="gender"> <br> <input type="submit" value="Submit"> </form></body></html>');
        return res.end();
    }else if(req.url.toLowerCase()==='/submit-details'&& req.method==="POST"){
        const body=[];
        req.on("data",chunk=>{
            body.push(chunk);
            console.log(chunk);
        })

        req.on("end",()=>{
            const fullbody=Buffer.concat(body).toString();// parse the buffer to string
            console.log(fullbody);

            const params= new URLSearchParams(fullbody);
            //const bodyobject={};
            // for(const[key,val] of params.entries()){
            //     bodyobject[key]=val; 
            //store the entries of there resp key to there resp value
            // }
            //or shorthand for this for loop

            const bodyobject=Object.fromEntries(params);
            console.log(bodyobject);
            fs.writeFileSync('Lec5-Parsing request/user.txt',JSON.stringify(bodyobject));
        })

        res.statusCode=302;
        res.setHeader('Location','/');
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>YOO...Ojas</title></head><body><h1>Like/Share/Subscribe</h1></body></html>');
    res.end();
})

module.exports=requesthandler;