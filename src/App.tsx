import * as React from 'react';
import LocalGame from './components/LocalGame';
import ConnectedPlayersList from './components/ConnectedPlayersList';
import { subscribeToNewUser } from './api';
import './App.css';

interface AppState {
  users: string[];
  numberOfUsersConnected: number;
}

interface AppProps {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      users: [],
      numberOfUsersConnected: 0,
    };

    this.addNewUser = this.addNewUser.bind(this);
  }

  componentWillMount() {
    // tslint:disable-next-line
    console.log('subscribing to new user');
    subscribeToNewUser(this.addNewUser);
  }

  addNewUser = (newUser: string) => {
    // tslint:disable-next-line
    console.log('tried to add new user');
    let previousListOfUsers: string[] = this.state.users;
    let previousNumberOfUsersConnected = this.state.numberOfUsersConnected;
    this.setState({
      users: (previousListOfUsers as string[]).concat([newUser]),
      numberOfUsersConnected: previousNumberOfUsersConnected + 1,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.numberOfUsersConnected}
        {this.state.users}
        <ConnectedPlayersList/>
        <LocalGame/>
      </div>
    );
  }
}

export default App;
