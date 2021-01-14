import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isKeepLogin: null,
  token: null,
  user: null,
  getSmsRes: null,
  verifyCodeRes: null,
  signupObj: {
    name: '', //Usama Asghar
    bio: '', //Dummy text
    job_field: '', //1994-02-25
    ocuppation: '', //TEST
    expertise_level: '', //beginner
    preferred_expertise_level: '', //beginner
    gender_preference: '', //female
    phone_number: '', //+923015957224
    age_preferred: '', //29
    distance_preferred: '', //100
    user_sports: [], // { sports: 'baseball' }
    user_profile_image: [],
  },
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
    case TYPES.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.LOGOUT_SUCCESS:
      return {
        ...initialState,
      };

    case TYPES.LOGOUT_FAILURE:
      return {
        ...state,
        error: actions.data,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.DELETE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.DELETE_ACCOUNT_SUCCESS:
      return {
        ...initialState,
      };
    case TYPES.DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        error: actions.data,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.SIGNUP_SUCCESS:
      console.log('[SIGNUP_SUCCESS]', actions.data);
      return {
        ...state,
        token: actions.data.data.auth_token,
        user: actions.data.data.user,
        isKeepLogin: true,
        error: null,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.SIGNUP_FAILURE:
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
