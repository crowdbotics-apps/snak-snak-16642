import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* invitationRequest() {
  yield takeLatest(types.GET_INVI_DETAIL_REQUEST, getInvitationDetail);
}

function* getInvitationDetail(params) {
  console.log('[getInvitationDetail saga]');
  let response;
  try {
    response = yield Api.getAxios(endPoints.getLabels);
    console.log('this is response ---> ', response);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response);
      yield put({
        type: types.GET_INVI_DETAIL_SUCCESS,
        data: response,
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
  console.log('[send-invitation-saga]', params);
  try {
    let response = yield Api.postRequest(endPoints.sendInvitation, params.params, params);
    console.log('this is response ---> ', response);
    return;
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
