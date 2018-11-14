import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import workouts from '../reducers/workouts';
import exercises from '../reducers/exercises';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      workouts,
      exercises
    }),
  composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
