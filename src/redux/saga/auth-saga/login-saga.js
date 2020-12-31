import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';
import axios from 'axios';

export function* loginRequest() {
  yield takeLatest(types.GET_SMS_CODE_REQUEST, getSmsCode);
  yield takeLatest(types.VERIFY_CODE_REQUEST, verifyCode);
  yield takeLatest(types.LOGOUT_REQUEST, logoutReq);
  yield takeLatest(types.DELETE_ACCOUNT_REQUEST, deleteAccountReq);
}

function* getSmsCode(params) {
  console.log('[getSmsCode saga]', params);
  try {
    let response = yield Api.postRequest(endPoints.getSmsCode, params.params);
    console.log('API Response @@@@=========@@@@========@@@@', response);
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
    console.log('API Response @@@@=========@@@@========@@@@', response.data);
    if (response?.status === 201) {
      if (response.data.user_exists) {
        //Move to App
        params.cbSuccess(response.data, 'App');
        yield put({type: types.VERIFY_LOGIN_CODE_SUCCESS, data: response.data});
      } else {
        //Move to Sign up
        params.cbFailure(response.data, 'SignUp');
        yield put({
          type: types.VERIFY_SIGNUP_CODE_SUCCESS,
          data: response.data,
        });
      }
    }
  } catch (error) {
    params.cbFailure(error);
    yield put({
      type: types.VERIFY_CODE_FAILURE,
      data: error,
    });
  }
}

function* logoutReq(params) {
  console.log('[logout saga]', params);
  try {
    let response = yield Api.getAxios(endPoints.logout, null, params);
    if (response?.status !== 401) {
      console.log('API Response If', response);
      params.cbSuccess();
      yield put({type: types.LOGOUT_SUCCESS, data: response});
    } else {
      console.log('API Response Else', response);
      params.cbFailure();
      yield put({
        type: types.LOGOUT_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    params.cbFailure(error);
    yield put({
      type: types.LOGOUT_FAILURE,
      data: error,
    });
  }
}

function* deleteAccountReq(params) {
  console.log('[deleteAccountReq saga]', params);
  try {
    let response = yield Api.deleteAxios(endPoints.deleteAccount, null, params);
    console.log('response', response);
    if (response?.status !== 401) {
      params.cbSuccess();
      yield put({type: types.DELETE_ACCOUNT_SUCCESS, data: response});
    } else {
      params.cbFailure();
      yield put({
        type: types.DELETE_ACCOUNT_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    params.cbFailure(error);
    yield put({
      type: types.DELETE_ACCOUNT_FAILURE,
      data: error,
    });
  }
}
