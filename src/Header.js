import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import pageRoutes from './constants/page-routes';

import './App.css';

const Header = ({ location }) => {
  const onILoveYouPage = (location.pathname === pageRoutes.I_LOVE_YOU);
  
  const title = onILoveYouPage ? 'I love you, babie <3' : 'Zoey\'s Website of Dank Memes';
  const backgroundImage = onILoveYouPage
    ? 'https://media.istockphoto.com/photos/heart-bokeh-background-picture-id508495114?k=6&m=508495114&s=612x612&w=0&h=v_eH62lNY9sOhKIk97L_uksL4IcCtywehHwGEYTaJaM='
    : 'https://imgur.com/kgbYeVO.jpg';

  return (
    <header className="App-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="page-title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.shape({}),
};

export default withRouter(Header);
