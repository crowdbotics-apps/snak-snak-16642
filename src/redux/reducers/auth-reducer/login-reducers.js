import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isKeepLogin: null,
  getSmsRes: null,
  error: null,
  isSuccess: false,
  isFailure: false,
};
const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_SMS_CODE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_SMS_CODE_SUCCESS:
      return {
        ...state,
        getSmsRes: actions.data,
        error: null,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_SMS_CODE_FAILURE:
      return {
        ...state,
        error: actions.data,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.VERIFY_CODE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.VERIFY_CODE_SUCCESS:
      return {
        ...state,
        getSmsRes: actions.data,
        error: null,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.VERIFY_CODE_FAILURE:
      return {
        ...state,
        error: actions.data,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default loginReducer;
