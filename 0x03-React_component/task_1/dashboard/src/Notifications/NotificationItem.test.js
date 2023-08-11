import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem type="default" value="test" html={{ __html: 'Test HTML' }} />);
    });

    it('renders correct HTML when type and value props are passed', () => {
        const type = 'default';
        const value = 'test';
        const wrapper = shallow(<NotificationItem type='default' value='test' html={{ __html: 'Test HTML' }} />);
        expect(wrapper.prop('data-notification-type')).toBe('type');
        expect(wrapper.text()).toBe('value');
    });

    it('render HTML when html prop is passed', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(
            <NotificationItem type="default" value="test" html={html} />
        );
        expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
    });
});