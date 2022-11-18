import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { usersReducer, updateUserReducer, selectedUserReducer, userReducer, DeleteUserReducer  } from "./usersReducers";
import profileReducer from "./profileReducers";
import skillReducer from "./skillsReducers";
import experienceReducer from "./experienceReducers";
import portfolioReducer from "./portfolioReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    allUsers: usersReducer,
    users: userReducer,
    deleteUser: DeleteUserReducer,
    user: selectedUserReducer,
    updateUser: updateUserReducer,
    profile: profileReducer,
    skills: skillReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer,
});

export default rootReducer;