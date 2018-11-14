import React from 'react';

const Exercise = ({name, weight, sets, reps, rest}) => (
  <div>
    <h3>Det här är Exercise: {name}</h3>
    <ul>
      <li>Vikt: {weight}</li>
      <li>Sets: {sets}</li>
      <li>Reps: {reps}</li>
      <li>Vila: {rest}</li>
    </ul>
  </div>

);

export default Exercise;
