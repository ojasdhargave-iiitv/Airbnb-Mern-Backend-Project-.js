const mongo=require('mongodb');

const MongoClient=mongo.MongoClient;
const mongoUrl="mongodb+srv://thenameisojas:TariPoha9333@thenameisojas.ilrjvw6.mongodb.net/?retryWrites=true&w=majority&appName=thenameisojas";

let _db;

const mongoconnect=(callback)=>{
    MongoClient.connect(mongoUrl).then((client)=>{
        _db=client.db('Airbnb');
        callback();
    }).catch(err=>{
        console.log(err);
    })
}

const getdb=()=>{
    if(!_db){
        throw new error('mongo not connected')
    }
    return _db
}

exports.mongoconnect=mongoconnect;
exports.getdb=getdb;