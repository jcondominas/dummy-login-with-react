import {createAction} from "typesafe-actions";
import {LOGGED_IN_ACTION_TYPE, LOGIN_ACTION_TYPE} from "./types";

export const loginAction = createAction(LOGIN_ACTION_TYPE, resolve => {
    return (user: string, password: string) => {
        return ({
            type: LOGIN_ACTION_TYPE,
            payload: {
                user,
                password
            }
        })
    }
});

export const loggedInAction = createAction(LOGGED_IN_ACTION_TYPE, resolve => {
    return (token: string) => {
        return ({
            type: LOGGED_IN_ACTION_TYPE,
            payload: {
                token
            }
        })
    }
});