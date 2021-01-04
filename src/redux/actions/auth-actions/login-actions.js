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
