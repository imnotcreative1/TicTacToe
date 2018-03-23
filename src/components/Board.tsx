import * as React from 'react';
import Square from './Square';

interface BoardProps {
  grid: number[];
  boardSize: number;
  squareClicked: (gridLocation: number) => void;
}

class Board extends React.Component<BoardProps> {

  private static getSquares(startLocation: number, endLocation: number, boardProps: BoardProps): JSX.Element[] {
    const squares: JSX.Element[] = [];
    for (let squareLocation = startLocation; squareLocation < endLocation; squareLocation++) {
      squares.push(
        <Square
          squareClicked={boardProps.squareClicked}
          symbol={boardProps.grid[squareLocation]}
          location={squareLocation}
          key={squareLocation}
        />
      );
    }
    return squares;
  }

  private static getRowsOfSquares(boardProps: BoardProps): JSX.Element[] {
    const rows: JSX.Element[] = [];
    const boardSize = boardProps.boardSize;
    for (let i = 0; i < boardSize; i++) {
      rows.push(
        (
          <div className="board-row" key={i}>
          {Board.getSquares(i * boardSize, (i + 1) * boardSize, boardProps)}
        </div>
        ));
    }
    return rows;
  }

  render() {
    return (
      <div className="board-container">
        {Board.getRowsOfSquares(this.props)}
      </div>
    );
  }
}

export default Board;