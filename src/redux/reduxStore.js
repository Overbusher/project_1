import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk as thunkMiddleware } from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    fusersPage: usersReducer,
    authPage: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;