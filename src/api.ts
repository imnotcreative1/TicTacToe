import * as io from 'socket.io-client';
const socket = io('http://localhost:8000');

function subscribeToNewUser(setNewUser: (user: string) => void) {
  socket.on('newUser', (newUser: string) => setNewUser(newUser));
  socket.emit('subscribeToNewUser');
}

export { subscribeToNewUser };