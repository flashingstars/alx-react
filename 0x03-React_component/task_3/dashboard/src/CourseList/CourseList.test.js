import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseList Component test', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />);
    });

    it('renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const rows = wrapper.find('CourseListRow');
        expect(rows).toHaveLength(5);

        expect(rows.at(0).props()).toEqual({isHeader: true, textFirstCell: 'Available courses' });
        expect(rows.at(1).props()).toEqual({isHeader: true, textFirstCell: 'Course name', textSecondCell: 'Credit' });
        expect(rows.at(2).props()).toEqual({isHeader: false, textFirstCell: 'ES6', textSecondCell: '60' });
        expect(rows.at(3).props()).toEqual({isHeader: false, textFirstCell: 'Webpack', textSecondCell: '20' });
        expect(rows.at(4).props()).toEqual({isHeader: false, textFirstCell: 'React', textSecondCell: '40' });
    });

    it('renders correctly when listCourses array is empty', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        const rows = wrapper.find(CourseListRow);
        expect(rows).toHaveLength(1);
    });

    it('renders correctly when listCourses is not passed', () => {
        const wrapper = shallow(<CourseList />);
        const rows = wrapper.find(CourseListRow);
        expect(rows).toHaveLength(5);
    });

    it('renders the correct number of CourseListRow elements with provided listCourses', () => {
        const listCourses = [
            { id: 1, name: 'Course 1', credit: 3 },
            { id: 2, name: 'Course 2', credit: 4 },
            { id: 3, name: 'Course 3', credit: 2 },
        ];
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        const rows = wrapper.find(CourseListRow);
        expect(rows).toHaveLength(listCourses.length + 2    );
    });
});