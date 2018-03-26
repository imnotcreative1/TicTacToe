import * as React from 'react';
import './ConnectedPlayersList.css';
import { subscribeToNewUser } from '../api';
import ConnectedPlayerRowInList from './ConnectedPlayerRowInList';

interface ConnectedPlayersListProps {}

interface ConnectedPlayersListState {
  connectedUsers: string[];
}

class ConnectedPlayersList extends React.Component<ConnectedPlayersListProps, ConnectedPlayersListState> {

  constructor(props: ConnectedPlayersListProps, state: ConnectedPlayersListState) {
    super(props, state);

    this.state = {
      connectedUsers: [],
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
    let previousListOfUsers: string[] = this.state.connectedUsers;
    this.setState({
      connectedUsers: (previousListOfUsers as string[]).concat([newUser]),
    });
  }

  render() {

    return (
     <div className="connected-player-list-container">
       <div className="title"> Connected Players </div>
       <div className="list">
         {this.state.connectedUsers.map((connectedUser: string) => {
           return (
             <ConnectedPlayerRowInList user={connectedUser} key={connectedUser}/>
           );
         })}
       </div>
     </div>
    );
  }
}

export default ConnectedPlayersList;