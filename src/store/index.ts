import {applyMiddleware, createStore} from "redux";
import {User} from "./login/models";
import {loginReducers} from "./login/reducers";
import createSagaMiddleware from 'redux-saga'
import {loginSaga} from "./login/saga";
import {composeWithDevTools} from "redux-devtools-extension";

export interface RootState {
    user: User
}

function loadUserInitialState(): User {
    return JSON.parse(
        localStorage.getItem("user") ||
        JSON.stringify({user: "", password: "", token: ""})
    );
}

const initState = {
    user: loadUserInitialState()
};

const reduxSaga = createSagaMiddleware();
export const store = createStore(loginReducers, initState, composeWithDevTools(applyMiddleware(reduxSaga)));

reduxSaga.run(loginSaga);