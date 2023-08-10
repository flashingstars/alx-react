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
        const wrapper = shallow(<App />);
        expect(wrapper).not.toBeNull();
    });

    it("Contains Notification component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("Notifications").length).toBe(1);
    });

    it("Contains the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
    });

    it("contains the Login component", () => {
        const wrapper = shallow(<app />);
        expect(wrapper.find(Login).length).toBe(1);
    })

    it("contains the Footer component", () => {
        const wrapper = shallow(<app />);
        expect(wrapper.find(Footer).length).toBe(1);
    });

    it("Doesn't render courselist if logged out", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).length).toBe(0);
    });

    describe('When isLoggedIn is true', () => {
        it("It doesn't render the Login component", () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(Login).length).toBe(1);
        }); 
    });
});
