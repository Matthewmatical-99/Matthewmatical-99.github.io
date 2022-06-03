export const NO_WINNER = 3;

export const makeEmptyGrid = () => Array(7).fill('column').map(() => Array(6).fill(0));

export const boardFull = grid => grid.every(gridCol => gridCol[0]);

export const isSafe = (grid, x, y) => (
  x >= 0 &&
  y >= 0 &&
  x < grid.length &&
  grid.length &&
  y < grid[0].length
);

const directions = (x, y) => [
  i => [x, y - i],
  i => [x + i, y - i],
  i => [x + i, y],
  i => [x + i, y + i],
];

const lineExtendsHere = (grid, x, y, val) => isSafe(grid, x, y) && grid[x][y] === val;

// Checks if there is a line of 4 that includes the chip at (x, y).
export const didWin = (grid, x, y) => {
  const centreVal = grid[x][y];
  for (const away of directions(x, y)) {
    let lineLength = 1;
    for (let i = 1; lineExtendsHere(grid, ...away(i), centreVal); i++) lineLength++;
    for (let i = -1; lineExtendsHere(grid, ...away(i), centreVal); i--) lineLength++;
    if (lineLength >= 4) return centreVal;
  }
  return false;
};
