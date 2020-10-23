import styled from 'styled-components';
import { Button, Modal } from '@material-ui/core';
import * as R from 'ramda';

export const TextButton = styled(Button)`
  &&& {
    text-transform: none;
    color: purple;
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
