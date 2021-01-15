import * as TYPES from '../types';

export const sendInvitationRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SEND_INVITATION_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const editInvitationRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.EDIT_INVITATION_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const acceptInvitationRequest = (
  params,
  token,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.ACCEPT_INVITATION_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const getInvitDetailRequest = (params, token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_INVI_DETAIL_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
