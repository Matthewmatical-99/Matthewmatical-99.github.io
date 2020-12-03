import React from 'react';
import * as R from 'ramda';

import useBooleanState from '../../../../hooks/useBooleanState';

import * as Styled from '../../styles';

const randomBit = R.pipe(Math.random, Math.round);

const confettiList = R.range(1, 69).map(val => ({
  colour: Math.random() * 360,
  rx: randomBit(),
  ry: randomBit(),
  rz: randomBit(),
  rspeed: Math.random() * 69 + 69,
  x: Math.random() * 100,
  y: 100 * Math.random(),
  y0: Math.random() * 69 + 100,
  key: `confetti${val}`,
  val,
  time: Math.random() * 3 + 4,
}));

const BirthdayConfetti = ({ children }) => {
  const visible = useBooleanState();

  return (
    <React.Fragment>
      <Styled.InlineHolder>
        {confettiList.map(confettiParams => (
          <Styled.Confetti {...confettiParams} isVisible={visible.state} />
        ))}
      </Styled.InlineHolder>
      <Styled.TextButton onClick={visible.toggle} style={{ zIndex: 42069 }}>{children}</Styled.TextButton>
    </React.Fragment>
  );
};

export default BirthdayConfetti;
