import * as React from 'react';
import LocalGame from './components/LocalGame';
import ConnectedPlayersList from './components/ConnectedPlayersList';
import { subscribeToNewUser } from './api';
import './App.css';

interface AppState {
  users: string[];
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    // tslint:disable-next-line
    console.log('subscribing to new user');
    subscribeToNewUser((newUser: string) => this.setState({
      users: [newUser],
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.users}
        <ConnectedPlayersList/>
        <LocalGame/>
      </div>
    );
  }
}

export default App;
