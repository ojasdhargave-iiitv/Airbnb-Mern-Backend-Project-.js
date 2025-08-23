const {getdb}=require('../utils/database');
const mongodb = require('mongodb');

module.exports=class Favourite{
    constructor(houseId){
        this.houseId=houseId;
    }

    save(){
        const db=getdb();
        //return db.collection('favourites').insertOne(this);
        return db.collection('favourites').findOne({houseId:this.houseId}).then(existinghome=>{
            if(!existinghome){
                return db.collection('favourites').insertOne(this);
            }
            return Promise.resolve();//instead of giving the status of error we intentionally mark it successfull with this
        });
    }

    static getfavourites(){
        const db=getdb();
        return db.collection('favourites').find().toArray();
    }

    static deletefavourites(delhomeId) {
        const db=getdb();
        return db.collection('favourites').deleteOne({houseId:delhomeId});
    }
};