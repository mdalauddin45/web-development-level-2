// Import the http module
const http = require("http");
const fs = require("fs");
// Create the server
const server = http.createServer();

// Listener for incoming requests
server.on("request", (req, res) => {
  if (req.url == "/read-file" && req.method == "GET") {
    const readableStream = fs.createReadStream("./texts/read.txt");
    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });
    readableStream.on("end", () => {
      res.end("Hello from world!");
    });
  }
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
