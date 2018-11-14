import React from 'react';
import ListWorkouts from './ListWorkouts';

const Home = () => (
  <div>
    <h1>Home page!!</h1>
    <p>Här visas lista av tillagda workouts och en Create Workout-button</p>
    <ListWorkouts />
    <button>Create new Workout</button>
  </div>
);

export default Home;
