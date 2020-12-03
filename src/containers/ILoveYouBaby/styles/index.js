import styled from 'styled-components';
import { Button, Modal } from '@material-ui/core';
import * as R from 'ramda';

export const TextButton = styled(Button)`
  &&& {
    text-transform: none;
    color: #00FF00;
    font-weight: bold;
    margin: 0;
    padding: 0;
    position: relative;
  }
`;

export const CentredModal = styled(Modal)`
  &&& {
    alignItems: center;
    alignContent: center;
    justifyContent: center;
    flex: 1;
    height: 100%;
  }
`;

export const AreYouOk = styled.p`
  @keyframes appear {
    from {opacity: 0;}
    to {opacity: 42069;}
  }
  color: white;
  font-family: "Comic Sans MS", cursive, sans-serif;
  transform: translate(${R.prop('x')}vw, ${R.prop('y')}vh) rotate(${R.prop('angle')}deg);
  animation: appear 1ms ease ${R.prop('delay')}ms 1 normal both;
  position: absolute;
  font-size: 69px;
`;

export const MessagesMount = styled.div`
  position: absolute;
  height: 0;
  width: 420px;
`;

const visibility = R.pipe(R.prop('isVisible'), R.multiply(30));
const aboveScreen = R.pipe(R.prop('y0'), R.add(10));
const belowScreen = ({ y, y0 }) => 2 * y + y0 + 10;
const rotationParams = factor => ({ rx, ry, rz, rspeed }) => `${rx}, ${ry}, ${rz}, ${rspeed * factor}deg`;

export const Confetti = styled.div`
  @keyframes goodTrick${R.prop('val')} {
    0% {top: -${aboveScreen}vh; transform: rotate3d(${rotationParams(0)});}
    50% {top: ${R.prop('y')}vh; transform: rotate3d(${rotationParams(5)});}
    100% {top: ${belowScreen}vh; transform: rotate3d(${rotationParams(10)});}
  }

  position: fixed;
  height: ${visibility}px;
  width: ${visibility}px;
  background-color: hsl(${R.prop('colour')}, 100%, 50%);
  left: ${R.prop('x')}vw;
  animation: goodTrick${R.prop('val')} ${R.prop('time')}s linear 0s infinite normal both;
`;

export const InlineHolder = styled.div`
  width: 0;
  height: 0;
  display: inline;
`;

const faceStyles = () => `
  position: fixed;
  height: 200px;
  width: 200px;
`;

export const BottomRightFace = styled.img`
  ${faceStyles}
  bottom: -200px;
  right: -200px;
  @keyframes brFaceMoveIn {
    0% {bottom: -200px; right: -200px;}
    100% {bottom: calc(50vh - 100px); right: calc(50vw - 100px);}
  }
  animation: brFaceMoveIn 1s linear 0s 1 normal none;
`;

export const TopLeftFace = styled.img`
  ${faceStyles}
  top: -200px;
  left: -200px;
  @keyframes tlFaceMoveIn {
    from {top: -200px; left: -200px;}
    to {top: calc(50vh - 100px); left: calc(50vw - 100px);}
  }
  animation: tlFaceMoveIn 1s linear 0s 1 normal none;
`;

export const MiddleHeart = styled.img`
  width: 0px;
  height: 0px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  @keyframes faceVore {
    0% {width: 0px; height: 0px; top: 50vh; left: 50vw;}
    100% {width: 840px; height: 840px; top: calc(50vh - 420px); left: calc(50vw - 420px);}
  }
  animation: faceVore 0.4s linear 0.6s 2 alternate both;
  z-index: 69420;
`;
