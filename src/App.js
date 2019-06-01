import React from 'react'; // eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import pageRoutes from './constants/page-routes';

import rootReducer from './reducers';
import Homepage from './containers/Homepage';
import ComingSoon from './containers/ComingSoon';
import Games from './containers/GamesPage';
import NavBar from './components/NavBar';

import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header" style={{ backgroundImage: 'url(https://imgur.com/kgbYeVO.jpg)' }}>
          <h1 className="page-title">Matthew Phillips' Website of Dank Memes</h1>
        </header>
        <NavBar />
        <Route path={pageRoutes.HOMEPAGE} exact component={Homepage} />
        <Route path={pageRoutes.ABOUT_ME} component={ComingSoon} />
        <Route path={pageRoutes.GAMES} component={Games} />
        <Route path={pageRoutes.MEMES} component={ComingSoon} />
      </div>
    </Router>
  </Provider>
);

export default App;
