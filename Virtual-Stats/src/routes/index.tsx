import React from 'react';
import { Switch } from 'react-router-dom';

import HomeAdm from '../pages/HomeAdm';
import Status from '../pages/Status';
import Login from '../pages/Login';
import ViewPatient from '../pages/ViewPatient';

import Route from './Route';
import FormPatient from '../pages/FormPatient';
import Historic from '../pages/Historic';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashboard" isPrivate component={HomeAdm} />

    <Route path="/status/:cod" exact isPrivate component={ViewPatient} />
    <Route path="/status/:cod/:id/edit" isPrivate component={Status} />

    <Route path="/patients/:cod/:id" isPrivate component={FormPatient} />
    <Route path="/historic/:cod" isPrivate component={Historic} />

    <Route component={FormPatient} />
  </Switch>
);

export default Routes;
