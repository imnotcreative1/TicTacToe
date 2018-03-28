import * as React from 'react';
import { challengePlayer } from '../api';
import './ConnectedPlayerRowInList.css';
import User from '../models/User';

interface ConnectedPlayerRowInListProps {
  user: User;
  handleChallengeResponse: (response: string, user: User) => void;
  key?: number; // unused props needed to satisfy a map
}

class ConnectedPlayerRowInList extends React.Component<ConnectedPlayerRowInListProps> {
  render() {
    return (
      <div className="row">
        {this.props.user.getUsername()}
        <button onClick={() => challengePlayer(this.props.user, this.props.handleChallengeResponse)}>
          Face
        </button>
      </div>
    );
  }
}

export default ConnectedPlayerRowInList;