import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../componets/auth/LoginScreen';
import { CalendarScreen } from '../componets/calendar/CalendarScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={CalendarScreen} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
