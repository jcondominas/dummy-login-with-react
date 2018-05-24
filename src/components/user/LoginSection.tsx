import * as React from "react";
import './loginSection.css'

export interface LogginSectionProps {
    onLogin: (user: string, password: string) => any
}

interface LoginSectionState {
    user: string,
    password: string
}

export class LoginSection extends React.Component<LogginSectionProps, LoginSectionState> {
    constructor(props: LogginSectionProps) {
        super(props);
        this.state = {user: "", password: ""}
    }

    public render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.onLogin(this.state.user, this.state.password);
            }}
            className="form-login">
                <input type="text" placeholder="Username" onChange={(event) => {
                    this.setState({
                        user: event.target.value
                    })
                }}/>
                <input type="text" placeholder="Password" onChange={(event) => {
                    this.setState({
                        password: event.target.value
                    })
                }}/>
                <input type="submit"/>
            </form>
        )
    }

}