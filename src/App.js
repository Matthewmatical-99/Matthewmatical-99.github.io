import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Homepage from './containers/Homepage';

const testPage = () => (
  <div>
    <p>
      This is on a different page. Neato.
    </p>
    <Link to="/">Back to Homepage</Link>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Homepage} />
      <Route path="/elsewhere/" component={testPage} />
    </div>
  </Router>
);

export default App;
