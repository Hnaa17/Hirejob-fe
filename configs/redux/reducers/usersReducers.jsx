import { ActionTypes } from "../constant/action-types";
const initialState = {
    users: [],
    isLoading : false
};

const inisial = {
    users: [],
    pagination: {
        currentPage: 0,
        dataPerPage: 0,
        totalData: 0,
        totalPage: 0,
    },
    error: null,
}

export const updateUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.UPDATE_USERS:
            return { ...state, user : payload.data.data };
        default: 
            return state;
    }
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_USERS:
        return { ...state, ...payload };
      default:
        return state;
    }
};

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_USER:
        return { ...state, user: payload };
      default:
        return state;
    }
};

export const userReducer = (state = inisial, action) => {
    switch (action.type) {
      case ActionTypes.GET_USERS_PENDING:
        return {
          ...state,
          isLoading: true,
        };
      case ActionTypes.GET_USERS_SUCCESS: {
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        };
      }
      case ActionTypes.GET_USERS_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
};

export const DeleteUserReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case ActionTypes.DELETE_USERS:
        return { ...state, user: payload.data.data };
      default:
        return state;
    }
};