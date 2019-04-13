import { combineReducers } from 'redux';
import signIn from './signin.reducers';
import helper from './helper.reducers';
import alert from './alert.reducers'

export default combineReducers({
  helper,
  signIn,
  alert
});