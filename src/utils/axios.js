import axios from 'axios';

import { BASE_API_URL } from '../config/constants';

export const client = () => {
  axios.defaults.baseURL = BASE_API_URL;

  return axios;
};
