import {put, takeEvery} from "redux-saga/effects";
import {getType} from "typesafe-actions";
import {loggedInAction, loginAction} from "./actions";
import {LoginActions} from "./types";


export function* logIn(action: LoginActions) {
    // process login
    if (action.type === getType(loginAction)) {
        const token = "Token";
        localStorage.setItem("user", JSON.stringify({
            user: action.payload.user,
            password: action.payload.password,
            token
        }));
        yield put(loggedInAction(token))
    }

}

export function* loginSaga() {
    yield takeEvery(getType(loginAction), logIn)
}
