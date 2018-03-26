const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToNewUser', () => {
        console.log('client is subscribing to a new user');
        client.join('the only room', () => {
            // TODO: emit all the current users for display
            io.to('the only room').emit('newUser', 'A User');
        });
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);