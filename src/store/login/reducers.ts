import {getType} from "typesafe-actions";
import {loggedInAction, loginAction} from "./actions";
import {User} from "./models";
import {LoginActions} from "./types";
import {combineReducers} from "redux";

const initState: User = {user: "", token: "", password: ""};

const loginReducer = (state: User = initState, action: LoginActions) => {
    switch (action.type) {
        case getType(loginAction):
            return {...state, user: action.payload.user, password: action.payload.password};
        case getType(loggedInAction):
            return {...state, token: action.payload.token};
        default:
            return state
    }
};

export const loginReducers = combineReducers({
    user: loginReducer
});