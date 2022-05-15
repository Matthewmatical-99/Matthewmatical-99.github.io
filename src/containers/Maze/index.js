import React from 'react';
import { connect } from 'react-redux';

import { mazeConfig } from '../../actions';
import Input from './input';
import makeMaze from './maze-generation-utils';
import * as Styled from './styles';

const CHUNK_SIZE = 8;
const CELL_SIZE = 10;

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

    const restarted = (chunk !== newProps.chunk);
    const playerWasHere = (Math.floor(x / CHUNK_SIZE) === chunkX &&
                           Math.floor(y / CHUNK_SIZE) === chunkY);
    const playerWillBeHere = (Math.floor(newProps.x / CHUNK_SIZE) === chunkX &&
                              Math.floor(newProps.y / CHUNK_SIZE) === chunkY);
    return restarted || playerWasHere || playerWillBeHere;
  }

  render() {
    const { chunk, chunkX, chunkY, cursorColour, x, y } = this.props;
    return (
      <Styled.Chunk>
        {chunk.map((row, rowNum) => (
          <Styled.Row>
            {row.map((cell, colNum) => {
              const cellX = chunkX * CHUNK_SIZE + colNum;
              const cellY = chunkY * CHUNK_SIZE + rowNum;
              return (
                <Styled.Cell
                  hall={cell}
                  style={(cellX === x && cellY === y) ? { backgroundColor: cursorColour } : {}}
                /> 
              );
            })}
          </Styled.Row>
        ))}
      </Styled.Chunk>
    );
  }
}

const Maze = ({ grid, restartHandler, finishRestarting }) => {
  const [pos, setPos] = React.useState({ x: 1, y: 1 });
  const [chunkGrid, setChunkGrid] = React.useState([]);

  const won = pos.x === grid[0].length - 2 && pos.y === grid.length - 1;
  const cursorColour = won ? 'lightgreen' : 'red';
  React.useEffect(() => {
    setPos({ x: 1, y: 1 });
    const chunkW = Math.ceil(grid[0].length / CHUNK_SIZE);
    const chunkH = Math.ceil(grid.length / CHUNK_SIZE);
    const newChunkGrid = Array(chunkH).fill(null);
    newChunkGrid.forEach((row, i) => {
      newChunkGrid[i] = [];
      for (let j = 0; j < chunkW; j++) newChunkGrid[i].push(takeChunk(grid, j, i));
    });
    setChunkGrid(newChunkGrid);
    finishRestarting();
  }, [grid]); // eslint-disable-line react-hooks/exhaustive-deps

  const moveHandler = (event) => {
    restartHandler(event);
    if (won) return;
    switch (event.key) {
      case 'w':
      case 'W':
        if (grid[pos.y - 1][pos.x]) setPos({ x: pos.x, y: pos.y - 1 });
        break;
      case 'a':
      case 'A':
        if (grid[pos.y][pos.x - 1]) setPos({ x: pos.x - 1, y: pos.y });
        break;
      case 's':
      case 'S':
        if (grid[pos.y + 1][pos.x]) setPos({ x: pos.x, y: pos.y + 1 });
        break;
      case 'd':
      case 'D':
        if (grid[pos.y][pos.x + 1]) setPos({ x: pos.x + 1, y: pos.y });
        break;
      default:
        break;
    }
  };

  const unifiedClickMover = event => {
    const mazeBounds = event.target.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect();
    const clickedCellX = Math.floor((event.clientX - mazeBounds.left) / CELL_SIZE);
    const clickedCellY = Math.floor((event.clientY - mazeBounds.top) / CELL_SIZE);
    if (clickedCellX === pos.x) {
      for (let i = Math.min(pos.y, clickedCellY); i <= Math.max(pos.y, clickedCellY); i++) {
        if (!grid[i][pos.x]) return;
      }
      setPos({ x: pos.x, y: clickedCellY });
    } else if (clickedCellY === pos.y) {
      for (let i = Math.min(pos.x, clickedCellX); i <= Math.max(pos.x, clickedCellX); i++) {
        if (!grid[pos.y][i]) return;
      }
      setPos({ x: clickedCellX, y: pos.y });
    }
  };

  return (grid || null) && (
    <Styled.MazeWrapper mazeWidth={grid[0].length}>
      <Styled.Grid tabIndex={0} onKeyPress={moveHandler} onClick={unifiedClickMover}>
        {chunkGrid.map((chunkRow, rowNum) => (
          <Styled.Row>
            {chunkRow.map((chunk, colNum) => (
              <MazeChunk
                cursorColour={cursorColour}
                chunkX={colNum}
                chunkY={rowNum}
                {...pos} // x and y
                chunk={chunk}
              />
            ))}
          </Styled.Row>
        ))}
      </Styled.Grid>
    </Styled.MazeWrapper>
  );
};

const mapStateToProps = state => ({
  ...state.maze,
});

const mapDispatchToProps = dispatch => ({
  changeWidth: width => dispatch(mazeConfig({ width })),
  changeHeight: height => dispatch(mazeConfig({ height: height - 1 })),
});

const MazeWrapper = ({ width, height, changeWidth, changeHeight }) => {
  const [grid, changeGrid] = React.useState([]);
  if (!grid.length) { // So it doesn't call makeMaze on every render
    changeGrid(makeMaze(width, height));
  }
  const [restarting, setRestarting] = React.useState(false);
  const finishedRestarting = () => setRestarting(false);
  const restartHandler = (event) => {
    switch (event.key) {
      case 'r':
      case 'R':
        if (!restarting) {
          setRestarting(true);
          changeGrid(makeMaze(width, height));
        }
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="content-body">
        <Styled.MazeConfig>
          <button onClick={() => restartHandler({ key: 'r' })}>Restart</button>
          <p>Maze Settings:</p>
          <Styled.ConfigSlider><Input value={width} handler={changeWidth} name="Maze Width" /></Styled.ConfigSlider>
          <Styled.ConfigSlider><Input value={height} handler={changeHeight} name="Maze Height" height /></Styled.ConfigSlider>
        </Styled.MazeConfig>
      </div>
      <Maze
        grid={grid}
        restartHandler={restartHandler}
        finishRestarting={finishedRestarting}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MazeWrapper);
