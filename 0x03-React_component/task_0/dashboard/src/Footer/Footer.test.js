import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    Test('Footer component renders without crashing', () => {
        shallow(<Footer />);
    });

    test('renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});