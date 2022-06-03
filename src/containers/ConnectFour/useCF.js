import { useState } from 'react';

import useBooleanState from '../../hooks/useBooleanState';
import { makeEmptyGrid, didWin, boardFull, NO_WINNER } from './helpers';
import { easy } from './opponent';

const useCF = () => {
  // 2D array of ints. Cells are one of: 0=empty, 1=player 1, 2=player 2.
  const [grid, setGrid] = useState(makeEmptyGrid());
  // Whether or not chips should fall out of the board.
  const openState = useBooleanState(false);
  const luigiState = useBooleanState(false); // True iff player 2's turn.
  // Zero if game not over, number of winning player otherwise.
  // NO_WINNER if board is full but nobody has won.
  const [winner, setWinner] = useState(0);
  // Hack to force React to unmount and remount between games.
  const resetDammitState = useBooleanState(false);
  // Whether current game has two players.
  const twoPlayersState = useBooleanState(false);
  // Displayed switch state; doesn't take effect until game restarted
  const nextGameTwoPlayersState = useBooleanState(false);

  const getStatus = () => {
    if (twoPlayersState.value) {
      switch (winner) { // eslint-disable-line default-case
        case 1:
          return 'Player 1 wins!';
        case 2:
          return 'Player 2 wins!';
        case NO_WINNER:
          return 'Draw. Perhaps a rematch is in order?';
        case 0:
          return `Player ${1 + luigiState.value}'s turn`;
      }
    } else {
      switch (winner) { // eslint-disable-line default-case
        case 1:
          return 'Alas, you have defeated me!';
        case 2:
          return 'I win, you pathetic meatbag.';
        case NO_WINNER:
          return 'A draw? I was humoring you. Play again, and I will crush you.';
        case 0:
          return "Your turn. I'm waiting, human...";
      }
    }
    return 'This should never be shown; if you\'re reading this, something\'s fucky.';
  };

  const resetGrid = () => {
    openState.setTrue();
    setTimeout(() => {
      resetDammitState.toggle(); // This forces React to rerender 
      setWinner(0);
      luigiState.setFalse();
      setGrid(makeEmptyGrid());
      openState.setFalse();
      twoPlayersState.setState(nextGameTwoPlayersState.value);
    }, 1000);
  };

  // Check if the game is over, either because someone won or the board is full.
  // Perform state updates accordingly, and return whether the game is over.
  // x,y are coords of the last chip placed;
  // we only have to check lines that include it since this is called after every move.
  const checkGameOver = (grid, x, y) => {
    let gameOver = didWin(grid, x, y);
    if (gameOver) {
      setWinner(1 + luigiState.value); // Player 1 or 2
    } else if (boardFull(grid)) {
      setWinner(NO_WINNER);
      gameOver = true;
    }
    return gameOver;
  }

  const doATurn = (colNum) => {
    if (winner || grid[colNum][0]) return;
    
    // player move
    const playerNum = 1 + luigiState.value;
    const gridCopy = grid.map(gridCol => gridCol.slice());
    // lastIndexOf(0) is the bottommost empty space in the column, i.e. where the chip will fall.
    const rowNum = gridCopy[colNum].lastIndexOf(0);
    gridCopy[colNum][rowNum] = playerNum;
    
    if (!checkGameOver(gridCopy, colNum, rowNum)) {
      if (twoPlayersState.value) {
        luigiState.toggle(); // switch turn to other human player
      } else {
        // computer opponent move
        const opponentCol = easy(gridCopy);
        const opponentRow = gridCopy[opponentCol].lastIndexOf(0);
        gridCopy[opponentCol][opponentRow] = 2; // computer is always player 2
        checkGameOver(gridCopy, opponentCol, opponentRow);
      }
    }
    
    setGrid(gridCopy);
  };
  

  return {
    grid,
    switchTwoPlayers: nextGameTwoPlayersState.toggle,
    twoPlayerGame: nextGameTwoPlayersState.value,
    resetGrid,
    doATurn,
    getStatus,
    open: openState.value,
    resetDammit: resetDammitState.value,
  };
};

export default useCF;
