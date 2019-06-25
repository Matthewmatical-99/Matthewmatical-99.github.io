import styled from 'styled-components';

const chipColours = ['white', 'red', 'yellow'];

export const CFChip = styled.div`
  position: absolute;
  height: 4.2vw;
  width: 4.2vw;
  margin: 0.4vw;
  border-radius: 50%;
  background-color: ${props => chipColours[props.value]};
  display: ${props => props.value ? 'block' : 'none'};
  top: 0px;
  left: 0px;
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
