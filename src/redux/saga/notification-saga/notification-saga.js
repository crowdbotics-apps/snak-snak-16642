import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* notificationRequest() {
  yield takeLatest(types.REGISTER_NOTIFY_REQUEST, registerNotifyID);
}

function* registerNotifyID(params) {
  console.log('[registerNotifyID saga]');
  let response;
  try {
    response = yield Api.getAxios(endPoints.getLabels);
    console.log('this is response ---> ', response);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response);
      yield put({
        type: types.REGISTER_NOTIFY_SUCCESS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: types.REGISTER_NOTIFY_FAILURE,
      data: error,
    });
  }
}
