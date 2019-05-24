import styled from 'styled-components';

export const Cell = styled.div`
  min-height: 10px;
  min-width: 10px;
  max-height: 10px;
  max-width: 10px;
  background-color: ${props => props.hall ? 'white' : 'black'};
  opacity: 0.8;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Chunk = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  overflow: auto;

  @media (max-width: ${props => props.mazeWidth * 10}px) {
    align-self: flex-start;
  }
`;

export const MazeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
