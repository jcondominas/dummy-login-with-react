const localStorageMock = {
    getItem: jest.fn,
    setItem: jest.fn,
    clear: jest.fn
};

global.localStorage = localStorageMock;

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });