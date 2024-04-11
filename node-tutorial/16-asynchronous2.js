const {readFile,writeFile} = require("fs");

const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async ()=>{
    try{
        const first = await readFilePromise("./content/first.txt","utf8");
        console.log(first);
    }
    catch(err){
        console.log(err);
    }
}
start()

/* const getText = (path) =>{
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
} */

/* getText("./content/first.txt")
    .then((data)=>{
    console.log(data)})
    .catch((err)=>{ 
        console.log(err);
    });
console.log("after sync getText first.txt!\n\n"); */

/* start(); */
//console.log("after async getText second.txt!\n\n");