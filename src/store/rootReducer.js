import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './modules/auth/reducer';
import history from '../utils/history';

export default combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});
