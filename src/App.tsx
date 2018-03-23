import * as React from 'react';
import './App.css';

import GameState from './GameState';
import Board from './components/Board';

interface AppState {
  turn: 'Player1' | 'Player2';
  grid: number[];
  gameStatus: number;
  lastSelectedSquare: number;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      turn: 'Player1',
      grid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gameStatus: 0,
      lastSelectedSquare: 0,
    };

    this.squareClicked = this.squareClicked.bind(this);
  }

  componentDidUpdate(previousProps: AppProps, previousState: AppState) {
    if (previousState.turn !== this.state.turn) {
      const gameState = new GameState(this.state.grid, this.state.lastSelectedSquare);
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
    console.log('Game state is ', new GameState(this.state.grid, this.state.lastSelectedSquare).getStatus());
    return (
      <div className="App">
        <div className="state-description-row">
          {gameStatus === 0 ? `${this.state.turn}'s turn` : `Player${gameStatus} wins`}
        </div>
        <Board grid={this.state.grid} squareClicked={this.squareClicked}/>
      </div>
    );
  }
}

export default App;
