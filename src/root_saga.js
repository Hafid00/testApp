import {takeEvery} from 'redux-saga/effects';
import {GET_USER} from './models/user/actions';
import {getUserInfo} from './models/user/sagas';
import {GET_FILMS_REQUEST} from './models/Films/actions';
import {requestAllTheFilm} from './models/Films/saga';

export function* watchAll() {
  yield takeEvery(GET_USER, getUserInfo);
  yield takeEvery(GET_FILMS_REQUEST, requestAllTheFilm);
}
