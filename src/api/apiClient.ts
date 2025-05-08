import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
  });


// Interceptor to add the token to the headers of each request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
