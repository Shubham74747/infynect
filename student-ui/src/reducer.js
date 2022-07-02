const initialState = {
  students: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_STUDENTS": {
      return {
        ...state,
        students: action.data,
      };
    }
    default:
      return state;
  }
}
