import { CREATE_WORKOUT } from '../actions';

const initialState =[
  {
    id: 123,
    name: "Workout1",
    exercises: [1,31,3]
  }
];

export default(state = initialState, action) => {
  switch(action.type) {
    case CREATE_WORKOUT:
    const { id, name, exercises } = action.workout;
      return [
        ...state,
        {
          id, 
          name,
          exercises
        }
      ];
    default:
      return state;
  }
};
