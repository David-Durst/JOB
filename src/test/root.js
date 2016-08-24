import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { describe } from 'mocha';
import Root, { HiMessage } from '../main/root';

describe('Root', function () {
    it('contains a HiMessage', function () {
        expect(shallow(<Root />).contains(<HiMessage />)).to.equal(true);
    });

    it('renders correctly with HiMessage', function () {
        expect(mount(<Root />).html()).to.contain('Hello World');
    });
});