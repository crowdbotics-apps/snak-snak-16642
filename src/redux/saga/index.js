import {fork} from 'redux-saga/effects';

import {loginRequest} from './auth-saga/login-saga';
import {settingRequest} from './settings-saga/setting-saga';
import {getLabelsRequest} from './labels-saga/labels-saga';
export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(settingRequest);
  yield fork(getLabelsRequest);
}
