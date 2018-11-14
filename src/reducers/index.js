import { combineReducers } from 'redux';
import workouts from '../reducers/workouts';
import exercises from '../reducers/exercises';

const rootReducer = combineReducers({
  workouts,
  exercises
});

export default rootReducer;
