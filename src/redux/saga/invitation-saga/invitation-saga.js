import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* invitationRequest() {
  yield takeLatest(types.GET_INVI_DETAIL_REQUEST, getInvitationDetail);
}

function* getInvitationDetail(params) {
  try {
    let response = yield Api.postRequest(endPoints.getInvitationDetail, params.params, params);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response.data);
      yield put({
        type: types.GET_INVI_DETAIL_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.GET_INVI_DETAIL_FAILURE,
      data: error,
    });
  }
}

//--------------send invitation saga------------------//

export function* sendInvitationRequest() {
  yield takeLatest(types.SEND_INVITATION_REQUEST, sendInvitation);
}

function* sendInvitation(params) {
  try {
    let response = yield Api.postRequest(endPoints.sendInvitation, params.params, params);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response);
      yield put({
        type: types.SEND_INVITATION_SUCCESS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: types.SEND_INVITATION_FAILURE,
      data: error,
    });
  }
}


//--------------accept/reject invitation saga------------------//

export function* acceptRejectInvitationRequest() {
  yield takeLatest(types.ACCEPT_INVITATION_REQUEST, acceptRejectInvitation);
}

function* acceptRejectInvitation(params) {
  try {
    let response = yield Api.postRequest(endPoints.acceptReject, params.params, params);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response.data);
      yield put({
        type: types.ACCEPT_INVITATION_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.ACCEPT_INVITATION_FAILURE,
      data: error,
    });
  }
}
