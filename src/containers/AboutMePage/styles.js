import styled from 'styled-components';
import { Flex } from 'rebass';

export const AMPImage = styled.img`
  width: 25vw;
  max-height: 25vw;
  object-fit: contain;
  @media (max-width: 690px) {
    width: 69vw;
    max-height: 69vw;
  }
  @media (min-width: 690px) and (max-width: 1000px) {
    width: 40vw;
    max-height: 40vw;
  }
`;

// Goes around a FloatIn to make it work with flex-wrap
export const ImageWrapper = styled.div`
  width: 25vw;
  max-height: 25vw;
  margin: 1vw;
  @media (max-width: 690px) {
    width: 69vw;
    max-height: 69vw;
    margin: 1vw 0px;
  }
  @media (min-width: 690px) and (max-width: 1000px) {
    width: 40vw;
    max-height: 40vw;
    margin: 1vw 0px;
  }
`;

export const ContentList = styled(Flex)`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  &&&&& {
    margin: 3vw auto 0px;
  }
`;

export const Textbox = styled(Flex)`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #D985AA;
  padding: 20px;
`;
