import React, { Component } from 'react'
import styles from './ReportButton.module.css'

export default class ReportButton extends Component {
  render() {
    const { date } = this.props
    const { onClick } = this.props
    return (
      <div className={styles.ReportButton} onClick={onClick}>
        <div className={styles.content}>
        { date }
        </div>
      </div>
    )
  }
}
