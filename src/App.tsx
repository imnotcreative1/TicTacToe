import * as React from 'react';
import LocalGame from './components/LocalGame';
import ConnectedPlayersList from './components/ConnectedPlayersList';
import './App.css';
import UserAppInteractionState from './enums/UserAppInteractionState';
import User from './models/User';
import { connect, Store } from 'react-redux';
import { GlobalStore } from './models/models';

interface AppState {
  userStatus: UserAppInteractionState;
}

interface AppProps {
  username: string,
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
        <ConnectedPlayersList username={this.props.username}/>
        <LocalGame userStatus={this.state.userStatus} username={this.props.username}/>
      </div>
    );
  }
}

// tslint:disable-next-line
const mapStateToProps = (state: GlobalStore) => {
  return {
    username: state.username || '',
  }
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
