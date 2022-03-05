const http = require('http');

const PORT = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
});

server.listen(PORT, 'localhost', (error) => {
    console.log('ok!')
});