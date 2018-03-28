const io = require('socket.io')();

const MAX = 10000;

function generateUserID() {
    return Math.floor(Math.random() * MAX);
}

const listOfAllUsers = [];

io.on('connection', (client) => {
    client.on('subscribeToNewUser', (username) => {
        client.join('the only room', () => {
            io.to('the only room').emit('newUser', { username: username, userID: 1});
        });
    });
    client.on('challengePlayer', (username) => {
       // TODO: find the client via their generate id
    });
    client.on('createUserRequest', (username) => {
        const randomID = generateUserID();
        listOfAllUsers.push({ username: username, userID: randomID});
        console.log('added a new user with a username of ', username);
        client.emit('createdUser', {username: username, userID: randomID});
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);