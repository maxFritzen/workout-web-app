import React from 'react';
import { connect } from 'react-redux';
import { createWorkout } from '../actions';
import AddExercise from './AddExercise';
import Exercise from './Exercise';

class CreateWorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [null],//Behövs den här?
      nameWorkout: '',
      exercises: {
          "0" : {
          name: 'Bänk',
          id: '0',
          weight: null,
          sets: null,
          reps: null,
          rest:  null,
          notes: ''
        }
      },
      exerciseIDs :["0"]
    }
  };

  onNameWorkoutChange = (e) => {
    const value = event.target.value;
    this.setState({
      nameWorkout: value
    });
  };

  handleSaveExercise = (data) => {
    // Den här datan skickas från AddExercise, det är alltså input values
    console.log('handleSaveExercise data:' ,data);
    const generatedId = this.state.exerciseIDs.length.toString(); // CHANGE THIS LATER
    console.log('handleSaveExercise id:' ,generatedId);
    this.setState({
      exercises: {
        ...this.state.exercises,
        [generatedId]: {
          ...data,
          id: generatedId
        }
      }
    });
    if (!this.state.exerciseIDs.includes(generatedId)) {
      console.log('ID är inte tillagt, läggs till i exerciseIDs');
      this.setState({
        exerciseIDs: [...this.state.exerciseIDs, generatedId]
      });
    }
  };
  // handleSaveExercise = (data, id) => {
  //   // Den här datan skickas från AddExercise, det är alltså input values
  //   console.log(data, id);
  //   //const generatedId = this.state.exerciseIDs.length; // CHANGE THIS LATER
  //   this.setState({
  //     exercises: {
  //       ...this.state.exercises,
  //       [id]: data
  //     }
  //   });
  //   if (!this.state.exerciseIDs.includes(id)) {
  //     console.log('ID är inte tillagt, läggs till i exerciseIDs');
  //     this.setState({
  //       exerciseIDs: [...this.state.exerciseIDs, id]
  //     });
  //   }
  // };

  renderExercises = () => {
    const exerciseIDs = this.state.exerciseIDs;
    const newList = exerciseIDs.map((id) => {
      console.log('id : ' , id);
      const data = this.state.exercises[id];
        return (
          <li key={id}>
            <Exercise
              data={data}
              />
          </li>
        );
    });
    return newList;
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
  };
  // {this.state.exerciseIDs.map((id, index) => {
  //   return (
  //     <li key={index}>
  //       <AddExercise onClick={this.handleSaveExercise} id={index} />
  //     </li>
  //   );
  // })}
  render() {
    return (
      <div>
        <h3>Det här är CreateWorkoutPage</h3>
        <p>När onClick lägg till övning, läggs ytterligare inputs till men inte för Namn på workout</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Namn på workout"
            onChange={this.onNameWorkoutChange}
            value={this.state.nameWorkout}
            name="nameWorkout"
            />
          {this.renderExercises()}
          <AddExercise onClick={this.handleSaveExercise} />
          <input type="submit" value="Spara workout" />
        </form>
      </div>
    );
  };
};


const mapStateToProps = (state) => ({
  workouts: state.workouts
});

const mapDispatchToProps = (dispatch) => ({
  createWorkout: (workout) => dispatch(createWorkout(workout))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutPage);
