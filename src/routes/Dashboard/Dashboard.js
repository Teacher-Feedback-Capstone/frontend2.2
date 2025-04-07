import React, { Component } from 'react'
import styles from './Dashboard.module.css'

import SideNav from '../../components/Dashboard/SideNav/SideNav'
import WelcomeBox from '../../components/Dashboard/WelcomeBox/WelcomeBox'
import UploadBox from '../../components/Dashboard/UploadBox/UploadBox'
import WeeklyMetrics from '../../components/Dashboard/WeeklyMetrics/WeeklyMetrics'
import ReportDisplay from '../../components/Dashboard/ReportDisplay/ReportDisplay'
import ReportDetails from '../../components/Dashboard/ReportDetails/ReportDetails'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedReport: null,
      username: sessionStorage.getItem('username') || 'Guest',
    };
  }

  onReportClick = (reportData) => {
    console.log('Report clicked:', reportData);
    this.setState({ selectedReport: reportData });
  };

  closeWindow = () => {
    this.setState({ selectedReport: null });
  }

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

      {this.state.selectedReport && (
            <ReportDetails report={this.state.selectedReport} closeWindow={this.closeWindow} />
          )}
      
      <SideNav />
      <div className={styles.content}>
      <WelcomeBox user={this.state.username} />
      <div className={styles.row1}>
        <UploadBox />
        <WeeklyMetrics />
      </div>
      <ReportDisplay reportEvent={this.onReportClick} />
      </div>
      </div>
    )
  }
}
