import * as React from 'react';
import './LocalGame.css';

import GameState from '../GameState';
import Board from '../components/Board';
import PlayerIdentifier from '../enums/PlayerIdentifier';
import GameStatus from '../enums/GameStatus';
import Symbol from '../enums/Symbol';
import UserAppInteractionState from '../enums/UserAppInteractionState';
import GameHeader from './GameHeader';

const DEFAULT_BOARD_SIZE = 3;
const DEFAULT_DEPTH = 3;

interface LocalGameState {
  turn: PlayerIdentifier;
  grid: number[];
  gameStatus: GameStatus;
  boardSize: number; // side size not total squares
  depth: number; // how many "O"s or "X"s a player needs to connected to win
}

interface LocalGameProps {
  userStatus: UserAppInteractionState;
  username: string;
}

class LocalGame extends React.Component<LocalGameProps, LocalGameState> {

  private static createEmptyGrid(boardSize: number = DEFAULT_BOARD_SIZE) {
    const grid = [];
    for (let i = 0; i < boardSize * boardSize; i++) {
      grid.push(Symbol.Empty);
    }
    return grid;
  }

  constructor(props: LocalGameProps, state: LocalGameState) {
    super(props, state);

    this.state = {
      turn: PlayerIdentifier.Player1,
      grid: LocalGame.createEmptyGrid(),
      gameStatus: GameStatus.InProgress,
      boardSize: DEFAULT_BOARD_SIZE,
      depth: DEFAULT_DEPTH,
    };

    this.squareClicked = this.squareClicked.bind(this);
  }

  squareClicked = (gridLocation: number) => {
    const {grid, turn, boardSize, depth} = this.state;
    const previousGrid = grid.slice();
    previousGrid[gridLocation] = turn === PlayerIdentifier.Player1 ? Symbol.X : Symbol.O;
    const nextTurn = turn === PlayerIdentifier.Player1 ? PlayerIdentifier.Player2 : PlayerIdentifier.Player1;
    const gameState = new GameState(previousGrid, gridLocation, boardSize, depth);
    const gameStatus = gameState.getStatus();
    this.setState({
      turn: nextTurn,
      grid: previousGrid,
      gameStatus,
    });
  }

  render() {
    const {boardSize, turn, grid} = this.state;
    return (
      <div className="LocalGame">
        <div className="state-description-row">
          <GameHeader userStatus={this.props.userStatus} playerTurn={turn}/>
        </div>
        <Board grid={grid} squareClicked={this.squareClicked} boardSize={boardSize}/>
      </div>
    );
  }
}

export default LocalGame;
