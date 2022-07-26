import axiosBase from 'axios';

const BASE_URL = 'https://reqres.in/api/users';

const axiosInstance = () => {
  const axios = axiosBase.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return axios;
};

export default axiosInstance();
