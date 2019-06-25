import React from 'react';
import { connect } from 'react-redux';

import { CFActions } from '../../actions';
import { easy } from './opponent';
import CFCell from './Cell';
import * as Styled from './styles';

const mapStateToProps = state => state.connectFour;

const mapDispatchToProps = dispatch => ({
  takeTurn: col => dispatch(CFActions.takeTurn(col)),
  dropChips: () => dispatch(CFActions.dropChips()),
  resetGrid: () => dispatch(CFActions.resetGrid()),
});

const ConnectFour = ({
  grid,
  open,
  gameOver,
  takeTurn,
  dropChips,
  resetGrid,
}) => {
  const gridCopy = grid.map(gridCol => gridCol.slice());
  const boardFull = () => !gridCopy.some(column => !column[0]);
  const doATurn = (colNum) => {
    if (boardFull() || gameOver || gridCopy[colNum][0]) return;
    gridCopy[colNum][gridCopy[colNum].lastIndexOf(0)] = 1;
    takeTurn(colNum);
    if (boardFull()) return;
    const oppMove = easy(gridCopy);
    takeTurn(oppMove);
  };
  return (
    <div className="crap">
      <Styled.CFGrid>
        {grid.map((col, i) => (
          <Styled.CFColumn key={i} onClick={() => doATurn(i)}>
            {col.map((cell, j) => <CFCell value={cell} key={[i, j]} />)}
          </Styled.CFColumn>
        ))}
      </Styled.CFGrid>
      <div className="content-body-right">
        <p>Connect Four: Be the first to make a line of four chips.</p>
        <p>Select a column to drop a chip there.</p>
        <p>Difficulty options coming soon.</p>
        <button onClick={resetGrid}>Reset</button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectFour);
