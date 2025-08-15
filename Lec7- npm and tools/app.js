const http=require('http');
const server=http.createServer();

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})