const http = require("http");
const express = require("express");

const app = express();

//creates a http server using the express app
const server = http.createServer(app);

app.use("/", express.static(__dirname + "/public"));

server.listen(3355, () => {
  console.log("Server started successfully at http://localhost:3355");
});
