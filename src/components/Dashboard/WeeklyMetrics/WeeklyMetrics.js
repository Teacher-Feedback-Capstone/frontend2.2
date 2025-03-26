import React, { Component } from 'react'
import styles from './WeeklyMetrics.module.css'

export default class WeeklyMetrics extends Component {
  render() {
    return (
        <div className={styles.weeklyMetrics}>
        <h1>Weekly Report</h1>
        <p>Generate a weekly report.</p>
      </div>
    )
  }
}
