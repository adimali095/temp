const http =require('http');

const server = http.createServer( (req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end("here is short history")
    }
    res.end("this is default")
} );

server.listen(5000);