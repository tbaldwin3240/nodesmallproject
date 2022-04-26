/* Part 3 Create a "hello world" server using the http module 
that starts a server and returns plain text.*/

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type" , text/plan);
    res.end("Hello World");
});
    server.listen(port, hostname, () =>{
        console.log('Server running at http://${hostname}:${port}/');
    });