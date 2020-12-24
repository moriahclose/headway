import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from '../components/Layout';

import Login from './Login';
import Calendar from './Calendar';
import Goals from './Goals';
import Tasks from './Tasks';

export default function Routes() {
  return (<Router>
    <Switch>
      <Route path={/login|signup/g}>
        <Login />
      </Route>
      <Layout>
        <Route path="/goals/:goalID">
          <Goals />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
      </Layout>
    </Switch>
  </Router>)
}