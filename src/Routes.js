import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-next-line no-unused-vars
import { withRouter, Route } from 'react-router-dom';

import pageRoutes from './constants/page-routes';
import Homepage from './containers/Homepage';
import AboutMePage from './containers/AboutMePage';
import Games from './containers/GamesPage';
import MemesPage from './containers/MemesPage';
import NavBar from './components/NavBar';

import './App.css';

const Routes = () => {
  const title = 'Zoey\'s Website of Dank Memes';
  const backgroundImage = 'https://imgur.com/kgbYeVO.jpg';
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="App-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="page-title">{title}</h1>
      </header>
      <NavBar />
      <Route path={pageRoutes.HOMEPAGE} exact component={Homepage} />
      <Route path={pageRoutes.ABOUT_ME} component={AboutMePage} />
      <Route path={pageRoutes.GAMES} component={Games} />
      <Route path={pageRoutes.MEMES} component={MemesPage} />
    </div>
  );
};

Routes.propTypes = {
  location: PropTypes.shape({}),
};

export default withRouter(Routes);
