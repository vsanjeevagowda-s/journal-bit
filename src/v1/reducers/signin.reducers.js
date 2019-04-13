import {
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_FAILURE,
  TOKEN_EMAIL_TO_STORE,
} from '../actions/signin.actions';
import {
  API_REQUEST
} from '../actions/helper.actions';

const initialState = {
  pending: false,
  token: '',
  email: '',
}

const signIn = (state = initialState, action) => {
  switch(action.type){
    case API_REQUEST:
    return{
      ...state,
      pending: true,
    }
    case TOKEN_EMAIL_TO_STORE:
    return {
      ...state,
      token: localStorage.getItem('token'),
      email: localStorage.getItem('email')
    }
    case SIGNIN_REQUEST_SUCCESS:
    return{
      ...state,
      pending: false,
    }
    case SIGNIN_REQUEST_FAILURE:
    return{
      ...state,
      pending: false,
    }
    default:
    return state
  }
}

export default signIn