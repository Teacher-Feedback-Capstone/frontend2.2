import React, { Component } from 'react'
import styles from './LogoutButton.module.css'

import logoutIcon from '../../../images/logout.svg'

import { logoutUser } from '../../../api/user'

export default class LogoutButton extends Component {
  render() {
    return (
      <div className={styles.logout}>
        <button onClick={logoutUser}>
            <div className={styles.buttonContent}>
                Logout
                <img 
                src={logoutIcon} 
                alt="logout" 
                style={{ filter: 'invert(1)', width: '16px', height: '16px', marginLeft: '8px', marginLeft: 'auto' }} 
                />
            </div>
        </button>
      </div>
    )
  }
}
