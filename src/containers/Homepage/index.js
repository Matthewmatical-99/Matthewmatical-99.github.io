import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sanik from '../../components/sanik';

import './index.css';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: 'url(https://imgur.com/kgbYeVO.jpg)' }}>
        <h1 className="page-title">Matthew Phillips' Website of Memes</h1>
      </header>
      <div className="content-body">
        <p>This is the official website of Matthew Phillips. Thank you for visiting.</p>
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
        <Link to="/elsewhere/">Router test</Link>
      </div>
      <Sanik />
    </div>
  );
}

export default Homepage;
