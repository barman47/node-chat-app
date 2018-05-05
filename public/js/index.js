var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        to: 'nomsouzoanya@yahoo.co.uk',
        text: 'Hey this is Oge, it\'s from the client'
    });
});

socket.on('newMessage', function (message) {
    console.log('New Message: ', message);
});

socket.on('disconnect', function () {
    console.log('Disconnected from Server');
});

