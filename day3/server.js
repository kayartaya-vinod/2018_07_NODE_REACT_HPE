const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(3000, () => console.log('Server started!'));
app.use(express.static('public'));

// serverside handle for incoming connection
const io = socket(server);

io.on('connection', socket => {
    console.log('Got a connection!');

    socket.on('disconnect', () => {
        console.log('A socket got closed');
    });

    socket.on('chat', data => {
        io.sockets.emit('messages', data);
        socket.broadcast.emit('user_typing', '');
    });
    
    socket.on('user_typing', data=>{
        socket.broadcast.emit('user_typing', 
        '<em>' + data.username + ' is typing...</em>');
    })
});