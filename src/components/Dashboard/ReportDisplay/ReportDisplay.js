import React, { useState, useEffect } from 'react';
import styles from './ReportDisplay.module.css';

import ReportButton from '../ReportButton/ReportButton';

import fetchReports from '../../../api/report';

const ReportDisplay = ({ user }) => {
  const [reports, setReports] = useState([]);

  const setReportStatus = (reportId, status) => {
    console.log('Report status:', status);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedReports = await fetchReports(setReportStatus);
        setReports(fetchedReports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.ReportDisplay}>
      <div className={styles.content}>
        <h1>Reports</h1>
        <div className={styles.reports}>
          {reports.length === 0 ? (
            <p>No reports yet!</p>
          ) : (
            reports.map((report, index) => {
              const date = new Date(report.created_at);
              const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
              const formattedDate = date.toLocaleDateString('en-US');
              const formattedTime = date.toLocaleTimeString('en-US');

              return (
                <ReportButton
                  key={report.id || index}
                  date={`${dayOfWeek}, ${formattedDate} at ${formattedTime}`}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportDisplay;
