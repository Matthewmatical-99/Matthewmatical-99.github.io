function makeNew(width, hallCount) {
  const height = (hallCount * 2) + 1;
  const maze = Array(height).fill('placeholder');
  maze.forEach((row, yPos) => {
    maze[yPos] = new Array(width).fill(true);
    if (yPos === 0 || yPos === height - 1) {
      maze[yPos].forEach((cell, xPos) => { maze[yPos][xPos] = false; });
    } else if (yPos % 2) {
      maze[yPos].forEach((cell, xPos) => {
        maze[yPos][xPos] = (Math.random() < 0.85);
      });
    } else {
      maze[yPos].forEach((cell, xPos) => {
        maze[yPos][xPos] = !!(xPos && !maze[yPos][xPos-1] && Math.random() < 0.35);
      });
    }
    maze[yPos][0] = false;
    maze[yPos][width - 1] = false;
  });
  maze[height - 1][width - 2] = true;
  maze[1][1] = true;
  maze[1][2] = true;
  maze[2][1] = true;
  return maze;
}

function compass(bearing) {
  switch (bearing) {
    case 0:
      return 'north';
    case 1:
      return 'west';
    case 2:
      return 'south';
    case 3:
      return 'east';
    default:
      return 'into the void';
  }
}

function isSolvable(maze) {
  let startVisits = 0;
  let stepsFailsafe = maze[0].length * maze.length * 4;
  let [x, y, facing] = [1, 1, 1]; // Meaning of facing: 0-north, 1-west, 2-south, 3-west
  while ((startVisits < 3) && stepsFailsafe) { // Only two ways to go from corner, so if start is visited thrice, all options have been exhausted.
    if (x === maze[0].length - 2 && y === maze.length - 1) return true; // Reached the end
    if (x === 1 && y === 1) startVisits++;
    const nextX = x + ((facing % 2) * (facing - 2));
    const nextY = y + ((!(facing % 2)) * (facing - 1));
    if (maze[nextY][nextX]) {
      x = nextX;
      y = nextY;
      facing += 3; // Keep following right wall
    } else {
      facing++; // There's a wall there; turn 90 degrees to the left
    }
    facing %= 4;
    stepsFailsafe--;
  }
  if (!stepsFailsafe) {
    console.log('bruh');
    return true;
  }
  return false;
}

function niceify(maze) {
  for (let i = 2; i < maze.length - 2; i += 2) {
    for (let j = 2; j < maze[0].length - 1; j++) {
      if (maze[i-1][j-1] && maze[i][j-1] && maze[i+1][j-1]) {
        while (maze[i-1][j] && maze[i+1][j]) {
          maze[i][j] = false;
          j++;
        }
      }
    }
    for (let j = 1; j < maze[0].length - 1; j++) {
      if (!maze[i-1][j] && !maze[i+1][j] && !maze[i][j-1] && !maze[i][j+1]) maze[i][j] = false;
      i--;
      if (!maze[i-1][j] && !maze[i+1][j] && !maze[i][j-1] && !maze[i][j+1]) maze[i][j] = false;
      i++;
    }
  }
  return maze;
}

export default function makeGoodMaze(width, hallCount) {
  let maze = makeNew(width, hallCount);
  let count = 0;
  for (maze; !isSolvable(maze); maze = makeNew(width, hallCount)) count++;
  console.log(`Checked ${count} mazes before finding a solvable one.`);
  return niceify(maze);
}
