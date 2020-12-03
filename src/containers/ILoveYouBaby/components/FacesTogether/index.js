import React from 'react';

import MyFace from '../../../../assets/myFace.png';
import BabieFace from '../../../../assets/bbFace.png';
import Heart from '../../../../assets/heart.png';
import useBooleanState from '../../../../hooks/useBooleanState';

import * as Styled from '../../styles';

const FacesTogether = ({ children }) => {
  const visible = useBooleanState();

  const startFaces = () => {
    console.log(visible);
    if (!visible.state) {
      visible.setTrue();
      setTimeout(visible.setFalse, 1400);
    }
  };

  return (
    <React.Fragment>
      {visible.state ? (
        <Styled.InlineHolder>
          <Styled.TopLeftFace src={MyFace} />
          <Styled.BottomRightFace src={BabieFace} />
          <Styled.MiddleHeart src={Heart} />
        </Styled.InlineHolder>
      ) : null}
      <Styled.TextButton onClick={startFaces}>
        {children}
      </Styled.TextButton>
    </React.Fragment>
  );
};

export default FacesTogether;
