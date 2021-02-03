import {combineReducers} from 'redux';

import loginReducer from './auth-reducer/login-reducers';
import settingsReducer from './setting-reducer/setting-reducer';
import labelsReducer from './labels-reducer/labels-reducer';
import invitationReducer from './invitation-reducer/invitation-reducer';
import notificationReducer from './notification-reducer/notification-reducer';
import searchReducer from './search-reducer/search-reducer';

let rootReducer;
export default (rootReducer = combineReducers(
  Object.assign({
    login: loginReducer,
    setting: settingsReducer,
    labels: labelsReducer,
    invitation: invitationReducer,
    notification: notificationReducer,
    search: searchReducer,
  }),
));
