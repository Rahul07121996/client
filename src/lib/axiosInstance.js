import axios from "axios";

const axiosInstance  = axios.create({
     baseURL: 'https://localhost:5001/api'
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


axiosInstance.interceptors.response.use(
   
    response => response,
    error => {
      if (error.response) {
        const { status, data } = error.response;
  
        if (status === 400 && data?.errors) {
          console.group('Validation Errors');
          Object.entries(data.errors).forEach(([field, messages]) => {
            messages.forEach(message => console.error(`${field}: ${message}`));
          });
          console.groupEnd();
        } else {
          console.error(`API Error [${status}]:`, data?.title || error.message);
        }
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
  
      return Promise.reject(error); // still allow component-level handling if needed
    }
  );
  export default axiosInstance;