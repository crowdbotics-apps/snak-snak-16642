import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* settingRequest() {
  yield takeLatest(types.GET_SETTINGS_REQUEST, getSettings);
}

function* getSettings(params) {
  console.log('[getSettings saga]', params);
  let response;
  try {
    if (params.key === 'put') {
      response = yield Api.putAxios(
        endPoints.getSettings,
        params.params,
        params,
      );
    } else {
      response = yield Api.getAxios(endPoints.getSettings, null, params);
    }
    if (params.key === 'put') {
      console.log(
        'API Response @@@@====Update=====@@@@===Setting=====@@@@',
        response,
      );
    } else {
      console.log(
        'API Response @@@@=====Get ====@@@@=====Setting===@@@@',
        response,
      );
    }
    if (params.key === 'put') {
      params.cbSuccess(response);
      yield put({
        type: types.PUT_SETTINGS_SUCCESS,
        data: response,
      });
    } else {
      if (response?.status === 200) {
        params.cbSuccess(response.data);
        yield put({
          type: types.GET_SETTINGS_SUCCESS,
          data: response.data,
        });
      }
    }
  } catch (error) {
    yield put({
      type: types.GET_SETTINGS_FAILURE,
      data: error,
    });
    params.cbFailure(error.response);
  }
}
