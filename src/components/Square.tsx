import * as React from 'react';
import './Square.css';

interface SquareProps {
  classNames: string[];
  squareClicked: (gridLocation: number) => void;
  symbol?: number;
  location?: number;
}

class Square extends React.Component<SquareProps> {
  render() {
    const positionClassNamesAsString = this.props.classNames.join(' ');

    return (
      <button
        className={`square-container ${positionClassNamesAsString}`}
        onClick={() => this.props.squareClicked(this.props.location || 0)}
      >
        {this.props.symbol}
      </button>
    );
  }
}

export default Square;