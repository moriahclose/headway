import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {UserProvider} from "../contexts/user";

import Layout from '../components/Layout';

import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Home from './Home';
import Calendar from './Calendar';
import Goals from './Goals';
import Tasks from './Tasks';

export default function Routes() {

  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route path={"/users/login"}>
            <Login />
          </Route>
          <Route path={"/users/signup"}>
            <SignUp />
          </Route>
          <Layout>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/goals/:goalId">
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