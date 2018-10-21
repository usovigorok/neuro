import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import History from '../components/History';
  
configure({adapter: new Adapter()});

describe('<App />', () => {
    it('should render <History /> element when items are there and isFetching is false', () => {
        const store = {
            getState: () => {
                return {
                    history: {
                        isFetching: false,
                        items: [
                            {
                                "score": 4583,
                                "date": 1538410833
                            }
                        ]
                    }       
                }
            },
            subscribe: jest.fn(),
            dispatch: jest.fn()
        };
        const wrapper = shallow(<App store={store} />).dive();
        expect(wrapper.find(History)).toHaveLength(1);
    });

    it('should render h2 element when items are empty and isFetching is true', () => {
        const store = {
            getState: () => {
                return {
                    history: {
                        isFetching: true,
                        items: []
                    }       
                }
            },
            subscribe: jest.fn(),
            dispatch: jest.fn()
        };
        const wrapper = shallow(<App store={store} />).dive();
        expect(wrapper.find('h2')).toHaveLength(1);
    });
});