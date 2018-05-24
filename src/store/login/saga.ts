import {put, takeEvery} from "redux-saga/effects";
import {getType} from "typesafe-actions";
import {loggedInAction, loginAction} from "./actions";


function* logIn(){
    // process user
    yield put(loggedInAction("Token"))
}

export function* loginSaga() {
    yield takeEvery(getType(loginAction), logIn)
}
