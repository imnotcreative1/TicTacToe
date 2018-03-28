const io = require('socket.io')();

const MAX = 10000;

function generateUserID() {
    return Math.floor(Math.random() * MAX);
}

const listOfAllUsers = [];

io.on('connection', (client) => {
    client.on('subscribeToNewUsers', (username) => {
        client.join('the lobby', () => {
            io.to('the lobby').emit('newUser', listOfAllUsers);
        });
    });
    client.on('challengePlayer', (username) => {
       // TODO: find the client via their generate id
    });
    client.on('createUserRequest', (username) => {
        // create the user
        const randomID = generateUserID();
        listOfAllUsers.push({ username: username, userID: randomID});
        console.log('added a new user with a username of ', username);
        client.emit('createdUser', {username: username, userID: randomID});
        console.log('added a new User to the list of users');
        console.log(listOfAllUsers);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);