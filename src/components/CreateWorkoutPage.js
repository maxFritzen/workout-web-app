import React from 'react';
import AddExercise from './AddExercise';

const CreateWorkoutPage = () => (
  <div>
    <h3>Det här är CreateWorkoutPage</h3>
    <p>När onClick lägg till övning, läggs ytterligare inputs till men inte för Namn på workout</p>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value="Namn på workout" />

      <AddExercise />
      <button>Lägg till övning</button>

      <input type="submit" value="Spara workout" />
    </form>
  </div>
);

export default CreateWorkoutPage;
