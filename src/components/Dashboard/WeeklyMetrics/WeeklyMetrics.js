import React, { Component } from 'react'
import styles from './WeeklyMetrics.module.css'

import SampleChart from '../ChartDisplay/ChartDisplay'

export default class WeeklyMetrics extends Component {
  render() {
    return (
        <div className={styles.weeklyMetrics}>
        <h1>Weekly Report</h1>
        <div className={styles.chart}>
          <SampleChart />
        </div>
      </div>
    )
  }
}
