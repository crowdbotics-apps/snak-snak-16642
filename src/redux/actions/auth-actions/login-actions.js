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
