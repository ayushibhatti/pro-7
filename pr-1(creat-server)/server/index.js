const http = require('http');

const port = 8000;

const requestHandaler = (req,res) => {
    res.write("<h1>hello word!</h1>")
    res.end();
}

const server = http.createServer(requestHandaler);

server.listen(port,(err)=>{
    if(!err){
        console.log("server is running");
    }
    return false;
    
})