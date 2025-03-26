import React, { Component } from 'react'
import styles from './WelcomeBox.module.css'

import grainyImage from '../../../images/grainy.jpg'

export default class WelcomeBox extends Component {
  render() {
    const { user } = this.props
    return (
      <div className={styles.WelcomeBox} style={{ backgroundImage: `url(${grainyImage})`, backgroundPosition: '0px', backgroundSize: 'cover' }}>
        <div className={styles.content}>
        <h1>Welcome, {user}!</h1>
        <p>Here's what's happening with your account today.</p>
        <div className={styles.divider}></div>
        </div>
      </div>
    )
  }
}
