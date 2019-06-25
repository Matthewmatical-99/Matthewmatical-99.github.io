// Easy opponent; selects a random available column.
export function easy(grid) {
  const availableCols = [];
  grid.forEach((col, i) => !col[0] && availableCols.push(i));
  return availableCols[Math.floor(availableCols.length * Math.random())];
}

// TODO: Make smarter opponents
