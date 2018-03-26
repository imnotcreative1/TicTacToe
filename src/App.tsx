import * as React from 'react';
import LocalGame from './components/LocalGame';
import ConnectedPlayersList from './components/ConnectedPlayersList';
import './App.css';
import UserAppInteractionState from './enums/UserAppInteractionState';

interface AppState {
  userStatus: UserAppInteractionState;
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
        <ConnectedPlayersList/>
        <LocalGame/>
      </div>
    );
  }
}

export default App;
