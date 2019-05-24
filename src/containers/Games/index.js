import React from 'react';
import Maze from '../Maze';

import * as Styled from './styles';

const Games = () => (
  <div>
    <div className="content-body">
      <p>Here are some games I've made. More will be added approximately once every whenever I feel like it.</p>
    </div>
    <div className="content-body">
      <p>Maze: Use WASD to move. Exit is in lower-right corner. Press R to generate a new maze. Warning: do not hold down R, as that will fuck shit up.</p>
    </div>
    <Styled.GameWrapper>
      <Maze width={101} halfHeight={50}/>
    </Styled.GameWrapper>
  </div>
);

export default Games;
