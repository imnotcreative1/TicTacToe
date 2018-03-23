import * as React from 'react';
import './App.css';

import GameState from './GameState';
import Board from './components/Board';
import PlayerIdentifier from './enums/PlayerIdentifier';
import GameStatus from './enums/GameStatus';
import Symbol from './enums/Symbol';

const DEFAULT_BOARD_SIZE = 5;
const DEFAULT_DEPTH = 3;

interface AppState {
  turn: PlayerIdentifier;
  grid: number[];
  gameStatus: GameStatus;
  boardSize: number; // side size not total squares
  depth: number; // how many "O"s or "X"s a player needs to connected to win
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {

  private static createEmptyGrid(boardSize: number = DEFAULT_BOARD_SIZE) {
    const grid = [];
    for (let i = 0; i < boardSize * boardSize; i++) {
      grid.push(Symbol.Empty);
    }
    return grid;
  }

  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      turn: PlayerIdentifier.Player1,
      grid: App.createEmptyGrid(),
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
    const {boardSize, gameStatus, turn, grid} = this.state;
    return (
      <div className="App">
        <div className="state-description-row">
          {gameStatus === GameStatus.InProgress ? `${PlayerIdentifier[turn]}'s turn` : `${GameStatus[gameStatus]}`}
        </div>
        <Board grid={grid} squareClicked={this.squareClicked} boardSize={boardSize}/>
      </div>
    );
  }
}

export default App;
