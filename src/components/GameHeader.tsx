import * as React from 'react';
import UserAppInteractionState from '../enums/UserAppInteractionState';
import PlayerIdentifier from '../enums/PlayerIdentifier';

interface GameHeaderProps {
  userStatus: UserAppInteractionState;
  playerTurn?: number;
}

class GameHeader extends React.Component<GameHeaderProps> {

  getHeaderContent(userStatus: UserAppInteractionState, playerTurn: number) {
    switch (userStatus) {
      case UserAppInteractionState.InLobby:
        return 'In Lobby';
      case UserAppInteractionState.InGame:
        return `${PlayerIdentifier[playerTurn]}\'s turn`;
      case UserAppInteractionState.WaitingForChallengeResponse:
        return 'In Lobby, waiting for response';
      default:
        return 'Don\'t know what you\'re doing';
    }
  }
  render() {
    return (
      <div className="game-header-container">
        {this.getHeaderContent(this.props.userStatus, this.props.playerTurn || 0)}
      </div>
    );
  }
}

export default GameHeader;