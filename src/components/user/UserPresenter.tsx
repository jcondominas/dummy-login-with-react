import {User} from "../../store/login/models";
import * as React from "react";
import {LoginSection} from "./LoginSection";
import {UserInfo} from "./UserInfoSection";

export interface UserPresenterProps {
    isLogged: boolean,
    user: User,
    onLogin: (user: string, password: string) => any
}

export const UserPresenter: React.SFC<UserPresenterProps> = ({isLogged, user, onLogin}) => {
    return (
        (isLogged) ? <UserInfo user={user}/> : <LoginSection onLogin={onLogin}/>
    );
};





