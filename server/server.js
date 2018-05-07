const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer((app));
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.from,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', (socket) => {
        console.log('Client Disconnected');
    });
});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server running is up on port ${port}`);
});


