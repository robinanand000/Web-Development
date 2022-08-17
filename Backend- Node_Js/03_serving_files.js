const http = require('http');
const fs = require("fs");
const filecontent = fs.readFileSync("C:\\vsCode files\\Web Developement Bootcamp\\Html+Css\\23_Layout_using_Grid.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filecontent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening to port 80...");
})