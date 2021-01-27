import {fork} from 'redux-saga/effects';

import {loginRequest} from './auth-saga/login-saga';
import {settingRequest} from './settings-saga/setting-saga';
import {getLabelsRequest} from './labels-saga/labels-saga';
import {invitationRequest, sendInvitationRequest} from './invitation-saga/invitation-saga';
import {notificationRequest} from './notification-saga/notification-saga';
import {searchRequest} from './search-saga/search-saga';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(settingRequest);
  yield fork(getLabelsRequest);
  yield fork(invitationRequest);
  yield fork(sendInvitationRequest);
  yield fork(notificationRequest);
  yield fork(searchRequest);
}
