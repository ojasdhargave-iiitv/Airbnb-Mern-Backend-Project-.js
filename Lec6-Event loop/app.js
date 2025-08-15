const http=require('http');
const requesthandler=require('./user');

const server=http.createServer(requesthandler)

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})