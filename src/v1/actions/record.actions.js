
import { api } from './api-lib/api';
import {
  request
} from '../actions/helper.actions';
export const CREATE_RECORD_REQUEST_SUCCESS = 'CREATE_RECORD_REQUEST_SUCCESS';
export const CREATE_RECORD_REQUEST_FAILURE = 'CREATE_RECORD_REQUEST_SUCCESS';

const createRecordRequestSuccess = resp => (
  {
    type: CREATE_RECORD_REQUEST_SUCCESS,
    resp
  });

const createRecordRequestFailure = error => (
  {
    type: CREATE_RECORD_REQUEST_FAILURE,
    error
  });

  export const createRecord = body => (dispatch) => {
    dispatch(request());
    return api.post('/records', { ...body })
      .then(resp => {
        return Promise.resolve(dispatch(createRecordRequestSuccess(resp)))
      })
      .catch(error => {
        return Promise.reject(dispatch(createRecordRequestFailure(error)));
      })
  };