import React, { Component } from 'react';
import MyNotifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: null },
    { id: 2, type: 'urgent', value: 'New resume available', html: null }, 
    { id: 3, type: 'default', value: 'null', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }},
  ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const {isLoggedIn } = this.state;
    return (
      <>
        <MyNotifications listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
