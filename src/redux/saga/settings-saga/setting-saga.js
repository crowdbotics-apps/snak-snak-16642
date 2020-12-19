import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* settingRequest() {
  yield takeLatest(types.GET_SETTINGS_REQUEST, getSettings);
}

function* getSettings(params) {
  console.log('[getSettings saga]', params);
  try {
    let response = yield Api.getAxios(endPoints.getSettings, null, params);
    // console.log('API Response @@@@=========@@@@========@@@@', response);
    if (response?.status === 200) {
      params.cbSuccess(response.data);
      yield put({
        type: types.GET_SETTINGS_SUCCESS,
        data: response.data,
      });
    } else {
      params.cbFailure(response?.data?.data);
      yield put({
        type: types.GET_SETTINGS_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: types.GET_SETTINGS_FAILURE,
      data: error,
    });
    params.cbFailure(error.response);
  }
}
