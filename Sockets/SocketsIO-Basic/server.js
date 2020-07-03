const http = require("http");
const express = require("express");

const app = express();

const socketio = require("socket.io");

//creates a http server using the express app
const server = http.createServer(app);

/**
 * WITHOUT passing the server into the socketio function,
 * socket.io.js file is not included in our code, and we
 * lose functionality provided by Socket.IO
 * TIP: try commenting out "const io = socketio(server)" and then run the server
 */

const io = socketio(server);

//***************************** */

app.use("/", express.static(__dirname + "/public"));

server.listen(3355, () => {
  console.log("Server started successfully at http://localhost:3355");
});
