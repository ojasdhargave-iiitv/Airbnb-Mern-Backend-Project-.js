const db=require('../utils/database');

module.exports=class Home{
    constructor(houseName,price,location,rating,photo,description,id){
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.photo=photo;
        this.description=description;
        this.id=id;
    }

    save(){
        // If an id exists, update the existing home
        if (this.id) {
            return db.execute(
                'UPDATE homes SET houseName = ?, price = ?, location = ?, rating = ?, photo = ?, description = ? WHERE id = ?',
                [this.houseName, this.price, this.location, this.rating, this.photo, this.description, this.id]
            );
        } 
        // Otherwise, insert a new home
        else {
            return db.execute(
                'INSERT INTO homes (houseName, price, location, rating, photo, description) VALUES (?, ?, ?, ?, ?, ?)',
                [this.houseName, this.price, this.location, this.rating, this.photo, this.description]
            );
        }

        
        //this syntax is not used due to sql injection threat

        // return db.execute(`INSERT INTO homes (houseName,price,location,rating,photo) VALUES ('${this.houseName}','${this.price}','${this.location}','${this.rating}','${this.photo}','${this.houseName}','${this.description}')`)
    }

    static fetchAll(){
        return db.execute('SELECT * FROM homes');
    }

    static findbyId(homeId,callback){
        return db.execute('SELECT * FROM homes WHERE id=?',[homeId]);
    }
    static deletebyId(homeId,callback){
        return db.execute('DELETE FROM homes WHERE id=?',[homeId]);
    }

};

