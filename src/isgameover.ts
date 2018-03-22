// TODO: needs a refactor really badly
function isgameover(grid: number[]): number {
  const horizontalResult = isgameoverformovement(grid, 1);
  if (horizontalResult) {
    return horizontalResult;
  }
  const verticalResult = isgameoverformovement(grid, 3);
  if (verticalResult) {
    return verticalResult;
  }
  const diagonalRightResult = isgameoverformovement(grid, 4);
  if (diagonalRightResult) {
    return diagonalRightResult;
  }
  const diagonalLeftResult = isgameoverformovement(grid, 4);
  if (diagonalLeftResult) {
    return diagonalLeftResult;
  }
  return 0;
}

function isgameoverformovement(grid: number[], movement: number) {
  for (let i = 0; i < 9; i++) {
    const result = isgameoverhelper(grid, i, movement, 1);
    if (result !== 0) {
      return result;
    }
  }
  return 0;
}

function isMovementAllowed(index: number, movement: number) {
  if (movement === 1) { // right
    if (index % 3 === 2) {
      return false;
    }
    return true;
  } else if (movement === 3) {
    if (index > 5) { // down
      return false;
    }
    return true;
  } else if (movement === 4) {
    if (index > 5 || index % 3 === 2) { // down or right
      return false;
    }
    return true;
  } else if (movement === 2) {
    if (index % 3 === 0 || index > 5) { // down or right
      return false;
    }
    return true;
  }
  return false;
}

function isgameoverhelper(grid: number[], index: number, movement: number, depth: number): number {
  // debugger;
  if (grid[index] !== 0 && isMovementAllowed(index, movement) && grid[index] === grid[index + movement]) {
    if (depth + 1 === 3) {
      return grid[index];
    }
    return isgameoverhelper(grid, index + movement, movement, depth + 1);
  }
  return 0;
}

export default isgameover;

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