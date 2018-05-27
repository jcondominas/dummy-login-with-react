import * as React from 'react'
import {AccessSection, AccessSectionProps} from "./AccessSection";
import {shallow} from 'enzyme'
import {LoginSection} from "./LoginSection";
import {UserInfo} from "./UserInfoSection";

describe('Access section', () => {
    it('should render LoginSection when user is not logged', () => {
        const Mock = jest.fn<AccessSectionProps>(()=>({
            isLogged: false,
            user: {user:"", password:"", token: ""},
            onLogin: jest.fn
        }));
        const props = new Mock();
        const section = shallow(<AccessSection {...props}/>);
        expect(section.contains(<LoginSection onLogin={props.onLogin}/>)).toEqual(true)
    });

    it('should render UserSection when user is logged', () => {
        const Mock = jest.fn<AccessSectionProps>(()=>({
            isLogged: true,
            user: {user:"username", password:"password", token: "testToken"},
            onLogin: jest.fn
        }));
        const props = new Mock();

        const section = shallow(<AccessSection {...props}/>);

        expect(section.contains(<UserInfo user={props.user}/>)).toEqual(true)
    });
});