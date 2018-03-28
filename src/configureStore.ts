import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import { GlobalStore } from './models/models';

// TODO: enable the redux dev tools

export default function configureStore(preloadedState: GlobalStore) {
  return createStore(
    rootReducer,
    preloadedState,
    // TODO: (internet) figure out how to bypass this
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}