import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './App.css';

const Header = () => {
  const title =  'Zoey\'s Website of Dank Memes';
  const backgroundImage = 'https://imgur.com/kgbYeVO.jpg';

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
