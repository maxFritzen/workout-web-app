import { CREATE_WORKOUT } from '../actions';

const initialState =[
  {
    name: "Workout1",
    exercises: [1,31,3]
  }
];

export default(state = initialState, action) => {
  switch(action.type) {
    case CREATE_WORKOUT:
    const { name, exercises } = action.workout;
      return [
        ...state,
        {
          name,
          exercises
        }
      ];
    default:
      return state;
  }
};
