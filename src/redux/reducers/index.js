import {combineReducers} from 'redux';

import loginReducer from './auth-reducer/login-reducers';
import settingsReducer from './setting-reducer/setting-reducer';
import labelsReducer from './labels-reducer/labels-reducer';
let rootReducer;
export default (rootReducer = combineReducers(
  Object.assign({
    login: loginReducer,
    setting: settingsReducer,
    labels: labelsReducer,
  }),
));
