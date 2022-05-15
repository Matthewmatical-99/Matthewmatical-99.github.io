import React from 'react';

import Maze from '../Maze';
import ConnectFour from '../ConnectFour';
import * as Styled from './styles';

const Games = () => (
  <div>
    <div className="content-body">
      <p>Here are some games I've made. More will be added approximately once every whenever I feel like it.</p>
    </div>
    <div className="content-body">
      <p>Maze: Use WASD to move. Exit is in lower-right corner. Press R or click the button below to generate a new maze.</p>
      <p>Click anywhere on the maze before using the keyboard.</p>
      <p>Alternatively, tap/click any directly connected (same row/column) location to move there.</p>
    </div>
    <Styled.GameWrapper>
      <Maze />
    </Styled.GameWrapper>
    <Styled.GameWrapper>
      <ConnectFour />
    </Styled.GameWrapper>
  </div>
);

export default Games;
