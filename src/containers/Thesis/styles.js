import styled from 'styled-components';
import { Flex } from 'rebass';

export const ThesisHeaderContainer = styled(Flex)`
  flex: 1;
`;

// Got sick of trying to figure out how to make the image fit nicely.
// Enjoy the evil hardcoded aspect ratio.
export const ThesisHeader = styled.img`
  height: ${() => 533100/7997}vw;
  width: 100vw;
`;

export const TestImg = styled.img`
  width: 22vw;
  height: ${() => 2419*22/1709}vw;
  padding: 0 5vw;
  margin: 3vw auto;
`;

export const GridSpacer = styled.div`
  width: 22vw;
  height: ${() => 2419*22/1709}vw;
  padding: 0 5vw;
  margin: 3vw auto;
  opacity: 0;
`;

export const ImagesRow = styled(Flex)`
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 2vw;
  position: relative;
`;

export const ThesisBigBlackTitle = styled.img`
  width: 110vw;
  height: 160vw;
  z-index: -1;
  position: absolute;
  top: -5vw;
  left: 0;
  overflow: hidden;
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
  z-index: 69;
`;

export const HoriSpacer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vw;
`;

export const VideoBackground = styled.div`
  width: 100vw;
  height: 69vw;
  background-color: #100c0c;
`;

export const BottomImage = styled.img`
  width: 100vw;
  height: 150vw;
`;
