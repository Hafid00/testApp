import {takeEvery} from 'redux-saga/effects';
import {GET_USER, requestLoginSuccess} from './actions';
import {put, call} from 'redux-saga/effects';

function* getUserInfo(action) {
  const {data} = action;
  yield put(requestLoginSuccess(data));
}

export {getUserInfo};
