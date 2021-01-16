const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server); //setup socket ==> make the server to support socket

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('you made a connection');

  socket.on('join', ({ name, room }) => {
    //we can execute a callback function after the join event
    //been targeted , it can be an error handler
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('you lefted ?>?');
  });
});
