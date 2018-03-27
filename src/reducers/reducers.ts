import { combineReducers } from 'redux';
import { CREATE_USER } from '../actions/actions';

// tslint:disable-next-line
export function userReducer(state = {}, action: any) {
  switch (action.type) {
    case CREATE_USER:
      return { user: action.user.id};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;