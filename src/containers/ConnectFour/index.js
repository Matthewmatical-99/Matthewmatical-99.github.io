import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Flex } from 'rebass';

import CFCell from './Cell';
import useCF from './useCF';

import * as Styled from './styles';

const ConnectFour = () => {
  const {
    grid,
    open,
    resetDammit,
    twoPlayerGame,
    resetGrid,
    doATurn,
    getStatus,
    switchTwoPlayers,
  } = useCF();

  return (
    <div className="crap">
      <Styled.CFGrid key={resetDammit}>
        {grid.map((col, i) => (
          <Styled.CFColumn key={i} onClick={() => doATurn(i)}>
            {col.map((cell, j) => <CFCell value={cell} key={[i, j]} yPos={j} yeet={open} />)}
          </Styled.CFColumn>
        ))}
      </Styled.CFGrid>
      <div className="content-body-right">
        <p>Connect Four: Be the first to make a line of four chips.</p>
        <p>Select a column to drop a chip there.</p>
        <p>Difficulty options coming soon.</p>
        <button onClick={resetGrid}>Reset</button>
        <Flex justifyContent="center" alignItems="center">
          <Switch value={twoPlayerGame} onClick={switchTwoPlayers} />
          <p>2-player game</p>
        </Flex>
        
        <p>{getStatus()}</p>
      </div>
    </div>
  );
};

export default ConnectFour;
