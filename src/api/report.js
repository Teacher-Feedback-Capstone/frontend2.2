import axios from 'axios';
import baseURL from './config';

// const apiUrl = `${baseURL}/api/reports`; // or use your backend URL
const apiUrl = 'http://localhost:3005/api/report';

export const fetchReports = async (setReportStatus) => {
  try {
    const jwtToken = sessionStorage.getItem('jwtToken'); // Retrieve JWT token from session storage

    if (!jwtToken) {
      setReportStatus('You must be logged in to view reports.');
      return;
    }

    const res = await axios.get(apiUrl, {
      headers: {
        'Authorization': `${jwtToken}`, // Add Authorization header
      },
    });

    setReportStatus('Reports loaded successfully!');
    console.log('Server response:', res.data);
    return res.data;
  } catch (err) {
    setReportStatus('Failed to load reports 😢');
    console.error('Error fetching reports:', err);
  }
};

export default fetchReports;