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
    let response = yield axios.post(endPoints.getSmsCode, params.params, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (response) {
      params.cbSuccess(response);
      yield put({
        type: types.GET_SMS_CODE_SUCCESS,
        data: response,
      });
    } else {
      params.cbFailure('Invalid email and password');
    }
  } catch (error) {
    params.cbFailure(error.response);
  }
}

function* verifyCode(params) {
  console.log('logout saga]', params.params);
  try {
    let response = yield Api.postRequest(endPoints.logout, null, params.params);
    if (response) {
      if (response?.data?.status === 200) {
        params.cbSuccess(response);
        yield put({type: types.LOGOUT_REQUEST_SUCCESS, data: response});
      } else {
        params.cbSuccess(response);
        yield put({type: types.LOGOUT_REQUEST_SUCCESS, data: response});
        params.cbSuccess(response);

        //Expiring token from my app side.
        // params.cbFailure('Token expired');
      }
    } else {
      params.cbFailure('Invalid email and password');
    }
  } catch (error) {
    console.log('error from login request saga -- > > >  > ', error);
    params.cbFailure(error);
  }
}
