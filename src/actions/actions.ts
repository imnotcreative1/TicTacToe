import User from '../models/User';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_GAME = 'CREATE_GAME';

export function createUser(user: User) {
  return {
    type: CREATE_USER,
    user,
  };
}

export function createGame(user: User) {
  return {
    type: CREATE_GAME,
    user,
  };
}