export const CREATE_WORKOUT = "CREATE_WORKOUT";

export const createWorkout = (workout = {}) => {
  return {
    type: CREATE_WORKOUT,
    workout
  }
};
