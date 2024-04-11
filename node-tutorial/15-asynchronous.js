const {readFile} = require("fs");

const getText = (path) =>{
    return new Promise( (resolve,reject)=>{
        
        readFile(path,"utf8",(err,data)=>{
        if(err){
            reject(err);
        }
        else{   
            resolve(data);
        }
})
    } );
}

getText("./content/first.txt")
    .then((data)=>{
    console.log(data)})
    .catch((err)=>{ 
        console.log(err);
    });
console.log("after sync getText first.txt!\n\n");
const start = async ()=>{
    try{
        const first = await getText("./content/second.txt");
        console.log(first);
    }
    catch(err){
        console.log(err);
    }
}
start();
console.log("after async getText second.txt!\n\n");