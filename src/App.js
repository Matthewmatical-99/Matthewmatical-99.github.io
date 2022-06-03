import React from 'react'; // eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import './App.css';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
