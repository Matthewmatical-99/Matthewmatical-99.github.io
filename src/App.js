import React from 'react';
import Sanik from './components/sanik';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: 'url(https://imgur.com/kgbYeVO.jpg)' }}>
        <p>More content coming soon. Please come back tomorrow.</p>
        <a
          className="App-link"
          href="https://github.com/Matthewmatical-99"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub page
        </a>
        <Sanik />
      </header>
    </div>
  );
}

export default App;
