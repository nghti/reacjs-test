import { fork, call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { toast } from 'react-toastify';

import * as types from './constants';
import * as authActions from './actions';
import * as authService from '../../../api/auth';
import { setToken, removeToken } from '../../../utils/helpers';

function* signup(action) {
  try {
    const { data } = yield call(authService.signupRequest, action.payload);
    if (!_.isEmpty(data)) {
      removeToken();
      setToken(data.token);
      yield put(authActions.signupSuccess(data));
      toast.success('SignUp Success!');
      yield put(push('/'));
    }
  } catch (e) {
    yield put(authActions.signupFailure(e));
    toast.error('SignUp Error!');
  }
}

function* login(action) {
  try {
    const { data } = yield call(authService.loginRequest, action.payload);
    if (!_.isEmpty(data)) {
      removeToken();
      setToken(data.token);
      yield put(authActions.loginSuccess(data));
      toast.success('Login Success!');
      yield put(push('/'));
    }
  } catch (e) {
    yield put(authActions.loginFailure(e));
    toast.error('Login Error!');
  }
}

function* logout() {
  try {
    // const config = {
    //   headers: { Authorization: `Bearer ${getToken()}` }
    // };
    // yield call(authService.logoutRequest, config) // Remove token serve
    removeToken();
    yield put(authActions.logoutSuccess());
    toast.success('Logout Success!');
    yield put(push('/login'));
  } catch (e) {
    yield put(authActions.logoutFailure(e));
    toast.error('Logout Error!');
  }
}

function* watchAuthRequest() {
  yield takeEvery(types.AUTH_SIGNUP_REQUEST, signup);
  yield takeEvery(types.AUTH_LOGIN_REQUEST, login);
  yield takeEvery(types.AUTH_LOGOUT_REQUEST, logout);
}

export const authSaga = [fork(watchAuthRequest)];
