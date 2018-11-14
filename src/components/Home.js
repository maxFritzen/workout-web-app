import React from 'react';
import { Link } from "react-router-dom";
import ListWorkouts from './ListWorkouts';

const Home = () => (
  <div>
    <h1>Home page!!</h1>
    <p>Här visas lista av tillagda workouts och en Create Workout-button</p>
    <ListWorkouts />
    <Link to="/workouts/create"><button>Create new Workout</button></Link>
  </div>
);

export default Home;
