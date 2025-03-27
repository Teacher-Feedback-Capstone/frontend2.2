import React, { Component } from 'react'
import styles from './ReportDetails.module.css'

export default class ReportDetails extends Component {
  render() {
    const { report } = this.props
    return (
      <div className={styles.reportDetails}>
        <div className={styles.content}>
            <h1>Report Details</h1>
            <p>{report}</p>
        </div>
      </div>
    )
  }
}
