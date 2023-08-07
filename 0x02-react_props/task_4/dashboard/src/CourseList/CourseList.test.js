import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseList Component test', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('thead').children()).toHaveLength(2);
        wrapper.find('thead').forEach((node) => {
            expect(node.equals(<CourseListRow textFirstCell='Foo' />));
        });

        expect(wrapper.find('tbody').children()).toHaveLength(3);
        wrapper.find('tbody').forEach((node) => {
            expect(node.equals(<CourseListRow textFirstCell='Foo' />))
        })
    });
});