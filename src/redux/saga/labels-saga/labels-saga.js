import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* getLabelsRequest() {
  yield takeLatest(types.GET_LABELS_REQUEST, getLabels);
}

function* getLabels(params) {
  console.log('[getLabels saga]');
  let response;
  try {
    response = yield Api.getAxios(endPoints.getLabels);
    console.log('this is response ---> ', response);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response);
      yield put({
        type: types.GET_LABELS_SUCCESS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: types.GET_LABELS_FAILURE,
      data: error,
    });
  }
}
