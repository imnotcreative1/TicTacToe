import * as React from 'react';
import './ConnectedPlayersList.css';
import { subscribeToNewUser } from '../api';
import ConnectedPlayerRowInList from './ConnectedPlayerRowInList';
import { Dispatch } from 'react-redux';
import { createGame } from '../actions/actions';
import User from '../models/User';

interface ConnectedPlayersListProps {
  username: string,
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

    this.addNewUser = this.addNewUser.bind(this);
  }

  componentWillMount() {
    // tslint:disable-next-line
    console.log('subscribing to new user');
    subscribeToNewUser(this.props.username, this.addNewUser);
  }

  addNewUser = (newUser: User) => {
    // tslint:disable-next-line
    console.log('tried to add new user');
    debugger;
    let previousListOfUsers: User[] = this.state.connectedUsers;
    this.setState({
      connectedUsers: (previousListOfUsers as User[]).concat([newUser]),
    });
  };

  handleChallengeResponse = (response: string, user: User) => {
    if (response === 'accepted') {
      createGame(user);
    }
  };

  render() {
    // tslint:disable-next-line
    debugger;
    return (
     <div className="connected-player-list-container">
       Empty
       {/*<div className="title"> Connected Players </div>*/}
       {/*<div className="list">*/}
         {/*{this.state.connectedUsers.map((connectedUser: User) => {*/}
           {/*return (*/}
             {/*<ConnectedPlayerRowInList*/}
               {/*user={connectedUser}*/}
               {/*key={Math.random()}*/}
               {/*handleChallengeResponse={this.handleChallengeResponse}*/}
             {/*/>*/}
           {/*);*/}
         {/*})}*/}
       {/*</div>*/}
     </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return { createGame:(user: User) => dispatch(createGame(user)) }
};

export default ConnectedPlayersList;