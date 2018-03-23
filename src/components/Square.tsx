import * as React from 'react';
import './Square.css';
import Symbol from './../enums/Symbol';

interface SquareProps {
  squareClicked: (gridLocation: number) => void;
  symbol: number;
  location: number;
}

class Square extends React.Component<SquareProps> {
  render() {
    const { symbol } = this.props;
    return (
      <button
        className={'square-container'}
        onClick={() => this.props.squareClicked(this.props.location)}
      >
        {symbol === Symbol.Empty ? '' : Symbol[symbol]}
      </button>
    );
  }
}

export default Square;