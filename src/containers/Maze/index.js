import React from 'react';

import makeMaze from './maze-generation-utils';
import * as Styled from './styles';

const Maze = ({ grid, restartHandler }) => {
  const [xPos, setX] = React.useState(1);
  const [yPos, setY] = React.useState(1);
  const won = xPos === grid[0].length - 2 && yPos === grid.length - 1;
  const cursorColour = won ? 'green' : 'red';
  React.useEffect(() => {
    setX(1);
    setY(1);
  }, [grid]);

  const moveHandler = (event) => {
    restartHandler(event);
    if (won) return;
    switch (event.key) {
      case 'w':
      case 'W':
        if (grid[yPos - 1][xPos]) setY(yPos - 1);
        break;
      case 'a':
      case 'A':
        if (grid[yPos][xPos - 1]) setX(xPos - 1);
        break;
      case 's':
      case 'S':
        if (grid[yPos + 1][xPos]) setY(yPos + 1);
        break;
      case 'd':
      case 'D':
        if (grid[yPos][xPos + 1]) setX(xPos + 1);
        break;
      default:
        break;
    }
  };

  return (grid || null) && (
    <Styled.MazeWrapper mazeWidth={grid[0].length}>
      <Styled.Grid tabIndex={0} onKeyPress={moveHandler}>
        {grid.map((row, rowNum) => (
          <Styled.Row>
            {row.map((cell, colNum) => (
              <Styled.Cell hall={cell} style={(colNum === xPos && rowNum === yPos) ? { backgroundColor: cursorColour } : {}} /> 
            ))}
          </Styled.Row>
        ))}
      </Styled.Grid>
    </Styled.MazeWrapper>
  );
};

const MazeWrapper = ({ width, halfHeight }) => {
  const [grid, changeGrid] = React.useState(makeMaze(width, halfHeight));
  const restartHandler = (event) => {
    switch (event.key) {
      case 'r':
      case 'R':
        changeGrid(makeMaze(width, halfHeight));
        break;
      default:
        break;
    }
  };
  return <Maze grid={grid} restartHandler={restartHandler} />
};

export default MazeWrapper;
