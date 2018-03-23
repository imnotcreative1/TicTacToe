import * as React from 'react';
import './Square.css';

interface SquareProps {
   // classNames: string[];
  squareClicked: (gridLocation: number) => void;
  symbol: number;
  location: number;
}

class Square extends React.Component<SquareProps> {
  static numberToSymbol(symbol: number) {
    switch (symbol) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return '';
    }
  }

  render() {
    // const positionClassNamesAsString = this.props.classNames.join(' ');

    return (
      <button
        className={`square-container`}
        onClick={() => this.props.squareClicked(this.props.location || 0)}
      >
        {Square.numberToSymbol(this.props.symbol)}
      </button>
    );
  }
}

export default Square;