import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class ListWorkouts extends React.Component {

  render() {
    console.log(this.props.workouts);
    return (
      <div>
        <h2>Lista av workouts!</h2>
        <p>Välj en workout för att komma vidare till den.</p>
        <ul>
          {
            this.props.workouts.map((workout) => {
              return (
                <li key={workout.id}>
                  <Link to={`workouts/workout/${workout.id}`}>{workout.name}</Link>
                  </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workouts: state.workouts
});

export default connect(mapStateToProps, undefined)(ListWorkouts);
