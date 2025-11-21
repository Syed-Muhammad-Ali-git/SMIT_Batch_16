// Main reducer file...!

import { combineReducers } from "redux";
import authReducer from "./auth-reducer/auth-reducer";
import todoReducer from "./todo-reducer/todo-reducer";

const rootReducer = combineReducers({
    authStates: authReducer,
    todoStates: todoReducer
});

export default rootReducer;