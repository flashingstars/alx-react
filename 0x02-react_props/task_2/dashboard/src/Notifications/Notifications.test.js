import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications />', () => {
    it ('renders without crashing', () => {
        shallow(<Notifications />);
    })

    it ('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    })

    it ('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    })
})