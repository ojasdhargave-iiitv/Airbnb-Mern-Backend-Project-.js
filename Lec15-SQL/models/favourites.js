const fs=require('fs');
const path=require('path');
const rootdir=require('../utils/pathutil');

const favouritespath=path.join(rootdir,'data','favourites.json');

module.exports=class Favourite{

    static getfavourites(callback) {
        fs.readFile(favouritespath, (err, data) => {
                callback(!err? JSON.parse(data):[]);
    })
}

    static addtofavourites(homeId, callback) {
        Favourite.getfavourites((favourites) => {
            if (favourites.includes(homeId)) {
                callback('Added Already')
            } else {
                favourites.push(homeId);
                fs.writeFile(favouritespath, JSON.stringify(favourites), callback);
            }
        });
    }
    static deletefavourites(delhomeId, callback) {
        Favourite.getfavourites(homeIds=>{
            homeIds=homeIds.filter(homeId=> delhomeId!==homeId);
            fs.writeFile(favouritespath,JSON.stringify(homeIds),callback);
        });
    }
};