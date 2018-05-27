import {User} from "../../store/login/models";
import * as React from "react";
import {LoginSection} from "./LoginSection";
import {UserInfo} from "./UserInfoSection";

export interface AccessSectionProps {
    isLogged: boolean,
    user: User,
    onLogin: (user: string, password: string) => any
}

export const AccessSection: React.SFC<AccessSectionProps> = ({isLogged, user, onLogin}) => {
    return (
        (isLogged) ? <UserInfo user={user}/> : <LoginSection onLogin={onLogin}/>
    );
};





