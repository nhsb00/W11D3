import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import { combineReducers } from "redux";

export default combineReducers ({
    users: usersReducer,
});

export default entitiesReducer;