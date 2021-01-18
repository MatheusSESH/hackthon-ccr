import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing/index';
import Dashboard from '../pages/Dashboard/index';
import Indications from '../pages/Indications/index';
import AboutUser from '../pages/AboutUser/index';
import Robot from '../pages/Robot/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/indications" component={Indications} />
    <Route path="/about" component={AboutUser} />
    <Route path="/robot" component={Robot} />
  </Switch>
);

export default Routes;