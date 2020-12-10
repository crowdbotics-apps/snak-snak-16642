import {fork} from 'redux-saga/effects';

import {loginRequest} from './auth-saga/login-saga';

export function* rootSaga() {
  yield fork(loginRequest);
}
