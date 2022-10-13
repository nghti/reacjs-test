import Cookies from 'js-cookie';

const JWT_TOKEN_KEY = 'jwttoken2';
// Cookies.set(JWT_TOKEN_KEY, 'value1')
// Cookies.get(JWT_TOKEN_KEY)
// Cookies.remove(JWT_TOKEN_KEY, { path: 'login' });

export const getToken = () => {
  return Cookies.get(JWT_TOKEN_KEY) || null;
};

export const hasToken = () => {
  return getToken() !== null;
};

export const setToken = (token) => {
  return Cookies.set(JWT_TOKEN_KEY, token);
};

export const removeToken = () => {
  Cookies.remove(JWT_TOKEN_KEY);
};
