const movementValue: {[key: string]: number} = {
  right: 1,
  diagonalRight: 2,
  down: 3,
  diagonalLeft: 4,
};

class GameState {
  private grid: number[];

  constructor(grid: number[]) {
    this.grid = grid;
  }

  getStatus = (): number => {
    const horizontalResult = this.gameStatusForAMovement(movementValue.right);
    if (horizontalResult) {
      return horizontalResult;
    }
    const verticalResult = this.gameStatusForAMovement(movementValue.down);
    if (verticalResult) {
      return verticalResult;
    }
    const diagonalRightResult = this.gameStatusForAMovement(movementValue.diagonalRight);
    if (diagonalRightResult) {
      return diagonalRightResult;
    }
    const diagonalLeftResult = this.gameStatusForAMovement(movementValue.diagonalLeft);
    if (diagonalLeftResult) {
      return diagonalLeftResult;
    }
    return 0;
  }

  private gameStatusForAMovement(movement: number) {
    for (let i = 0; i < 9; i++) {
      const result = this.gameStatusHelper(i, movement, 1);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  }

  private gameStatusHelper(index: number, movement: number, depth: number): number {
    const grid = this.grid;
    if (grid[index] !== 0 && GameState.isMovementAllowed(index, movement) && grid[index] === grid[index + movement]) {
      if (depth + 1 === 3) {
        return grid[index];
      }
      return this.gameStatusHelper(index + movement, movement, depth + 1);
    }
    return 0;
  }

  private static isMovementAllowed(index: number, movement: number) {
    switch (movement) {
      case movementValue.right:
        if (index % 3 === 2) {
          return false;
        }
        break;
      case movementValue.down:
        if (index > 5) { // down
          return false;
        }
        break;
      case movementValue.diagonalRight:
        if (index > 5 || index % 3 === 2) { // down or right
          return false;
        }
        break;
      case movementValue.diagonalLeft:
        if (index % 3 === 0 || index > 5) { // down or right
          return false;
        }
        break;
    }
    return true;
  }
}

export default GameState;

// Rules
// 0 1 2
// 3 4 5
// 6 7 8
// under 3, can't go up
// over 5, can't go down
// divisible by 3, can't go left
// x % 3 === 2, can't go right

// Going right -> adding 1
// Going down -> adding 3