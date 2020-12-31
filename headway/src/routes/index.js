import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {UserProvider} from "../contexts/user";

import Layout from '../components/Layout';

import Login from './Login';
import Register from './Register';
import Calendar from './Calendar';
import Goals from './Goals';
import Tasks from './Tasks';

export default function Routes() {

  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/register"}>
            <Register />
          </Route>
          <Layout>
            <Route path="/goals">
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
      </UserProvider>
    </Router>
  )
}