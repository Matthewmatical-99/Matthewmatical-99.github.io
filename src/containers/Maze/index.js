import React, { memo, useEffect } from 'react';

import { MAZE_ROOT_ID } from '../../constants/maze-constants';
import Input from './maze-size-input';
import useMaze from './useMaze';
import MazeChunk from './mazeChunk';

import * as Styled from './styles';

const Maze = ({ mazeHook }) => {
  const { mazeNum, width, height } = mazeHook.state;
  return ((height || null) && (
    <Styled.MazeWrapper mazeWidth={width}>
      <Styled.Grid
        tabIndex={0}
        onClick={mazeHook.unifiedClickHandler}
        id={MAZE_ROOT_ID}
        mazeWidth={width}
      >
        <MazeChunk
          x={0} y={0} w={width} h={height}
          mazeHook={mazeHook} mazeNum={mazeNum}
        />
      </Styled.Grid>
    </Styled.MazeWrapper>
  ));
};

const gameStatesEqual = (oldProps, newProps) => (
  oldProps.userX === newProps.userX &&
  oldProps.userY === newProps.userY &&
  oldProps.mazeNum === newProps.mazeNum
);

const MemoizedMaze = memo(Maze, gameStatesEqual);

const MazeWrapper = () => {
  const mazeHook = useMaze();
  const { mazeNum, nextWidth, nextHeight, userX, userY, restarting } = mazeHook.state;

  useEffect(() => {
    if (restarting) {
      mazeHook.setRestarting(false);
    }
  }, [restarting, mazeHook]);

  return (
    <div onKeyPress={mazeHook.keyHandler}>
      <div className="content-body">
        <Styled.MazeConfig>
          <button onClick={mazeHook.reset}>Restart</button>
          <p>Maze Settings:</p>
          <Styled.ConfigSlider>
            <Input value={nextWidth} handler={mazeHook.setWidth} name="Maze Width" />
          </Styled.ConfigSlider>
          <Styled.ConfigSlider>
            <Input value={nextHeight} handler={mazeHook.setHeight} name="Maze Height" height />
          </Styled.ConfigSlider>
        </Styled.MazeConfig>
      </div>
      <MemoizedMaze mazeHook={mazeHook} mazeNum={mazeNum} userX={userX} userY={userY} />
    </div>
  );
};

export default MazeWrapper;
