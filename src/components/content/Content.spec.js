import chai from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
const expect = chai.expect;

import Content from './Content';

describe('Content component', () => {
    it('renders Content', () => {
        const wrapper = shallow(
            <Content>Some content</Content>
        );

        expect(wrapper.text()).to.equal('Some content');
    });
});

