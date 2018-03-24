const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToNewUser', () => {
        console.log('client is subscribing to a new user');
        client.emit('newUser', 'New User\'s Name');
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);