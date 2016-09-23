import chai from 'chai';
import React from 'react';
import {shallow, mount} from 'enzyme';
const expect = chai.expect;

import Header from './Header';

describe('Header component', () => {

    it('shallow renders header', () => {
        const wrapper = shallow(
            <Header title="Some Title" />
        );

        expect(wrapper.text()).to.equal('Some Title');
    });
});

