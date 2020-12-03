import React from 'react';

import useBooleanState from '../../hooks/useBooleanState';
import LuckyPlayer from './components/LuckyPlayer';
import AreYouOk from './components/AreYouOk';
import RaccoonFace from './components/RaccoonFace';
import BirthdayConfetti from './components/BirthdayConfetti';
import FacesTogether from './components/FacesTogether';
import RaccoonEatingMarshmallow from './components/RaccoonEatingMarshmallow';
import RickRoll from './components/RickRoll';

import * as Styled from './styles';

const ILoveYouBaby = () => {
  const luckyPlaying = useBooleanState();
  const raccoonShowing = useBooleanState();

  return (
    <React.Fragment>
      <div className="content-body-ily">
        Happy 21st 
        <BirthdayConfetti>birthday</BirthdayConfetti>
        ,&nbsp;
        <RaccoonEatingMarshmallow>marshmallow</RaccoonEatingMarshmallow>
        !!! I'm so
        <Styled.TextButton onClick={luckyPlaying.toggle}>lucky</Styled.TextButton>
        to be yours, baby. I never knew true happiness until I met you.
        I know I ask if you're ok&nbsp;
        <AreYouOk>waaaaaayyyy</AreYouOk>
        &nbsp;too often, but it's just because I love you
        and I'm worried about you.
        I'll always be there for you, no matter what happens.
        I'm looking forward to celebrating many more of our birthdays&nbsp;
        <FacesTogether>together</FacesTogether>.
        We're going to make so many wonderful&nbsp;
        <a
          className="no-underline"
          href="https://photos.app.goo.gl/AuHumX7Yh2cHn3HCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Styled.TextButton>
            memories
          </Styled.TextButton>
        .&nbsp;
        </a>
        I'll
        <RickRoll>never</RickRoll>
        let you go, sweetheart.
        <br />
        <br />
        -Love, your
        <Styled.TextButton onClick={raccoonShowing.toggle}>
          {raccoonShowing.state ? <RaccoonFace /> : "raccoon"}
        </Styled.TextButton>
      </div>
      <LuckyPlayer isPlaying={luckyPlaying.state} />
    </React.Fragment>
  );
};

export default ILoveYouBaby;
