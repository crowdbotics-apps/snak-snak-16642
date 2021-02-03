import * as TYPES from '../types';

//Email Validation Action
export const getSmsCode = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SMS_CODE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Email Validation Action
export const signUpRequst = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const logoutRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGOUT_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const verifyCodeRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.VERIFY_CODE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const deleteAccountRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_ACCOUNT_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const registerNotificationRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_ACCOUNT_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
