import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });

    it("Contains Notification component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("Notifications")).toHaveLength(1);
    });

    it("Contains the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("Header")).toHaveLength(1);
    });

    it("contains the Login component", () => {
        const wrapper = shallow(<app />);
        expect(wrapper.find("Login")).toHaveLength(1);
    })

    it("contains the Footer component", () => {
        const wrapper = shallow(<app />);
        expect(wrapper.find("Footer")).toHaveLength(1);
    });

    it("Doesn't render courselist if logged out", () => {
        const component = shallow(<App />);
        component.setProps({ isLoggedIn: false });
        expect(component.contains(<CourseList />)).toBe(true);
    });

    it("renders courselist if logged in", () => {
        const component = shallow(<App isLoggedIn={true} />);
        expect(component.contains(<CourseList />)).toBe(true);
        expect(component.contains(<Login />)).toBe(false);
    });
});

