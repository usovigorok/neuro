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
        const wrapper = shallow(<History />);
        wrapper.setProps({items: []});
        expect(wrapper.find(VerticalBarSeries)).toHaveLength(1);
    });
});