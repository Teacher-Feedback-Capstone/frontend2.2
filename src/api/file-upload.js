import axios from 'axios';
import baseURL from './config';

// const apiUrl = `${baseURL}/api/auth`; // Backend API URL
const apiUrl = 'http://localhost:3005/api/file-upload';

export const uploadFile = async (formData, setUploadStatus) => {
    try {
        const jwtToken = sessionStorage.getItem('jwtToken'); // Retrieve JWT token from session storage

        const res = await axios.post(`${apiUrl}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${jwtToken}`, // Add Authorization header
            },
        });

        setUploadStatus('Upload successful!');
        console.log('Server response:', res.data);
        return res.data;
    } catch (err) {
        setUploadStatus('Upload failed 😢');
        console.error('Error uploading:', err);
    }
};

export default uploadFile;