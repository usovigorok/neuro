import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import History from './History';
import {
    VerticalBarSeries
} from 'react-vis';
  
configure({adapter: new Adapter()});

describe('<History />', () => {
    it('should render <VerticalBarSeries /> element', () => {
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
        const wrapper = shallow(<History store={store} />).dive();
        expect(wrapper.find(VerticalBarSeries)).toHaveLength(1);
    });
});