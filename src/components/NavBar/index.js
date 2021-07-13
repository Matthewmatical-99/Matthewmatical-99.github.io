import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import pageRoutes from '../../constants/page-routes';
import * as Styled from './styles';

const NavBar = () => (
  <Styled.NavBarWrapper>
    <Styled.NavBar>
      <Link to={pageRoutes.HOMEPAGE}>
        <Styled.NavButton>Home</Styled.NavButton>
      </Link>
      <Link to={pageRoutes.ABOUT_ME}>
        <Styled.NavButton>About Me</Styled.NavButton>
      </Link>
      <Link to={pageRoutes.GAMES}>
        <Styled.NavButton>Games</Styled.NavButton>
      </Link>
      <Link to={pageRoutes.MEMES}>
        <Styled.NavButton>Memes</Styled.NavButton>
      </Link>
      <Link to={pageRoutes.I_LOVE_YOU}>
        <Styled.NavButton>I love you</Styled.NavButton>
      </Link>
      <Link to={pageRoutes.THESIS}>
        <Styled.NavButton>Thesis</Styled.NavButton>
      </Link>
    </Styled.NavBar>
  </Styled.NavBarWrapper>
);

export default NavBar;
