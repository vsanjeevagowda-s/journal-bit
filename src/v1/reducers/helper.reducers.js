import {
  API_REQUEST
} from '../actions/helper.actions';

const initialState = {
  pending : false,
}

const helper = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
    return{
      ...state,
      pending: true
    }
    default:
    return state;
  }
}
export default helper;