
import { api } from './api-lib/api';
import {
  request
} from '../actions/helper.actions';
export const SIGNIN_REQUEST_SUCCESS = 'SIGNIN_REQUEST_SUCCESS';
export const SIGNIN_REQUEST_FAILURE = 'SIGNIN_REQUEST_FAILURE';
export const TOKEN_EMAIL_TO_STORE = 'TOKEN_EMAIL_TO_STORE';

const signinRequestSuccess = resp => (
  {
    type: SIGNIN_REQUEST_SUCCESS,
    resp
  });

const signinRequestFailure = error => (
  {
    type: SIGNIN_REQUEST_FAILURE,
    error
  });

export const storeEmailToken = () => ({
  type: TOKEN_EMAIL_TO_STORE
})

export const signin = body => (dispatch) => {
  dispatch(request());
  return api.post('/signin', { ...body })
    .then(resp => {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('email', resp.email);
      return Promise.resolve(dispatch(signinRequestSuccess(resp.message)))
    })
    .catch(error => {
      return Promise.reject(dispatch(signinRequestFailure(error.error)));
    })
};