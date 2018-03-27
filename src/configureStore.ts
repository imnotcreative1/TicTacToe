import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import { Store } from './models/models';

export default function configureStore(preloadedState: Store) {
  return createStore(
    rootReducer,
    preloadedState,
  );
}