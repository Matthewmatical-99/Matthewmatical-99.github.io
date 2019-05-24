import React from 'react';

import makeMaze from './maze-generation-utils';
import * as Styled from './styles';

const CHUNK_SIZE = 8;

const takeChunk = (grid, x, y) => {
  const chunk = Array(CHUNK_SIZE).fill(null);
  chunk.forEach((row, index) => {
    if (CHUNK_SIZE * y + index >= grid.length) return chunk.filter(line => line);
    chunk[index] = grid[CHUNK_SIZE * y + index].slice(CHUNK_SIZE * x, CHUNK_SIZE * (x + 1));
  });
  return chunk.filter(line => line);
};

class MazeChunk extends React.Component {
  shouldComponentUpdate(newProps) {
    const { chunk, x, y, chunkX, chunkY } = this.props;
    return (
      chunk !== newProps.chunk || // if a new maze was generated
      Math.floor(x / CHUNK_SIZE) === chunkX && Math.floor(y / CHUNK_SIZE) === chunkY || // if the cursor was in this chunk
      Math.floor(newProps.x / CHUNK_SIZE) === chunkX && Math.floor(newProps.y / CHUNK_SIZE) === chunkY // if the cursor will be in this chunk
    );
  }

  render() {
    const { chunk, chunkX, chunkY, x, y, cursorColour } = this.props;
    const cursorIsHereSomewhere = Math.floor(x / CHUNK_SIZE) === chunkX && Math.floor(y / CHUNK_SIZE) === chunkY;
    return (
      <Styled.Chunk>
        {chunk.map((row, rowNum) => (
          <Styled.Row>
            {row.map((cell, colNum) => (
              <Styled.Cell hall={cell} style={(cursorIsHereSomewhere && colNum === x % CHUNK_SIZE && rowNum === y % CHUNK_SIZE) ? { backgroundColor: cursorColour } : {}} /> 
            ))}
          </Styled.Row>
        ))}
      </Styled.Chunk>
    );
  }
}

const Maze = ({ grid, restartHandler, finishRestarting }) => {
  const [xPos, setX] = React.useState(1);
  const [yPos, setY] = React.useState(1);
  const [chunkGrid, setChunkGrid] = React.useState([]);

  const won = xPos === grid[0].length - 2 && yPos === grid.length - 1;
  const cursorColour = won ? 'green' : 'red';
  React.useEffect(() => {
    setX(1);
    setY(1);
    const chunkW = Math.ceil(grid[0].length / CHUNK_SIZE);
    const chunkH = Math.ceil(grid.length / CHUNK_SIZE);
    const newChunkGrid = Array(chunkH).fill(null);
    newChunkGrid.forEach((row, i) => {
      newChunkGrid[i] = [];
      for (let j = 0; j < chunkW; j++) newChunkGrid[i].push(takeChunk(grid, j, i));
    });
    setChunkGrid(newChunkGrid);
    finishRestarting();
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
        {chunkGrid.map((chunkRow, rowNum) => (
          <Styled.Row>
            {chunkRow.map((chunk, colNum) => (
              <MazeChunk
                cursorColour={cursorColour}
                chunkX={colNum}
                chunkY={rowNum}
                x={xPos}
                y={yPos}
                chunk={chunk}
              /> 
            ))}
          </Styled.Row>
        ))}
      </Styled.Grid>
    </Styled.MazeWrapper>
  );
};

const MazeWrapper = ({ width, halfHeight }) => {
  const [grid, changeGrid] = React.useState(makeMaze(width, halfHeight));
  const [restarting, setRestarting] = React.useState(false);
  const finishedRestarting = () => setRestarting(false);
  const restartHandler = (event) => {
    switch (event.key) {
      case 'r':
      case 'R':
        if (!restarting) {
          setRestarting(true);
          changeGrid(makeMaze(width, halfHeight));
        }
        break;
      default:
        break;
    }
  };
  return <Maze grid={grid} restartHandler={restartHandler} finishRestarting={finishedRestarting} />
};

export default MazeWrapper;
