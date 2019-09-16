import React from 'react';
import { shallow } from 'enzyme'
import Quote from './Quote';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Quote Component', () => {
    it('It should render without error', () => {
        const component = shallow(<Quote />);
        console.log(component.debug());
        const wrapper = component.find('.quotelines');
        expect(wrapper.length).toBe(2);
        });
})

