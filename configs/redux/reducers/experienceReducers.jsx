const initialState = {
    experience: [],
    experienceDetail: []
  };
  
  const experienceReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_EXPERIENCE") {
      return {
        ...state,
        experience: action.payload
      };
    } else if (action.type === "GET_DETAIL_EXPERIENCE") {
      return {
        ...state,
        experienceDetail: action.payload
      };
    } else if(action.type === "CREATE_EXPERIENCE"){
      return state;
    } else if(action.type === "UPDATE_EXPERIENCE"){
      return state;
    } else {
      return state;
    }
  };
  
export default experienceReducer;