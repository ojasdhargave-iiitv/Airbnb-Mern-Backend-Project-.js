const fs=require('fs');
const path=require('path');
const rootdir=require('../utils/pathutil');

const favouritespath=path.join(rootdir,'data','favourites.json');

module.exports=class Favourite{

    static getfavourites(callback) {
        fs.readFile(favouritespath, (err, data) => {
            // If there's an error (like the file doesn't exist),
            // return an empty array.
            if (err) {
                return callback([]);
            }
            // If the file exists but is empty, it will cause a crash.
            // So, check for that and return an empty array.
            if (data.length === 0) {
                return callback([]);
            }
            // Otherwise, parse the data and return it.
            try {
                callback(JSON.parse(data));
            } catch (parseErr) {
                console.error('Error parsing favourites.json:', parseErr);
                callback([]);
            }
        });
    }

    static addtofavourites(homeId, callback) {
        Favourite.getfavourites((favourites) => {
            if (favourites.includes(homeId)) {
                console.log('Added Already');
                // Call the callback with no error
                return callback(null);
            } else {
                favourites.push(homeId);
                fs.writeFile(favouritespath, JSON.stringify(favourites), callback);
            }
        });
    }
};