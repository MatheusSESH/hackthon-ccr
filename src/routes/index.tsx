import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Indications from '../pages/Indications/index';
import AboutUser from '../pages/AboutUser/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/indications" component={Indications} />
    <Route path="/about" component={AboutUser} />
  </Switch>
);

export default Routes;