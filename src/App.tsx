import * as React from 'react';
import './App.css';

import GameState from './GameState';
import Board from './components/Board';

const DEFAULT_BOARD_SIZE = 4;
const DEFAULT_DEPTH = 4;

interface AppState {
  turn: 'Player1' | 'Player2';
  grid: number[];
  gameStatus: number;
  lastSelectedSquare: number;
  boardSize: number;
  depth: number;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {

  private static createEmptyGrid(boardSize: number = DEFAULT_BOARD_SIZE) {
    const grid = [];
    for (let i = 0; i < boardSize * boardSize; i++) {
      grid.push(0);
    }
    return grid;
  }

  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      turn: 'Player1',
      grid: App.createEmptyGrid(),
      gameStatus: 0,
      lastSelectedSquare: 0,
      boardSize: DEFAULT_BOARD_SIZE,
      depth: DEFAULT_DEPTH,
    };

    this.squareClicked = this.squareClicked.bind(this);
  }

  componentDidUpdate(previousProps: AppProps, previousState: AppState) {
    if (previousState.turn !== this.state.turn) {
      const gameState =
        new GameState(this.state.grid, this.state.lastSelectedSquare, this.state.boardSize, this.state.depth);
      this.setState({
        gameStatus: gameState.getStatus(),
      });
    }
  }

  squareClicked = (gridLocation: number) => {
    const previousGrid = this.state.grid.slice();
    previousGrid[gridLocation] = this.state.turn === 'Player1' ? 1 : 2;
    const turn = this.state.turn === 'Player1' ? 'Player2' : 'Player1';
    this.setState({
      turn,
      grid: previousGrid,
      lastSelectedSquare: gridLocation,
    });
  }

  render() {
    const { gameStatus } = this.state;
    // tslint:disable-next-line
    // console.log(new GameState(this.state.grid, this.state.lastSelectedSquare, this.state.boardSize, this.state.depth).getStatus());
    return (
      <div className="App">
        <div className="state-description-row">
          {gameStatus === 0 ? `${this.state.turn}'s turn` : `Player${gameStatus} wins`}
        </div>
        <Board grid={this.state.grid} squareClicked={this.squareClicked} boardSize={this.state.boardSize}/>
      </div>
    );
  }
}

export default App;
