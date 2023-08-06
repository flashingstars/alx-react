import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification() }/>
      </ul>
      <button style={{
        position: 'absolute',
        top: '0.25rem',
        right: '0.25rem',
        border: 'none',
        backgroundColor: '#fff'
        }}aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" />
      </button>
    </div>
  );
}