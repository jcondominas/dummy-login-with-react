import {connect} from 'react-redux'
import {RootState} from "../store";
import {loginAction} from "../store/login/actions";
import {AccessSection} from "../components/user/AccessSection";

export const UserContainer = connect(
    (state: RootState) => ({
        isLogged: state.user.token !== null && state.user.token !== "",
        user: state.user
    }),
    (dispatch) => ({
        onLogin: (user: string, password: string) => dispatch(loginAction(user, password))
    })
)(AccessSection);