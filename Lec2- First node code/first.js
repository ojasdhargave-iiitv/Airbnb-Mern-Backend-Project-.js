console.log('ojas bhai ki jai');
const fs=require('fs');
fs.writeFile('Lec2- First node code/output.txt','file write ho gyi' ,(err)=>{
    if(err) console.log(err);
    else console.log('successful ho gya bhai');
});