import { client } from '../utils/axios';

export const signupRequest = (data) => {
  return client().post('/signup', data);
};

export const loginRequest = (data) => {
  return client().post('/signin', data);
};

export const logoutRequest = (data) => {
  return client().post('/logout', data);
};