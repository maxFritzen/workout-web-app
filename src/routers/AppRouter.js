import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../components/Home';
import WorkoutPage from '../components/WorkoutPage';
import CreateWorkoutPage from '../components/CreateWorkoutPage';
import Header from '../components/Header';

const NotFoundPage = () => (
  <div>
    <h1>Page not found. <Link to="/">Go backhome</Link></h1>
  </div>
);

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/workout/:id" component={WorkoutPage} />
        <Route path="/workout/create" component={CreateWorkoutPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
