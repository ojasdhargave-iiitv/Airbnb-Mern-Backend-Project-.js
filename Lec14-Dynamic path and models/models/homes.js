const fs=require('fs');
const path=require('path');
const rootdir=require('../utils/pathutil');
const { registerHooks } = require('module');
const { urlToHttpOptions } = require('url');

const homesdatapath=path.join(rootdir,'data','homes.json');

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

        Home.fetchAll(registeredhomes=>{

            if(this.id){//editing case
                registeredhomes=registeredhomes.map(home=>{
                    return home.id==this.id ? this:home;
                })

            }else{ //add home case
                this.id=Math.random().toString();
                registeredhomes.push(this);
            }

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
    static deletebyId(homeId,callback){
        this.fetchAll(homes=>{
            homes=homes.filter(home=> home.id!==homeId);
            fs.writeFile(homesdatapath, JSON.stringify(homes),callback)
        })
    }

};

