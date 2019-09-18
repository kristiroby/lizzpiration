import React from 'react';
import { shallow } from 'enzyme'
import Quote from './Quote';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttribute } from '../Utilities/index.js'

const setUp = (props={}) => {
    const component = shallow(<Quote {...props} />)
    return component
};

configure({ adapter: new Adapter() });

describe('Quote Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without error', () => {
        const container = findByTestAttribute(component, 'container');
        expect(container.length).toBe(1);
        });
    it('Should render a quote', () => {
        const quote = findByTestAttribute(component, 'fetchedQuote');
        expect(quote.length).toBe(1)
    });
    it('Should render a source', () => {
        const source = findByTestAttribute(component, 'fetchedQuoteSource');
        expect(source.length).toBe(1)
    });


})

