import axios from 'axios';
import baseURL from './config';

// const apiUrl = `${baseURL}/api/auth`; // Backend API URL
const apiUrl = 'http://localhost:3005/api/auth';

// Register a new user
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, { username, password });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Login user
export const loginUser = async (username, password) => {
  try {
    console.log(apiUrl)
    const response = await axios.post(`${apiUrl}/login`, { username, password });
    sessionStorage.setItem('jwtToken', response.data.token);
    sessionStorage.setItem('userId', response.data.userId);
    sessionStorage.setItem('username', username);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Logout user
export const logoutUser = () => {
  sessionStorage.removeItem('jwtToken');

  // Redirect to login page
  window.location.href = '/';
};

// Access a protected route
export const getProtectedData = async (token) => {
  try {
    const response = await axios.get(`${apiUrl}/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Helper to handle errors
const handleError = (error) => {
  if (error.response) {
    console.error({error: error.response.data.message} )
  } else if (error.request) {
    console.error({ error: 'No response from server. Please check your network.' })
  } else {
    console.error({ error: error.message })
  }
  return null
};