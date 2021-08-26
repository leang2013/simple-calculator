import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';

const Routing = () => (
  <Router>
    <div>
      {
                Object.keys(routes).map((route) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <Route {...routes[route]} kkey={routes[route].id} />
                ))
            }
    </div>
  </Router>
);

export default Routing;
