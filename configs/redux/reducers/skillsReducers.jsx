const initialState = {
    skills: [],
  };
  
  const skillReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_SKILL") {
      return {
        ...state,
        skills: action.payload
      };
    } else if (action.type === "GET_DETAIL_SKILL") {
      return {
        ...state,
        skills: action.payload,
      };
    } else {
      return state;
    }
  };
  
export default skillReducer;