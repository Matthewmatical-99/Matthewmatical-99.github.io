import styled from 'styled-components';

const chipColours = ['white', 'red', 'yellow'];

export const ChipWrapper = styled.div`
  @keyframes dropIn {
    from { top: ${props => (props.dropHeight * -5)}vw; }
    to: { top: 0px; }
  }

  position: absolute;
  height: 4.2vw;
  width: 4.2vw;
  margin: 0.4vw;
  top: 0px;
  left: 0px;
  animation: dropIn 0.6s ease-in 0s 1 normal forwards ${props => props.value ? 'running' : 'paused'};
`;

export const CFChip = styled.div`
  @keyframes yeet {
    from { top: 0px; }
    to { top: calc(100vh + 30vw); }
  }

  position: absolute;
  height: 4.2vw;
  width: 4.2vw;
  border-radius: 50%;
  background-color: ${props => chipColours[props.value]};
  top: 0px;
  left: 0px;
  display: ${props => props.value ? 'block' : 'none'};
  animation: yeet 1s ease-in 0s 1 normal forwards ${props => props.yeet ? 'running' : 'paused'};
`;

export const CFCellWrapper = styled.div`
  height: ${props => (props.width / 20)}px;
  width: ${props => (props.width / 20)}px;
  position: relative;
  top: 0px;
  left: 0px;
`;

export const CFGridPiece = styled.svg`
  z-index: 69;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const CFGridHole = styled.circle`
  cx: 50%;
  cy: 50%;
  r: 57%;
  stroke: blue;
  stroke-width: 30%;
  fill: none;
`;
