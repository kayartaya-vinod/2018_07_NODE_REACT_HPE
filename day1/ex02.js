const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const server = http.createServer((req, resp) => {
    console.log('Someone accessed the URL', req.url);
    if (req.url === '/hello.html') {
        fs.readFile(path.join(__dirname, 'hello.html'), 'utf-8', (err, content) => {
            if (!err) {
                resp.end(content);
            }
            else {
                resp.end('There was an error!' + err);
            }
        })
    }
    else {
        resp.end('Hello, world!');
    }
});

server.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
});

console.log('End of ex02.js');