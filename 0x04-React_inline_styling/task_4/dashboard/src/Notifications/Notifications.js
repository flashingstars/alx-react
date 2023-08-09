import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const styles = StyleSheet.create({
      menuItem: {
        textAlign: 'right',
        zIndex: 1,
        position: 'relative',
        ':hover': {
          cursor: 'pointer',
          animationName: [
            {
              '0%' : { opacity: 0.5 },
              '100%' : { opacity: 1 },
            },
            {
              '0%' : { transform: 'translateY(0px)' },
              '33%' : { transform: 'translateY(-5px)' },
              '66%' : { transform: 'translateY(5px)' },
              '100%' : { transform: 'translateY(0px)' },
            }
          ],
          animationDuration: '1s, 0.5s',
          animationIterationCount: '3',
        }
      },    
      notifications: {
        padding: '0.5rem',
        border: '1px dashed #e0354b',
        position: 'absolute',
        right: '1rem',
        width: '25%',

        '@media (max-width: 450px)': {
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: '0',
          marginLeft: '0',
          marginRight: '0',
          border: 'none',
          fontSize: '20px',
          padding: '0',
          backgroundColor: '#fff8f8',
          border: '10px solid gray'
        },
      },    
      img: {
        width: '10px',
      },
      ul: {
        '@media (max-width: 900px)': {
          padding: '0',
        },
      },
      button: {
        '@media (max-width: 900px)': {
          position: 'relative',
          float: 'right',
        },
      },
      // '[data-notification-type="default"]': {
      //   color: '#0d0563',
      // },
      // '[data-urgent]': {
      //   color: '#e0354b',
      // },
      // '[data-notification-type="urgent"]': {
      //  color: '#e0354b',
      // }
    });
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" className={css(styles.img)} />
            </button>
            {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(styles.ul)}>
              {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;