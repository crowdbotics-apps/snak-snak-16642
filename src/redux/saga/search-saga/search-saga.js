import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* searchRequest() {
  yield takeLatest(types.USER_SEARCH_REQUEST, userSearch);
}

function* userSearch(params) {
  console.log('[userSearch saga]');
  let response;
  try {
    response = yield Api.postRequest(
      endPoints.userSearch,
      JSON.stringify(params),
      {
        token: params.token,
      },
    );
    console.log('this is response ---> ', response);
    if (typeof response === 'object' && Object.keys(response).length > 0) {
      params.cbSuccess(response);
      yield put({
        type: types.USER_SEARCH_SUCCESS,
        data: response,
      });
    }
  } catch (error) {
    yield put({
      type: types.USER_SEARCH_FAILURE,
      data: error,
    });
  }
}
