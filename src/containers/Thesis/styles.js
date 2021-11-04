import styled from 'styled-components';
import { Flex } from 'rebass';

export const ThesisHeaderContainer = styled(Flex)`
  flex: 1;
  position: relative;
  top: 0;
  left: 0;
`;

// Got sick of trying to figure out how to make images fit nicely.
// Enjoy all the evil hardcoded aspect ratios.
export const ThesisHeader = styled.img`
  height: ${() => 533100/7997}vw;
  width: 100vw;
`;

export const ThesisProgFrame = styled.img`
  width: 22vw;
  height: ${() => 2419*22/1709}vw;
  padding: 0 5vw;
  margin: 3vw 0;
`;

export const GridSpacer = styled.div`
  width: 35vw;
  height: ${() => 2419*22/1709}vw;
  padding: 0 5vw 0 24vw;
  margin: 3vw 0;
  display: flex;
  text-align: left;
`;

export const GridCaption = styled.p`
  opacity: 1;
  font-family: "Syne";
  margin-top: auto;
  font-size: 0.825vw;
`;

export const ImagesRow = styled(Flex)`
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 2vw;
  position: relative;
`;

export const ThesisFirstTitleContainer = styled.div`
  width: 100vw;
  height: 40vw;
  display: flex;
  flex: 1;
  alignItems: center;
  alignContent: center;
  justifyContent: center;
`;

export const ThesisFirstTitle = styled.svg`
  width: 80vw;
  height: 16vw;
  margin: 10vw 12vw;
`;

export const ThesisSecondImage = styled.img`
  width: 100vw;
  height: 52.5vw;
  margin: 0;
  padding: 0;
`;

export const HoriSpacer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vw;
`;

export const VideoBackground = styled.div`
  width: 88vw;
  height: 69vw;
  background-color: #100c0c;
  padding: 0 6vw;
  display: flex;
  flex: 1;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
`;

export const SideText = styled.p`
  width: 20vw;
  margin: auto;
  font-family: "Syne";
  font-size: 0.825vw;
  text-align: left;
  color: #FFFFFF;
`;

export const BottomImage = styled.img`
  width: 100vw;
  height: 150vw;
`;

export const ThesisSecondTitle = styled.svg`
  width: 112vw;
  z-index: -1;
  position: absolute;
  top: -38vw;
  left: -6vw;
`;

export const BottomText = styled.p`
  text-align: center;
  margin: auto;
  width: 55vw;
  color: #FFFFFF;
  font-family: "Syne";
  font-size: 0.825vw;
`;

export const BottomTextBackground = styled.div`
  width: 88vw;
  min-height: 25vw;
  background-color: #100c0c;
  padding: 0 6vw;
  display: flex;
  flex: 1;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CreditsBackground = styled.div`
  width: 100vw;
  min-height: 25vw;
  background-color: #100c0c;
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpecialThanks = styled.img`
  width: 20vw;
  height: 5vw;
  margin: 10vw 70vw 2vw 10vw;
`;
export const NameList = styled.img`
  width: 15vw;
  height: 20vw;
  margin: 0 75vw 0 10vw;
`;
export const Meanism = styled.img`
  width: 15vw;
  height: 5vw;
  margin: 0 10vw 5vw 75vw;
`;

export const Indicator = styled.img`
  width: 100vw;
`;

export const Numbers = styled.img`
  width: 60vw;
  height: 2vw;
  margin: 1vw 16.5vw 5vw 23.5vw;
`

export const CloudSoundCloud = styled.div`
  width: 100vw;
  height: 43.63vw;
  position: relative;
  top: 0;
  left: 0;
`;

export const CloudSoundBackground = styled.img`
  width: 100vw;
  height: 43.63vw;
`;

export const CloudButt = styled.img`
  width: 18vw;
  height: 6vw;
  position: absolute;
  top: 18.5vw;
  right: 18vw;
`;
