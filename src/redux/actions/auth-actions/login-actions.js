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

export const verifyCodeRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.VERIFY_CODE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
