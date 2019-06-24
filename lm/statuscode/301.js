const http = require('http');

let server =  http.createServer((req,res)=>{
    res.writeHeader(301,{
        'Location': 'http://itbilu.com/'
    });
    console.log("===",res._header);
    
    res.end()
})
server.listen(8080)