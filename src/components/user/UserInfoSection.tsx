import * as React from "react";
import {User} from "../../store/login/models";

export interface UserInfoProps {
    user: User
}

export const UserInfo: React.SFC<UserInfoProps> = ({user}) => {
    return (
        <div><p>Hi {user.user}, your token is {user.token}</p></div>
    );
};