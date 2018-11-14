import React from 'react';
import Exercise from './Exercise';

const WorkoutPage = ({match}) => (
  <div>
    <h3>Det här är WorkoutPage som visar valda workouten</h3>
    <p>Här visas övningarna i detta passet</p>
    <p>Valt pass: {match.params.id}</p>
    <ul>
      <Exercise
          name="Bänk"
          weight="70"
          sets="3"
          reps="5"
        />
      <Exercise
        name="Mark"
        weight="100"
        sets="3"
        reps="3"
        />
        <Exercise
          name="Benpress"
          weight="60"
          sets="3"
          reps="120"
          />
    </ul>
  </div>
);

export default WorkoutPage;
