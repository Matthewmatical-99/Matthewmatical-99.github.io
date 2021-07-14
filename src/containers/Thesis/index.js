import React from 'react';
import ReactPlayer from 'react-player';
import { Flex } from 'rebass';
import useSound from 'use-sound';

import { topText, leftText, rightText, bottomText } from './texts';
import FloatIn from '../../components/FloatIn';
import MuteButton from '../../components/MuteButton';
import FirstTitle from './FirstTitle';
import SecondTitle from './SecondTitle';

import thesisHeaderImg from './assets/header_smol.png';
import thesisSecondImg from './assets/second_image.svg';
import thesisFrames from './assets/frames';
import bottomImage from './assets/bottom_image_smol.png';
import progVideo from './assets/progression_smol.mp4';
import roomVideo from './assets/room_smol.mp4';

import ThesisSong from './assets/through.mp3';

import useBooleanState from '../../hooks/useBooleanState';

import * as Styled from './styles';

const Thesis = () => {
  const [play, { sound, pause }] = useSound(ThesisSong, { loop: true, autoplay: true });
  const muted = useBooleanState(true);

  const pauseResume = () => {
    if (sound.playing()) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    sound.mute(!muted.state);
    muted.toggle();
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      flex={1}
    >
      <MuteButton toggleMute={toggleMute} mutedState={muted.state} />
      <Styled.ThesisHeaderContainer>
        <Styled.ThesisHeader src={thesisHeaderImg} />
        <ReactPlayer
          url={roomVideo}
          width="100vw"
          height="56.25vw"
          volume={0}
          playing
          muted
          loop
          style={{
            margin: '0',
            position: 'absolute',
            left: '0',
            top: '2vw',
          }}
        />
      </Styled.ThesisHeaderContainer>
      <FirstTitle />
      <Flex flex={1}>
        <Styled.ThesisSecondImage src={thesisSecondImg} />
      </Flex>
      <Styled.HoriSpacer>
        <SecondTitle />
      </Styled.HoriSpacer>
      <Styled.ImagesRow>
        <FloatIn key="thesis-frame-1" delay="500ms">
          <Styled.ThesisProgFrame src={thesisFrames[0]} />
        </FloatIn>
        <FloatIn key="thesis-frame-2" delay="1000ms">
          <Styled.ThesisProgFrame src={thesisFrames[1]} />
        </FloatIn>
        <FloatIn key="thesis-frame-3" delay="1500ms">
          <Styled.ThesisProgFrame src={thesisFrames[2]} />
        </FloatIn>
      </Styled.ImagesRow>
      <Styled.ImagesRow>
        <FloatIn key="thesis-frame-4" delay="500ms">
          <Styled.ThesisProgFrame src={thesisFrames[3]} />
        </FloatIn>
        <FloatIn key="thesis-frame-5" delay="1000ms">
          <Styled.ThesisProgFrame src={thesisFrames[4]} />
        </FloatIn>
        <FloatIn key="thesis-frame-6" delay="1500ms">
          <Styled.ThesisProgFrame src={thesisFrames[5]} />
        </FloatIn>
      </Styled.ImagesRow>
      <Styled.ImagesRow>
        <FloatIn key="thesis-frame-7" delay="500ms">
          <Styled.ThesisProgFrame src={thesisFrames[6]} />
        </FloatIn>
        <Styled.GridSpacer>
          <FloatIn delay="1250ms">
            <Styled.GridCaption>{topText}</Styled.GridCaption>
          </FloatIn>
        </Styled.GridSpacer>
      </Styled.ImagesRow>
      <Styled.HoriSpacer />
      <Styled.VideoBackground>
        <Styled.SideText>{leftText}</Styled.SideText>
        <ReactPlayer
          url={progVideo}
          width="40vw"
          height="50vw"
          volume={0}
          playing
          muted
          loop
          style={{ margin: 'auto' }}
        />
        <Styled.SideText>{rightText}</Styled.SideText>
      </Styled.VideoBackground>
      <Flex flex={1}>
        <Styled.BottomImage src={bottomImage} />
      </Flex>
      <Styled.BottomTextBackground>
        <Styled.BottomText>{bottomText}</Styled.BottomText>
      </Styled.BottomTextBackground>
    </Flex>
  );
};

export default Thesis;
