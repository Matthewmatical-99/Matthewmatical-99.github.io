import styled from 'styled-components';

export const FrogWrapper = styled.div`
  position: fixed;
  bottom: 0px;
`;

export const Froggo = styled.img`
  max-height: 15vh;
  max-width: 10vw;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s;
`;

export const FrogControl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
