import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';

// vercel env ls
// to lookup Env keys

ReactDOM.render(
  // Remove StrictMode to remove warnings.
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
