import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  min-width: 80vw;
  justify-content: center;
`;

export const NavButton = styled.div`
  height: 70px;
  width: 120px;
  background-color: #282c34;
  color: white;
  text-align: center;
  line-height: 70px;
  border: 2px solid #505868;
  :hover {
    background-color: #505868;
  }
  text-decoration-line: none;
`;
