import React, { Component } from 'react'
import styles from './ReportDisplay.module.css'

import ReportButton from '../ReportButton/ReportButton'

export default class ReportDisplay extends Component {
  render() {
    const { user } = this.props
    return (
      <div className={styles.ReportDisplay}>
        <div className={styles.content}>
          <h1>Reports</h1>
          <div className={styles.reports}>
            {/* No reports yet! */}
            <ReportButton />
            <ReportButton />
          </div>
        </div>
      </div>
    )
  }
}
