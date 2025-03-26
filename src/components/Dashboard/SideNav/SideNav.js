import React, { Component } from 'react'
import styles from './SideNav.module.css'

import Logo from '../../Logo/Logo'
import LogoutButton from '../LogoutButton/LogoutButton'

export default class SideNav extends Component {
  render() {
    return (
      <div className={styles.sideNav}>
        <div className={styles.menu}>
            <Logo size="1.2rem" color="white" padding="1rem" showVersion={false} />
            <LogoutButton onLogout={this.props.onLogout} />
        </div>
      </div>
    )
  }
}
