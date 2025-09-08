import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/api', // Replace with your backend API URL
    withCredentials: true, // Include cookies in requests if needed
});

export default axiosInstance;