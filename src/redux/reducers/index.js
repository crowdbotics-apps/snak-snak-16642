import {combineReducers} from 'redux';

import loginReducer from './auth-reducer/login-reducers';

let rootReducer;
export default (rootReducer = combineReducers(
  Object.assign({
    login: loginReducer,
  }),
));
