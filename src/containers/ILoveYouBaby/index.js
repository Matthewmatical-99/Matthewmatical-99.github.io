import React from 'react';

import useBooleanState from '../../hooks/useBooleanState';
import LuckyPlayer from './components/luckyPlayer';
import AreYouOk from './components/areYouOk';

import * as Styled from './styles';

const ILoveYouBaby = () => {
  const luckyPlaying = useBooleanState();

  return (
    <React.Fragment>
      <div className="content-body-opaque">
        I'm so
        <Styled.TextButton onClick={luckyPlaying.toggle}>lucky</Styled.TextButton>
        to be yours, baby. I never knew true happiness until I met you.&nbsp;
        I know I ask if you're ok waaaaaayyyy too often, but it's just because I love you&nbsp;
        and I'm&nbsp;
        <AreYouOk />
      </div>
      <LuckyPlayer isPlaying={luckyPlaying.state} />
    </React.Fragment>
  );
};

export default ILoveYouBaby;
