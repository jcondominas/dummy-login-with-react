import {loginAction} from "./actions";
import {loginReducers} from "./reducers";



describe('Login reducers', () => {
    it('should reduce loggin action to username and password', () => {
        const action = loginAction("test", "test2");

        const state = loginReducers(undefined, action);

        expect(state).toEqual({
            user: {
                user: "test",
                password: "test2",
                token: ""
            }
        })
    });
});