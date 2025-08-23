const { ObjectId } = require('mongodb');
const {getdb}=require('../utils/database');

module.exports=class Home{
    constructor(houseName,price,location,rating,photo,description,_id){
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.photo=photo;
        this.description=description;
        if(_id){
            this._id=_id;
        }
    }

    save(){
        const db=getdb();
        if(this._id){//update case
            const updatefields={
                houseName:this.houseName,
                price:this.price,
                location:this.location,
                rating:this.rating,
                photo:this.photo,
                description:this.description
            }

            return db.collection('homes').updateOne({_id:new ObjectId(String(this._id))},{$set:updatefields});

        }else{//add home case
            return db.collection('homes').insertOne(this);
        }
    }

    static fetchAll(){
        const db=getdb();
        return db.collection('homes').find().toArray();
    }

    static findbyId(homeId){
        console.log(homeId);
        const db=getdb();
        return db.collection('homes').find({_id:new ObjectId(String(homeId))}).next();
    }
    static deletebyId(homeId,callback){
        const db=getdb();
        return db.collection('homes').deleteOne({_id:new ObjectId(String(homeId))});
    }

};

