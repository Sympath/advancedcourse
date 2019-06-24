const http = require('http');
const fs = require('fs')

http.createServer((req,res)=>{
    console.log(req.body);
    if(req.url == '/formdata.html'){
        let data = fs.readFileSync('./formdata.html','utf8');
        res.write(data);
        res.end()
    }
    res.end()
}).listen(8080)