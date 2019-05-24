import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import pageRoutes from '../../constants/page-routes';

const ComingSoon = () => (
  <div>
    <p style={{ color: 'white' }}>This page is coming soon. Don't hold your breath.</p>
    <Link to={pageRoutes.HOMEPAGE} style={{ color: '#61dafb' }}>Back to homepage</Link>
  </div>
);

export default ComingSoon;
