import * as React from 'react';
import './ConnectedPlayersList.css';
import { subscribeToNewUsers } from '../api';
import ConnectedPlayerRowInList from './ConnectedPlayerRowInList';
import { createGame } from '../actions/actions';
import User from '../models/User';

interface ConnectedPlayersListProps {
  username: string;
}

interface ConnectedPlayersListState {
  connectedUsers: User[];
}

class ConnectedPlayersList extends React.Component<ConnectedPlayersListProps, ConnectedPlayersListState> {

  constructor(props: ConnectedPlayersListProps, state: ConnectedPlayersListState) {
    super(props, state);

    this.state = {
      connectedUsers: [],
    };

    this.setUsers = this.setUsers.bind(this);
  }

  componentWillMount() {
    // tslint:disable-next-line
    console.log('subscribing to new user');
    subscribeToNewUsers(this.props.username, this.setUsers);
  }

  setUsers = (users: User[]) => {
    // tslint:disable-next-line
    console.log('tried to add new user');
    this.setState({
      connectedUsers: users,
    });
  }

  handleChallengeResponse = (response: string, user: User) => {
    if (response === 'accepted') {
      createGame(user);
    }
  }

  render() {
    return (
     <div className="connected-player-list-container">
       <div className="title"> Connected Players </div>
       <div className="list">
         {this.state.connectedUsers.map((connectedUser: User) => {
           return (
             <ConnectedPlayerRowInList
               user={connectedUser}
               key={Math.floor(Math.random() * 10000)}
               handleChallengeResponse={this.handleChallengeResponse}
             />
           );
         })}
       </div>
     </div>
    );
  }
}

// TODO: uncomment, implement, and test
// const mapDispatchToProps = (dispatch: Dispatch<any>) => {
//   return { createGame: (user: User) => dispatch(createGame(user)) }
// };

export default ConnectedPlayersList;