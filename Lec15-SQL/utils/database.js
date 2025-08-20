const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'TariPoha9333',
    database:'airbnb'
});

module.exports=pool.promise();