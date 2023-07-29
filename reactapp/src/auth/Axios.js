import axios from 'axios';

export const getAuthToken = () => {
  return window.localStorage.getItem('token');
};

export const setAuthHeader = (accessToken) => {
  window.localStorage.setItem('token', accessToken);
};
export const getRole = () => {
  return window.localStorage.getItem('role');
};

export const setRole = (role) => {
  window.localStorage.setItem('role', role);
};

axios.defaults.baseURL = 'http://localhost:8090';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const createLogoutInterceptor = (axiosInstance) => {
  const interceptor = axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.data.message === 'Expired JWT token') {
        logout();
      }
      return Promise.reject(error);
    }
  );

  return () => {
    axiosInstance.interceptors.response.eject(interceptor);
  };
};

export const request = (method, url, data) => {
  return axiosInstance({
    method: method,
    url: url,
    data: data
  });
};
export const fileRequest = (method, url, data) => {
  //axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  return axiosInstance({
    method: method,
    url: url,
    data: data,
    headers:{
      'Content-Type':'multipart/form-data'
    }
  });
};

const logout = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('role');
  window.location.href = '/login';
  window.alert('Session Timeout, please login again');
};

const removeLogoutInterceptor = createLogoutInterceptor(axiosInstance);

export const cleanupAxiosInterceptors = () => {
  removeLogoutInterceptor();
};