const http = require('http');

let server = http.createServer((req, res) => {
    // res.writeHeader(301, {
    //     'Location': 'http://itbilu.com/'
    // });
    res.statusCode = 200;
    console.log("===", res._header);
    res.write('Hello World')
    res.end()
})
server.listen(8080)