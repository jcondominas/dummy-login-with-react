import {loggedInAction, loginAction} from "./actions";
import {LOGGED_IN_ACTION_TYPE, LOGIN_ACTION_TYPE} from "./types";

describe('Login actions', () => {
    it('should create a correct loggin action', () => {

        const action = loginAction("test", "test2");

        expect(action).toEqual({
            type: LOGIN_ACTION_TYPE, payload: {
                user: "test",
                password: "test2"
            }
        })
    });

    it('should create a correct logged action', () => {
        const action = loggedInAction("Token");

        expect(action).toEqual({
            type: LOGGED_IN_ACTION_TYPE,
            payload: {
                token: "Token"
            }
        })
    });
});