import * as R from 'ramda';

import useObjectState from '../../hooks/useObjectState';
import { CELL_SIZE, MAZE_ROOT_ID, INIT_WIDTH, INIT_HEIGHT } from '../../constants/maze-constants';
import makeMaze from './maze-generation-utils';

// Find maze root element from any descendant of it.
// Useful for navigating arbitrary-depth cell chunk trees.
const getMazeRoot = node => {
  if (!node) return null;
  if (node.id === MAZE_ROOT_ID) return node;
  return getMazeRoot(node.parentNode);
};

const useMaze = () => {
  const { update, state } = useObjectState({
    userX: 1,
    userY: 1,
    won: false,
    grid: makeMaze(INIT_WIDTH, INIT_HEIGHT),
    width: INIT_WIDTH,
    height: INIT_HEIGHT,
    nextWidth: INIT_WIDTH,
    nextHeight: INIT_HEIGHT,
    mazeNum: 0,
    restarting: false,
  });

  // Minor helper functions
  const safeGridAccess = ({ x, y }, defaultVal = false) => (R.path([y, x], state.grid) || defaultVal);
  const userIsAt = ({ x, y }) => (x === state.userX && y === state.userY);
  const getCellColour = (xyCoords) => { // xy coords is { x, y }
    if (userIsAt(xyCoords)) return (state.won ? 'lightgreen' : 'red');
    return (safeGridAccess(xyCoords) ? 'white' : 'black');
  };
  const userIsWithin = ({ x, y, w, h }) => (
    state.userX >= x && state.userX < (x + w) && state.userY >= y && state.userY < (y + h));

  // Take in an object of upcoming state changes and add [won: true] to it if appropriate
  const checkWon = changes => {
    const nextState = R.mergeRight(state, changes);
    
    // Check if the player is at the end of the maze
    const endX = safeGridAccess({ x: 'length', y: 0 }, 0) - 2;
    const endY = nextState.grid.length - 1;
    if (nextState.userX === endX && nextState.userY === endY && changes.won === undefined) {
      changes.won = true;
    }

    return changes;
  };

  const unifiedClickHandler = event => {
    // Don't move if player has already won.
    if (state.won) return;
    
    // Find maze root, and calculate click position relative to maze position.
    const mazeRootElement = getMazeRoot(event.target);
    const mazeBounds = mazeRootElement.getBoundingClientRect();
    
    // Then divide by cell size to find which cell was clicked.
    const clickedCellX = Math.floor((event.clientX + mazeRootElement.scrollLeft - mazeBounds.left) / CELL_SIZE);
    const clickedCellY = Math.floor((event.clientY + mazeRootElement.scrollTop - mazeBounds.top) / CELL_SIZE);

    // Check if the two points are in the same row or column
    // and there is an open hallway between them. Update player position if so.
    const changes = {};
    if (clickedCellX === state.userX) {
      for (let i = Math.min(state.userY, clickedCellY); i <= Math.max(state.userY, clickedCellY); i++) {
        if (!safeGridAccess({ x: state.userX, y: i })) return;
      }
      changes.userY = clickedCellY;
    } else if (clickedCellY === state.userY) {
      for (let i = Math.min(state.userX, clickedCellX); i <= Math.max(state.userX, clickedCellX); i++) {
        if (!safeGridAccess({ x: i, y: state.userY })) return;
      }
      changes.userX = clickedCellX;
    }

    if (Object.keys(changes).length > 0) {
      checkWon(changes);
      update(changes);
    }
  };

  const reset = () => {
    if (!state.restarting) {
      update({
        width: state.nextWidth,
        height: state.nextHeight,
        grid: makeMaze(state.nextWidth, state.nextHeight),
        won: false,
        mazeNum: state.mazeNum + 1,
        userX: 1,
        userY: 1,
        restarting: true,
      });
    }
  };

  const restartHandler = (event) => {
    switch (event.key) {
      case 'r':
      case 'R':
        reset();
        return true;
      default:
        return false;
    }
  };

  const keyHandler = (event) => {
    const needReset = restartHandler(event);
    if (state.won || needReset) return;
    const changes = {};
    const { userX, userY } = state;
    switch (event.key) {
      case 'w':
      case 'W':
        if (safeGridAccess({ x: userX, y: userY - 1 })) changes.userY = userY - 1;
        break;
      case 'a':
      case 'A':
        if (safeGridAccess({ x: userX - 1, y: userY })) changes.userX = userX - 1;
        break;
      case 's':
      case 'S':
        if (safeGridAccess({ x: userX, y: userY + 1 })) changes.userY = userY + 1;
        break;
      case 'd':
      case 'D':
        if (safeGridAccess({ x: userX + 1, y: userY })) changes.userX = userX + 1;
        break;
      default:
        break;
    }

    if (Object.keys(changes).length > 0) {
      checkWon(changes);
      update(changes);
    }
  };

  return {
    state,
    setWidth: newWidth => { update({ nextWidth: newWidth }); },
    setHeight: newHeight => { update({ nextHeight: newHeight }); },
    setRestarting: newRestarting => { update({ restarting: newRestarting }); },
    reset,
    userIsAt,
    userIsWithin,
    safeGridAccess,
    unifiedClickHandler,
    keyHandler,
    getCellColour,
  };
};

export default useMaze;
