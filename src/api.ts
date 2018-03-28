import * as io from 'socket.io-client';
import User from './models/User';
const socket = io('http://localhost:8000');

function firstCreateUser(username: string, getUser: (username: string, userID: number) => void) {
  socket.on('createdUser', (user: {username: string, userID: number}) => {
    getUser(user.username, user.userID);
  });
  socket.emit('createUserRequest', username);
}

function subscribeToNewUsers(username: string, setUsers: (users: User[]) => void) {
  socket.on('newUser', (users: User[]) => setUsers(users));
  socket.emit('subscribeToNewUsers', username);
}

function challengePlayer(user: User, handleChallengeResponse: (response: string, user: User) => void) {
  socket.on('challengeAnswered', (response: string, challengedUser: User) =>
    handleChallengeResponse(response, challengedUser));
  socket.emit('challengePlayer', user);
}

export { subscribeToNewUsers, challengePlayer, firstCreateUser };