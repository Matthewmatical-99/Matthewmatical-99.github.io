import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-next-line no-unused-vars
import { withRouter, Route } from 'react-router-dom';

import pageRoutes from './constants/page-routes';
import Homepage from './containers/Homepage';
import ComingSoon from './containers/ComingSoon';
import Games from './containers/GamesPage';
import MemesPage from './containers/MemesPage';
import ILoveYouBaby from './containers/ILoveYouBaby';
import NavBar from './components/NavBar';

import './App.css';

const Routes = ({ location }) => {
  const onILoveYouPage = (location.pathname === pageRoutes.I_LOVE_YOU);
  
  const title = onILoveYouPage ? 'I love you, babie <3' : 'Matthew Phillips\' Website of Dank Memes';
  const backgroundImage = onILoveYouPage
    ? 'https://media.istockphoto.com/photos/heart-bokeh-background-picture-id508495114?k=6&m=508495114&s=612x612&w=0&h=v_eH62lNY9sOhKIk97L_uksL4IcCtywehHwGEYTaJaM='
    : 'https://imgur.com/kgbYeVO.jpg';
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="App-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="page-title">{title}</h1>
      </header>
      <NavBar />
      <Route path={pageRoutes.HOMEPAGE} exact component={Homepage} />
      <Route path={pageRoutes.ABOUT_ME} component={ComingSoon} />
      <Route path={pageRoutes.GAMES} component={Games} />
      <Route path={pageRoutes.MEMES} component={MemesPage} />
      <Route path={pageRoutes.I_LOVE_YOU} component={ILoveYouBaby} />
    </div>
  );
};

Routes.propTypes = {
  location: PropTypes.shape({}),
};

export default withRouter(Routes);
