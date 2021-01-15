import * as TYPES from '../types';

export const registerNotifyIDRequest = (
  params,
  token,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.REGISTER_NOTIFY_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
