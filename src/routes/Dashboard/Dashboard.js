import React, { Component } from 'react'
import styles from './Dashboard.module.css'

import SideNav from '../../components/Dashboard/SideNav/SideNav'
import WelcomeBox from '../../components/Dashboard/WelcomeBox/WelcomeBox'
import UploadBox from '../../components/Dashboard/UploadBox/UploadBox'
import WeeklyMetrics from '../../components/Dashboard/WeeklyMetrics/WeeklyMetrics'
import ReportDisplay from '../../components/Dashboard/ReportDisplay/ReportDisplay'
import ReportDetails from '../../components/Dashboard/ReportDetails/ReportDetails'

export default class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboard}>
      <div
      className={styles.loadingOverlay}
      style={{
      animation: `${styles.fadeOut} 2s ease-out forwards`,
      animationDelay: '2s',
      pointerEvents: 'none', // Makes the div not clickable
      }}
      >
      <div className={styles.loader}></div>
      </div>

      {/* <ReportDetails report="s"/> */}
      
      <SideNav />
      <div className={styles.content}>
      <WelcomeBox user="Nathan" />
      <div className={styles.row1}>
        <UploadBox />
        <WeeklyMetrics />
      </div>
      <ReportDisplay />
      </div>
      </div>
    )
  }
}
