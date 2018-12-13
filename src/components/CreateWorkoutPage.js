import React from 'react';
import { connect } from 'react-redux';
import { createWorkout } from '../actions';
import AddExercise from './AddExercise';

class CreateWorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [null],//Behövs den här?
      nameWorkout: '',
      exercises: {
          "1" : {
          name: '',
          id: 1,
          weight: null,
          sets: null,
          reps: null,
          rest:  null,
          notes: ''
        }
      },
      exerciseIDs :["1"]
    }
  };

  onNameWorkoutChange = (e) => {
    const value = event.target.value;
    this.setState({
      nameWorkout: value
    });
  };

  handleSaveExercise = (data, id) => {
    // Den här datan skickas från AddExercise, det är alltså input values
    console.log(data, id);
    //const generatedId = this.state.exerciseIDs.length; // CHANGE THIS LATER
    this.setState({
      exercises: {
        ...this.state.exercises,
        [id]: data
      }
    });
    if (!this.state.exerciseIDs.includes(id)) {
      console.log('ID är inte tillagt, läggs till i exerciseIDs');
      this.setState({
        exerciseIDs: [...this.state.exerciseIDs, id]
      });
    }
  };

  renderNewAddQuestion = () => {
    // Should render new inputs
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
    this.props.createWorkout({
      name: this.state.nameWorkout,
      exercises: this.state.exercises
    });
  };

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
          {this.state.exerciseIDs.map((id, index) => {
            return (
              <li key={index}>
                <AddExercise onClick={this.handleSaveExercise} id={index} />
              </li>
            );
          })}
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
