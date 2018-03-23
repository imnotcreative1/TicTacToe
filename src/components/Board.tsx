import * as React from 'react';
import Square from './Square';

interface BoardProps {
  grid: number[];
  squareClicked: (gridLocation: number) => void;
}

class Board extends React.Component<BoardProps> {

  private static getSquares(startLocation: number, endLocation: number, boardProps: BoardProps): JSX.Element[] {
    const nineSquares: JSX.Element[] = [];
    for (let squareLocation = startLocation; squareLocation < endLocation; squareLocation++) {
      nineSquares.push(
        <Square
          classNames={Board.getPositionClassNamesForASquare(squareLocation)}
          squareClicked={boardProps.squareClicked}
          symbol={boardProps.grid[squareLocation]}
          location={squareLocation}
          key={squareLocation}
        />
      );
    }
    return nineSquares;
  }

  private static getPositionClassNamesForASquare(squareLocation: number): [string, string] {
    const classNameMap: { [key: number]: [string, string] } = {
      0: ['top', 'left'],
      1: ['top', 'center'],
      2: ['top', 'right'],
      3: ['middle', 'left'],
      4: ['middle', 'center'],
      5: ['middle', 'right'],
      6: ['bottom', 'left'],
      7: ['bottom', 'center'],
      8: ['bottom', 'right'],
    };
    return classNameMap[squareLocation];
  }
  render() {
    return (
      <div className="board-container">
        <div className="board-row">
          {Board.getSquares(0, 3, this.props)}
        </div>
        <div className="board-row">
          {Board.getSquares(3, 6, this.props)}
        </div>
        <div className="board-row">
          {Board.getSquares(6, 9, this.props)}
        </div>
      </div>
    );
  }
}

export default Board;