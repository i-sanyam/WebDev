const http = require("http");
const express = require("express");

const app = express();

const socketio = require("socket.io");

//creates a http server using the express app - same as app.listen()
const server = http.createServer(app);

/**
 * WITHOUT passing the server into the socketio function,
 * socket.io.js file is not included in our code, and we
 * lose functionality provided by Socket.IO
 * TIP: try commenting out "const io = socketio(server)" and then run the server
 */

const io = socketio(server);
let map = {
  "foo" : "$1231"
};

io.on('connection', (socket) => {
  // console.log("user connected with socket id: " + socket.id);
  socket.on('user_login', (user) => {
    if (map[user.username] && map[user.username] != user.password) {
      socket.emit('login_failed');
      console.log('fail');
      return;
    }
    socket.join(user.username);
    map[user.username] = user.password;
    console.log(map);
    console.log(socket.id + " is " + user.username);
    socket.emit('logged_in');
  });

  // on send message
  socket.on('chat_message', (data) => {
    // console.log(data.msg + " received from " + socket.id);
    // socket.emit('sent_ack', data); // sends only to this socket
    io.to(data.from).emit('sent_ack', data);
    if (!data.to) return;
    socket.to(data.to).emit('received_message', data);
  })
})

app.use("/", express.static(__dirname + "/public"));

server.listen(3355, () => {
  console.log("Server started successfully at http://localhost:3355");
});
