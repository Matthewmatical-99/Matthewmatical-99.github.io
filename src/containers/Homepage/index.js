import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sanik from '../../components/Sanik';
import pageRoutes from '../../constants/page-routes';

import './index.css';

function Homepage() {
  return (
    <div>
      <div className="content-body">
        <p>This is the official website of Matthew Phillips. Thank you for visiting.</p>
        <p>I made this website to show off my l33t c0d1ng ski11z.</p>
        <p>Since I've just started working on this, there isn't much here.</p>
        <p>More content (and maybe even some professionalism) coming soon. Please check again tomorrow.</p>
        <a
          className="App-link"
          href="https://github.com/Matthewmatical-99"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub page
        </a>
      </div>
      <Sanik />
    </div>
  );
}

export default Homepage;
