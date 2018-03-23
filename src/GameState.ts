type movementDirection = {
  horizontal: number,
  vertical: number,
  diagonalDownRight: number,
  diagonalDownLeft: number,
};

class GameState {

  private grid: number[];
  private startingSquareLocation: number;
  private movementValue: movementDirection;
  private boardSize: number;

  private static createMovementObject(boardSize: number): movementDirection {
    return {
      horizontal: 1,
      diagonalDownLeft: boardSize - 1,
      vertical: boardSize,
      diagonalDownRight: boardSize + 1,
    };
  }

  constructor(grid: number[], index: number, boardSize: number) {
    this.grid = grid;
    this.startingSquareLocation = index;
    this.movementValue = GameState.createMovementObject(boardSize);
    this.boardSize = boardSize;
  }

  getStatus = (): number => {
    const horizontalDepth = this.gameStatusForAMovement(this.movementValue.horizontal);
    if (horizontalDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    const verticalDepth = this.gameStatusForAMovement(this.movementValue.vertical);
    if (verticalDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    const diagonalDownRightDepth = this.gameStatusForAMovement(this.movementValue.diagonalDownRight);
    if (diagonalDownRightDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    const diagonalDownLeftDepth = this.gameStatusForAMovement(this.movementValue.diagonalDownLeft);
    if (diagonalDownLeftDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    return 0;
  }

  private gameStatusForAMovement(movement: number): number {
    const posMove =  this.gameStatusHelper(this.startingSquareLocation, movement, 1);
    const negMove = this.gameStatusHelper(this.startingSquareLocation, -movement, 0);
    return posMove + negMove;
  }

  private gameStatusHelper(index: number, movement: number, depth: number): number {
    const grid = this.grid;
    const squareValue = grid[index];

    if (squareValue === 0) {
      return 0;
    } else if (this.isMovementAllowed(index, movement) && squareValue === grid[index + movement]) {
      if (depth + 1 === 3) {
        return 3;
      }
      return this.gameStatusHelper(index + movement, movement, depth + 1);
    }
    return depth;
  }

  private isMovementAllowed(index: number, movement: number) {
    const canMoveUp = index > this.boardSize - 1;
    const canMoveDown = index < this.boardSize * this.boardSize - this.boardSize;
    const canMoveLeft = index % this.boardSize !== 0;
    const canMoveRight = index % this.boardSize !== this.boardSize - 1;

    switch (movement) {
      case this.movementValue.horizontal:
        if (canMoveRight) {
          return true;
        }
        break;
      case -1 * this.movementValue.horizontal:
        if (canMoveLeft) {
          return true;
        }
        break;
      case this.movementValue.vertical:
        if (canMoveDown) {
          return true;
        }
        break;
      case -1 * this.movementValue.vertical:
        if (!canMoveUp) {
          return true;
        }
        break;
      case this.movementValue.diagonalDownRight:
        if (canMoveDown && canMoveRight) {
          return true;
        }
        break;
      case -1 * this.movementValue.diagonalDownRight:
        if (canMoveUp && canMoveLeft) {
          return true;
        }
        break;
      case this.movementValue.diagonalDownLeft:
        if (canMoveDown || canMoveLeft) {
          return true;
        }
        break;
      case -1 * this.movementValue.diagonalDownLeft:
        if (canMoveUp && canMoveRight) {
          return true;
        }
        break;
      default:
        return false;
    }
    return false;
  }
}

export default GameState;