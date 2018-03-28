import * as io from 'socket.io-client';
import User from './models/User';
const socket = io('http://localhost:8000');

function firstCreateUser(username: string, getUser: (username: string, userID: number) => void) {
  socket.on('createdUser', (user: {username: string, userID: number}) => {
    console.log('created user');
    getUser(user.username, user.userID)
  });
  socket.emit('createUserRequest', username);
}

function subscribeToNewUser(username: string, setNewUser: (user: User) => void) {
  socket.on('newUser', (newUser: User) => setNewUser(newUser));
  socket.emit('subscribeToNewUser', username);
}

function challengePlayer(user: User, handleChallengeResponse: (response: string, user: User) => void) {
  socket.on('challengeAnswered',
    (response: string, user: User) => handleChallengeResponse(response, user));
  socket.emit('challengePlayer', user);
}

export { subscribeToNewUser, challengePlayer, firstCreateUser };