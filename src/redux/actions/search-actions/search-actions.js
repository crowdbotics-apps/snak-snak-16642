import * as TYPES from '../types';

export const userSearchRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.USER_SEARCH_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const feedbackRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FEEDBACK_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
