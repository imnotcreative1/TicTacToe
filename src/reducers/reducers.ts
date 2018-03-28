import { combineReducers } from 'redux';
import { CREATE_GAME, CREATE_USER } from '../actions/actions';
import { GlobalStore } from '../models/models';

export function reducer(state: GlobalStore = {}, action: any) {
  switch (action.type) {
    case CREATE_USER:
      return { user: { id: action.user.id, username: action.user.username } };
    case CREATE_GAME:
      return { game: action.user };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;