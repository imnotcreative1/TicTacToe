import * as React from 'react';
import LocalGame from './components/LocalGame';
import ConnectedPlayersList from './components/ConnectedPlayersList';
import './App.css';
import UserAppInteractionState from './enums/UserAppInteractionState';
import User from './models/User';
import Login from './components/Login';

interface AppState {
  userStatus: UserAppInteractionState;
  user?: User;
}

interface AppProps {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      userStatus: UserAppInteractionState.InLobby, // user this later as heading where a player's turn is normally shown
    };
  }

  render() {
    return (
      <div className="App">
        <Login/>
        <ConnectedPlayersList/>
        <LocalGame/>
      </div>
    );
  }
}

export default App;
