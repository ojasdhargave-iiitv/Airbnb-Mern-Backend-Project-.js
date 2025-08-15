const http=require('http');
const {requesthandler}=require('./handler');

const server=http.createServer(requesthandler);
const PORT=3301;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`);
})