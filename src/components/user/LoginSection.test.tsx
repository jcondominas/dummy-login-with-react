import {LogginSectionProps, LoginSection} from "./LoginSection";
import {shallow} from "enzyme";
import * as React from "react";
import toJson from 'enzyme-to-json'
import Mock = jest.Mock;

describe('LoginSection', () => {
    it('should send log in action when form submited', () => {
        const LoginMock = jest.fn<LogginSectionProps>(() => ({
            onLogin: jest.fn()
        }));
        const props = new LoginMock();
        const loginSection = shallow(<LoginSection onLogin={props.onLogin}/>);

        loginSection.find("input").first().simulate("change", {
            target: {
                value: "UserName"
            }
        });
        loginSection.find("input").at(1).simulate("change", {
            target: {
                value: "Password"
            }
        });
        loginSection.find("form").simulate("submit", {preventDefault: jest.fn});

        expect((props.onLogin as Mock).mock.calls[0]).toEqual(['UserName', 'Password'])
    });

    it('should renders login section correctly', () => {
        const login = shallow(<LoginSection onLogin={jest.fn()}/>);
        expect(toJson(login)).toMatchSnapshot()
    });
});