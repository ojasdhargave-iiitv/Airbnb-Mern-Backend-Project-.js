const http=require('http');
const typesyntax=require('./syntax');
const runtime = require('./runtime')
const logical = require('./logical');
const { types } = require('util');

const server=http.createServer((req,res)=>{
    typesyntax();
    logical();
    runtime();
});

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`server starts at: http://localhost:${PORT}`)
})