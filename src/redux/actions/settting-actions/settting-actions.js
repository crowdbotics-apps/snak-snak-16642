import * as TYPES from '../types';

//Email Validation Action
export const getSettings = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SETTINGS_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
