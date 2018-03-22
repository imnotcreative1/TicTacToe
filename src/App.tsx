import * as React from 'react';
import './App.css';
import Square from './components/Square';
import isgameover from './isgameover';

interface AppState {
  turn: 'Player1' | 'Player2';
  grid: number[];
  gameStatus: number;
}

interface AppProps {
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      turn: 'Player1',
      grid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      gameStatus: 0,
    };

    this.squareClicked = this.squareClicked.bind(this);
  }

  componentDidUpdate(previousProps: AppProps, previousState: AppState) {
    if (previousState.turn !== this.state.turn) {
      this.setState({
        gameStatus: isgameover(this.state.grid),
      });
    }
  }

  squareClicked = (gridLocation: number) => {
    // TODO: verify the click was valid
    const previousGrid = this.state.grid.slice();
    previousGrid[gridLocation] = this.state.turn === 'Player1' ? 1 : 2;
    const turn = this.state.turn === 'Player1' ? 'Player2' : 'Player1';
    this.setState({
      turn,
      grid: previousGrid,
    });
  }

  render() {
    const { gameStatus } = this.state;
    return (
      <div className="App">
        <div className="state-description-row">
          {gameStatus === 0 ? this.state.turn : `Player${gameStatus} wins`}
        </div>
        <div className="board-container">
          <div className="board-row">
            <Square
              classNames={['top', 'left']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[0]}
              location={0}
            />
            <Square
              classNames={['top', 'center']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[1]}
              location={1}
            />
            <Square
              classNames={['top', 'right']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[2]}
              location={2}
            />
          </div>
          <div className="board-row">
            <Square
              classNames={['middle', 'left']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[3]}
              location={3}
            />
            <Square
              classNames={['middle', 'center']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[4]}
              location={4}
            />
            <Square
              classNames={['middle', 'right']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[5]}
              location={5}
            />
          </div>
          <div className="board-row">
            <Square
              classNames={['bottom', 'left']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[6]}
              location={6}
            />
            <Square
              classNames={['bottom', 'center']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[7]}
              location={7}
            />
            <Square
              classNames={['bottom', 'right']}
              squareClicked={this.squareClicked}
              symbol={this.state.grid[8]}
              location={8}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
