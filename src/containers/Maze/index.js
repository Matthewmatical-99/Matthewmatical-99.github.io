import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { mazeConfig } from '../../actions';
import Input from './input';
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
    const { minX, minY, maxX, maxY } = newProps.limits;

    // Can I simplify this? Not yet.
    // TODO: try using a ref for the player's position,
    // so the handlers don't have to rerender to receive the new position
    // const restarted = (chunk !== newProps.chunk);
    // const playerWasHere = (Math.floor(x / CHUNK_SIZE) === chunkX &&
    //                        Math.floor(y / CHUNK_SIZE) === chunkY);
    // const playerWillBeHere = (Math.floor(newProps.x / CHUNK_SIZE) === chunkX &&
    //                           Math.floor(newProps.y / CHUNK_SIZE) === chunkY);
    // return restarted || playerWasHere || playerWillBeHere;

    /* eslint-disable no-mixed-operators */
    return (chunk !== newProps.chunk || // re-render if a new maze was generated,
      (newProps.x !== x || newProps.y !== y) && ( // or if the player moved...
        // ...and they might be in this chunk
        Math.floor(newProps.x / CHUNK_SIZE) === chunkX && minY <= chunkY && maxY >= chunkY ||
        Math.floor(newProps.y / CHUNK_SIZE) === chunkY && minX <= chunkX && maxX >= chunkX
    ));
  }

  render() {
    const { chunk, chunkX, chunkY, cursorColour, makeHandler, x, y } = this.props;
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
                  onClick={makeHandler(cellX, cellY)}
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

  const clickMover = (clickX, clickY) => (() => {
    if (clickX === pos.x) {
      for (let i = Math.min(pos.y, clickY); i <= Math.max(pos.y, clickY); i++) {
        if (!grid[i][pos.x]) return;
      }
      setPos({ x: pos.x, y: clickY });
    } else if (clickY === pos.y) {
      for (let i = Math.min(pos.x, clickX); i <= Math.max(pos.x, clickX); i++) {
        if (!grid[pos.y][i]) return;
      }
      setPos({ x: clickX, y: pos.y });
    }
  });

  // These are used to determine which chunks could be entered during the next move, so they will re-render as needed.
  let [minX, minY, maxX, maxY] = [pos.x, pos.y, pos.x, pos.y];
  // No-throw grid access. Is passed [y,x] and returns grid[y][x], or undefined if out of range.
  const gridIsOpenAt = R.partialRight(R.path, [grid]);
  // Walk from current point in all directions until we hit a wall; record how far we get.
  for (maxY = pos.y; gridIsOpenAt([maxY + 1, pos.x]); maxY++) {}
  for (maxX = pos.x; gridIsOpenAt([pos.y, maxX + 1]); maxX++) {}
  for (minX = pos.x; gridIsOpenAt([pos.y, minX - 1]); minX--) {}
  for (minY = pos.y; gridIsOpenAt([minY - 1, pos.x]); minY--) {}
  minX = Math.floor(minX / CHUNK_SIZE);
  minY = Math.floor(minY / CHUNK_SIZE);
  maxX = Math.floor(maxX / CHUNK_SIZE);
  maxY = Math.floor(maxY / CHUNK_SIZE);
  const limits = { minX, minY, maxX, maxY };

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
                {...pos} // x and y
                chunk={chunk}
                makeHandler={clickMover}
                limits={limits}
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
