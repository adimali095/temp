const http = require("http");
const server = http.createServer( (req,res) =>{
    if(req.url === "/"){
        
        res.end("HomePage");
        return;
    }
    if(req.url === "/about"){
        for(let i =0; i<1000;i++){
            for(let j =0; j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end("About our page");
        return;
    }
    res.end("No homepage or about");
});

server.listen(5000 , ()=>{
    console.log("Server is listening on port 5000...")
});