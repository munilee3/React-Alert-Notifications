import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-notifications">
        <div className="alert-notification-details">
          <h1 className="heading">Alert Notifications</h1>
          <Notification>
            <div className="notification-content">
              <AiFillCheckCircle className="success-icon" />
              <div className="message-container">
                <h1 className="success-message">Success</h1>
                <p className="message">
                  You can access all the files in the folder
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="notification-content">
              <RiErrorWarningFill className="error-icon" />
              <div className="message-container">
                <h1 className="error-message">Error</h1>
                <p className="message">
                  Sorry, you are not authorized to have access to delete the
                  file
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="notification-content">
              <MdWarning className="warning-icon" />
              <div className="message-container">
                <h1 className="warning-message">Warning</h1>
                <p className="message">
                  Viewers of this file can see comments and suggestions
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="notification-content">
              <MdInfo className="info-icon" />
              <div className="message-container">
                <h1 className="info-message">Info</h1>
                <p className="message">
                  Anyone on the internet can view these files
                </p>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
