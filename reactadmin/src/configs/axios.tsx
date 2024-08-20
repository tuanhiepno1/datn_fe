import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/', // Ensure this is a valid base URL
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 20000, // Optional: Add a timeout to prevent hanging requests
});

axiosInstance.interceptors.response.use(
  response => {
    // Ensuring response data or returning an empty object as a fallback
    return response.data ?? {};
  },
  error => {
    // Optionally handle different error statuses or log errors
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Response error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something else happened during the request setup
      console.error('Axios error:', error.message);
    }

    return Promise.reject(error); // Continue to reject the error
  }
);

export default axiosInstance;
