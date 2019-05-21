import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import pageRoutes from './constants/page-routes';

import Homepage from './containers/Homepage';
import ComingSoon from './containers/ComingSoon';
import NavBar from './components/NavBar';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header" style={{ backgroundImage: 'url(https://imgur.com/kgbYeVO.jpg)' }}>
        <h1 className="page-title">Matthew Phillips' Website of Dank Memes</h1>
      </header>
      <NavBar />
      <Route path={pageRoutes.HOMEPAGE} exact component={Homepage} />
      <Route path={pageRoutes.ABOUT_ME} component={ComingSoon} />
      <Route path={pageRoutes.GAMES} component={ComingSoon} />
      <Route path={pageRoutes.MEMES} component={ComingSoon} />
    </div>
  </Router>
);

export default App;
