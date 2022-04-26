/* Part 1 Run node in the terminal and console.log()
the string "Hello World."*/

//console.log("Hello World !")

/* Part 2 Create an index.js file, and have it console.log() the string "Hello World, I am in Node."
Run node and execute the file.*/

//console.log("Hello World, I am in Node")

//* Create a "hello world" server using the http module that starts a server and returns plain text.*/

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

    // Part 4 Print out the version of npm that you have installed

    /* Part 5 Create a new folder called 
    cowsay-practice and initialize npm */

//var cowsay = require("cowsay")

//console.log(cowsay.say({text: "I'm a module"}))


