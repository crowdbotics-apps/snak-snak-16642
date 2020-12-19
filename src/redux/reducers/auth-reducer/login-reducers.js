import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isKeepLogin: null,
  token: null,
  user: null,
  getSmsRes: null,
  verifyCodeRes: null,
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
    case TYPES.VERIFY_SIGNUP_CODE_SUCCESS:
      return {
        ...state,
        verifyCodeRes: actions.data,
        error: null,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.VERIFY_LOGIN_CODE_SUCCESS:
      return {
        ...state,
        token: actions.data.auth_token,
        user: actions.data.user,
        isKeepLogin: true,
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
