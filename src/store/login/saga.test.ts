import {logIn} from "./saga";
import {loggedInAction, loginAction} from "./actions";
import {put} from "redux-saga/effects";

describe('User saga', () => {
    it('should login with correct action', () => {
        const loginSaga = logIn(loginAction("test", "passTest"));
        expect(loginSaga.next().value).toEqual(put(loggedInAction("Token")))
    });
});