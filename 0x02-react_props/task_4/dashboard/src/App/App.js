import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
    <div>
      <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
