import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from '../components/Layout';

import Calendar from './Calendar';
import Goals from './Goals';
import Tasks from './Tasks';

export default function Routes() {
  return (<Router>
    <Layout>
      <Switch>
        <Route path={"/goals" || "/"}>
          <Goals />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
      </Switch>
    </Layout>
  </Router>)
}