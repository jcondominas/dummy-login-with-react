import {connect} from 'react-redux'
import {RootState} from "../store/index";
import {loginAction} from "../store/login/actions";
import {UserPresenter} from "../components/user/UserPresenter";

export const UserContainer = connect(
    (state: RootState) => ({
        isLogged: state.user.token !== null && state.user.token !== "",
        user: state.user
    }),
    (dispatch) => ({
        onLogin: (user: string, password: string) => dispatch(loginAction(user, password))
    })
)(UserPresenter);