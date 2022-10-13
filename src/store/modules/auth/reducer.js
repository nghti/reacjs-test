import * as types from './constants';
import { hasToken } from '../../../utils/helpers';

let isAuthenticated = hasToken();
const initialState = {
  isAuthenticated: isAuthenticated,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case types.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default reducer
