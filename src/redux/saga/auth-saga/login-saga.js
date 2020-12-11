import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';
import axios from 'axios';

export function* loginRequest() {
  yield takeLatest(types.GET_SMS_CODE_REQUEST, getSmsCode);
  yield takeLatest(types.VERIFY_CODE_REQUEST, verifyCode);
}

function* getSmsCode(params) {
  console.log('[getSmsCode saga]', params);
  try {
    let response = yield Api.postRequest(endPoints.getSmsCode, params.params);
    if (response?.status === 201) {
      params.cbSuccess(response);
      yield put({
        type: types.GET_SMS_CODE_SUCCESS,
        data: response,
      });
    } else {
      yield put({
        type: types.GET_SMS_CODE_FAILURE,
        data: response,
      });
      params.cbFailure(response?.data?.data);
    }
  } catch (error) {
    yield put({
      type: types.GET_SMS_CODE_FAILURE,
      data: error,
    });
    params.cbFailure(error.response);
  }
}

function* verifyCode(params) {
  console.log('logout saga]', params.params);
  try {
    let response = yield Api.postRequest(endPoints.verifyCode, params.params);
    if (response) {
      if (response?.status === 201) {
        params.cbSuccess(response);
        yield put({type: types.VERIFY_CODE_SUCCESS, data: response});
      } else {
        params.cbFailure(response);
        yield put({type: types.VERIFY_CODE_FAILURE, data: response});
      }
    } else {
      params.cbFailure('Invalid email and password');
    }
  } catch (error) {
    params.cbFailure(error);
  }
}
