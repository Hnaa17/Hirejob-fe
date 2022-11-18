const initialState = {
    portfolio: [],
    portfolioDetail: []
  };
  
  const portfolioReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_PORTFOLIO") {
      return {
        ...state,
        portfolio: action.payload
      };
    } else if (action.type === "GET_DETAIL_PORTFOLIO") {
      return {
        ...state,
        portfolioDetail: action.payload
      };
    } else if(action.type === "CREATE_PORTFOLIO"){
      return state;
    } else if(action.type === "UPDATE_PORTFOLIO"){
      return state;
    } else {
      return state;
    }
  };
  
export default portfolioReducer;