const fs=require('fs');
const path=require('path');
const rootdir=require('../utils/pathutil');
const { registerHooks } = require('module');
const { urlToHttpOptions } = require('url');

let registeredhomes=[];

module.exports=class Home{
    constructor(houseName,price,location,rating,photo){
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.photo=photo;
    }

    save(){
        this.id=Math.random().toString();
        Home.fetchAll(registeredhomes=>{
            registeredhomes.push(this);
            const homesdatapath=path.join(rootdir,'data','homes.json');
            fs.writeFile(homesdatapath, JSON.stringify(registeredhomes),err=>{
                console.log(err);
            })
        })
    }

    static fetchAll(callback){

        const homesdatapath=path.join(rootdir,'data','homes.json');
        fs.readFile(homesdatapath,(err,data)=>{

            callback(!err?JSON.parse(data):[]);
        })
    }

    static findbyId(homeId,callback){
        this.fetchAll(homes=>{
            const homefound=homes.find(home=> home.id===homeId);
            callback(homefound);
        })
    }

};

