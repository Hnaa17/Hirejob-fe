const initialState = {
    workers: [],
    workerDetail: [],
    recruiters: [],
    recruiterDetail: [],
  };
  
  const profileReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_WORKER") {
      return {
        ...state,
        workers: action.payload
      };
    } else if (action.type === "GET_DETAIL_WORKER") {
      return {
        ...state,
        workerDetail: action.payload,
      };
    } else if(action.type === "UPDATE_WORKER_PROFILE"){
      return state;
    } else if(action.type === "UPLOAD_IMAGE_WORKER"){
        return state;
    } else if (action.type === "GET_ALL_RECRUITER") {
      return {
        ...state,
        recruiters: action.payload,
      };
    } else if(action.type === "GET_DETAIL_RECRUITER"){
      return {
        ...state,
        recruiterDetail: action.payload,
      }
    } else {
      return state;
    }
  };
  
export default profileReducer;