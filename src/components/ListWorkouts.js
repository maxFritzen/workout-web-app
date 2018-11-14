import React from 'react';
import { Link } from "react-router-dom";

const ListWorkouts = () => (
  <div>
    <h2>Lista av workouts!</h2>
    <p>Välj en workout för att komma vidare till den.</p>
    <ul>
      <li><Link to="workouts/workout/123">Workout 1</Link></li>
    </ul>
  </div>
);

export default ListWorkouts;
