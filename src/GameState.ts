const movementValue: {[key: string]: number} = {
  horizontal: 1,
  diagonalDownLeft: 2,
  vertical: 3,
  diagonalDownRight: 4,
};

class GameState {

  private grid: number[];
  private startingSquareLocation: number;

  private static isMovementAllowed(index: number, movement: number) {
    const canMoveUp = index > 2;
    const canMoveDown = index < 6;
    const canMoveLeft = index % 3 !== 0;
    const canMoveRight = index % 3 !== 2;

    switch (movement) {
      case movementValue.horizontal:
        if (canMoveRight) {
          return true;
        }
        break;
      case -1 * movementValue.horizontal:
        if (canMoveLeft) {
          return true;
        }
        break;
      case movementValue.vertical:
        if (canMoveDown) {
          return true;
        }
        break;
      case -1 * movementValue.vertical:
        if (!canMoveUp) {
          return true;
        }
        break;
      case movementValue.diagonalDownRight:
        if (canMoveDown && canMoveRight) {
          return true;
        }
        break;
      case -1 * movementValue.diagonalDownRight:
        if (canMoveUp && canMoveLeft) {
          return true;
        }
        break;
      case movementValue.diagonalDownLeft:
        if (canMoveDown || canMoveLeft) {
          return true;
        }
        break;
      case -1 * movementValue.diagonalDownLeft:
        if (canMoveUp && canMoveRight) {
          return true;
        }
        break;
      default:
        return false;
    }
    return false;
  }

  constructor(grid: number[], index: number) {
    this.grid = grid;
    this.startingSquareLocation = index;
  }

  getStatus = (): number => {
    const horizontalDepth = this.gameStatusForAMovement(movementValue.horizontal);
    if (horizontalDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    const verticalDepth = this.gameStatusForAMovement(movementValue.vertical);
    if (verticalDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    const diagonalDownRightDepth = this.gameStatusForAMovement(movementValue.diagonalDownRight);
    if (diagonalDownRightDepth === 3) {
      return this.grid[this.startingSquareLocation];
    }
    const diagonalDownLeftDepth = this.gameStatusForAMovement(movementValue.diagonalDownLeft);
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
    } else if (GameState.isMovementAllowed(index, movement) && squareValue === grid[index + movement]) {
      if (depth + 1 === 3) {
        return 3;
      }
      return this.gameStatusHelper(index + movement, movement, depth + 1);
    }
    return depth;
  }
}

export default GameState;