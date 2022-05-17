import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

// Generalized rectangular block of cells.
// By turning the n maze cells into a (close to balanced) binary tree structure of chunks,
// each player move only calls shouldComponentUpdate on O(log(n)) components.
class MazeChunk extends React.Component {
  shouldComponentUpdate(newProps) {
    if (!this.props.mazeHook) return false;
    const isNewMaze = (this.props.mazeNum !== newProps.mazeNum);
    const playerWasHere = this.props.mazeHook.userIsWithin(this.props);
    const playerWillBeHere = newProps.mazeHook.userIsWithin(newProps);
    return isNewMaze || playerWasHere || playerWillBeHere;
  }

  render() {
    const { x, y, w, h, mazeHook, mazeNum } = this.props;
    if (w > h) { // Split into left and right halves
      const w1 = Math.floor(w / 2);
      const w2 = w - w1;
      const x2 = x + w1;

      return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {(w1 <= 1 && h <= 1) ? (
            <Styled.Cell
              x={x} y={y}
              cellColour={mazeHook.getCellColour({ x, y })}
            />
          ) : <MazeChunk x={x} y={y} w={w1} h={h} mazeHook={mazeHook} mazeNum={mazeNum} />}
          {(w2 <= 1 && h <= 1) ? (
            <Styled.Cell
              x={x2} y={y}
              cellColour={mazeHook.getCellColour({ x: x2, y })}
            />
          ) : <MazeChunk x={x2} y={y} w={w2} h={h} mazeHook={mazeHook} mazeNum={mazeNum} />}
        </div>
      );
    } else { // Split into top and bottom halves
      const h1 = Math.floor(h / 2);
      const h2 = h - h1;
      const y2 = y + h1;

      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {(w <= 1 && h1 <= 1) ? (
            <Styled.Cell
              x={x} y={y}
              cellColour={mazeHook.getCellColour({ x, y })}
            />
          ) : <MazeChunk x={x} y={y} w={w} h={h1} mazeHook={mazeHook} mazeNum={mazeNum} />}
          {(w <= 1 && h2 <= 1) ? (
            <Styled.Cell
              x={x} y={y2}
              cellColour={mazeHook.getCellColour({ x, y: y2 })}
            />
          ) : <MazeChunk x={x} y={y2} w={w} h={h2} mazeHook={mazeHook} mazeNum={mazeNum} />}
        </div>
      );
    }
  }
}

// Like standard rectangle xywh, but measured in maze cells instead of pixels.
MazeChunk.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
};

export default MazeChunk;
