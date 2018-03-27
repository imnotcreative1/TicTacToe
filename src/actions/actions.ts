import User from '../models/User';

export const CREATE_USER = 'CREATE_USER';

export function createUser(user: User) {
  return {
    type: CREATE_USER,
    user,
  };
}