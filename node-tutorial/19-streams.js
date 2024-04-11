/* const {writeFileSync} = require("fs");
for(let i=0;i <1000;i++){
    writeFileSync("./content/newfile.txt",`\nHELLO ${i}`,{flag : 'a'});
}
 */
/* const {writeFileSync} = require("fs");
for(let i=0;i <100000;i++){
    writeFileSync("./content/big.txt",`\nHELLO ${i}`,{flag : 'a'});
}
 */
const {createReadStream} = require("fs");
const stream = createReadStream("./content/newFile.txt", {highWaterMark :131072});

stream.on('data',(result)=>console.log(result.length));
stream.on('error',(err)=>console.log(err));