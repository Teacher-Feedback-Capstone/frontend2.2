import React, { Component } from 'react'

import styles from './Login.module.css'
import Hero from '../../components/Login/Hero/Hero'
import LoginMenu from '../../components/Login/LoginMenu/LoginMenu'

import { loginUser } from '../../api/user'


export default class Login extends Component {
  render() {
    return (
      <div className={styles.login}>
        <Hero />
        <div className={styles.loginMenu}>
        <LoginMenu onLogin={loginUser}/>
        </div>
      </div>
    )
  }
}
