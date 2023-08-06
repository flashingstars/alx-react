import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    Test('Footer component renders without crashing', () => {
        shallow(<Footer />);
    });

    test('renders withou crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});