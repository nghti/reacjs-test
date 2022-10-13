import * as types from './constants';
import makeActionCreator from '../../makeActionCreator';

export const signupRequest = (user) => makeActionCreator(types.AUTH_SIGNUP_REQUEST, user);
export const signupSuccess = (token) => makeActionCreator(types.AUTH_SIGNUP_SUCCESS, token);
export const signupFailure = (error) => makeActionCreator(types.AUTH_SIGNUP_FAILURE, error);
export const loginRequest = (user) => makeActionCreator(types.AUTH_LOGIN_REQUEST, user);
export const loginSuccess = (token) => makeActionCreator(types.AUTH_LOGIN_SUCCESS, token);
export const loginFailure = (error) => makeActionCreator(types.AUTH_LOGIN_FAILURE, error);
export const logoutRequest = (user) => makeActionCreator(types.AUTH_LOGOUT_REQUEST, user);
export const logoutSuccess = () => makeActionCreator(types.AUTH_LOGOUT_SUCCESS);
export const logoutFailure = (error) => makeActionCreator(types.AUTH_LOGOUT_FAILURE, error);
