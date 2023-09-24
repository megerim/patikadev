const http = require('http');

const server = http.createServer((req, res) => {
    console.log('istek gonderildi');
    res.write('Hello World');
    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Port ${port}`);
});