const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end("Hello, from web server without express!!");
    }
    else if (request.url === "/reports") {
        response.end("Here are the reports");
    }
    else if (request.url === "/data") {
        response.end("Data....");
    }
});

server.listen(4500, () => {
    console.log("Listening on the port 4500");
});



// ---------------------------------------------------------------------------------------------------- 

// Send Data from a file:
// We can also send other things as a response as well. 
// Let us try sending data which is inside a file as a response. 
// Create a text.txt with some dummy data inside it.

// const http = require("http");
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Hello, from web server without express!!");
//     }
//     else if (req.url === "/data") {
//         fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
//             if (err) {
//                 res.write("No data\n");
//                 res.end(err);
//             }
//             else {
//                 res.end(data);
//             }
//         });
//     }
// });

// server.listen(4500, () => {
//     console.log("Listening on the port 4500");
// });

// -------------------------------------------------------------------------------------------------- 


// What are headers? 
// ⇒ It just gives more information about the request or response. We also want to send a header as a response. This is just to specify what kind of response we are getting. 
// Let’s pass a header as well. 

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.setHeader("Content-type", "text/html")
//         //Header to specify that the response is in HTML form 
//         res.end("Hello Guys!!");
//     }
// });

// server.listen(4500, () => {
//     console.log("Listening on the port 4500");
// });
