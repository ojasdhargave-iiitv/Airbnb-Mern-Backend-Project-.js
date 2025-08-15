const http=require('http');
// const requestlistener=(req,res)=>{
//     console.log(req);
// }
// http.createServer(requestlistener);

//or
const server=http.createServer((req,res)=>{
    console.log(req);
    process.exit()//stops the server after task completes and stops listening
})//starts and shuts the server dont listen to it right now add const to this and then listen 

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})