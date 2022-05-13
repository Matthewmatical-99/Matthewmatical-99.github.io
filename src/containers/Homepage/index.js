import React from 'react';
import CollatzPhoneInput from '../../components/CollatzPhoneInput';

import Sanik from '../../components/Sanik';

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
        <p>Check out this very user-friendly phone-number input!</p>
        <CollatzPhoneInput />
      </div>
      <Sanik />
    </div>
  );
}

export default Homepage;
