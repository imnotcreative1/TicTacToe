import * as React from 'react';
import Square from './Square';

interface BoardProps {
  grid: number[];
  boardSize: number;
  squareClicked: (gridLocation: number) => void;
}

class Board extends React.Component<BoardProps> {

  private static getSquares(startLocation: number, endLocation: number, boardProps: BoardProps): JSX.Element[] {
    const nineSquares: JSX.Element[] = [];
    for (let squareLocation = startLocation; squareLocation < endLocation; squareLocation++) {
      nineSquares.push(
        <Square
          squareClicked={boardProps.squareClicked}
          symbol={boardProps.grid[squareLocation]}
          location={squareLocation}
          key={squareLocation}
        />
      );
    }
    return nineSquares;
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

  // TODO: make this work for any number of squares
  // private static getPositionClassNamesForASquare(squareLocation: number): [string, string] {
  //   const classNameMap: { [key: number]: [string, string] } = {
  //     0: ['top', 'left'],
  //     1: ['top', 'center'],
  //     2: ['top', 'right'],
  //     3: ['middle', 'left'],
  //     4: ['middle', 'center'],
  //     5: ['middle', 'right'],
  //     6: ['bottom', 'left'],
  //     7: ['bottom', 'center'],
  //     8: ['bottom', 'right'],
  //   };
  //   return classNameMap[squareLocation];
  // }

  render() {
    return (
      <div className="board-container">
        {Board.getRowsOfSquares(this.props)}
      </div>
    );
  }
}

export default Board;