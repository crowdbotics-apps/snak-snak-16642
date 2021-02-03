import * as TYPES from '../../actions/types';

const initialState = {
  sendInviteRes: null,
  invitationDetailData: null,
  acceptInvitation: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};
const invitationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SEND_INVITATION_REQUEST:
      return {
        ...state,
        labels: actions.data,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case TYPES.SEND_INVITATION_SUCCESS:
      return {
        ...state,
        sendInviteRes: actions.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case TYPES.SEND_INVITATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case TYPES.EDIT_INVITATION_REQUEST:
      return {
        ...state,
        labels: actions.data,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case TYPES.EDIT_INVITATION_SUCCESS:
      return {
        ...state,
        sendInviteRes: actions.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case TYPES.EDIT_INVITATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case TYPES.GET_INVI_DETAIL_REQUEST:
      return {
        ...state,
        invitationDetailData: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case TYPES.GET_INVI_DETAIL_SUCCESS:
      return {
        ...state,
        invitationDetailData: actions.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case TYPES.GET_INVI_DETAIL_FAILURE:
      return {
        ...state,
        invitationDetailData: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case TYPES.ACCEPT_INVITATION_REQUEST:
      return {
        ...state,
        acceptInvitation: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case TYPES.ACCEPT_INVITATION_SUCCESS:
      return {
        ...state,
        acceptInvitation: actions.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case TYPES.ACCEPT_INVITATION_FAILURE:
      return {
        ...state,
        acceptInvitation: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default invitationReducer;
