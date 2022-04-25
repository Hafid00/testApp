import {takeEvery} from 'redux-saga/effects';
import {getFilmsSuccess, getFilmsFailure} from './actions';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';

function callFilmsApi(data) {
  return axios({
    method: 'post',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=247082c0fd9674d69377c506d2b38e04&amp;language=en-US&amp;page=1',
    data: data,
    headers: {
      Authorization: 'token',
      Accept: 'application/json',
    },
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error;
    });
}

function* requestAllTheFilm(action) {
  const {data} = action;
  console.log('action', action);
  try {
    let response = yield call(callFilmsApi, data);
    if (response.status === 200) {
      yield put(getFilmsSuccess(response.data.results));
    } else {
      yield put(getFilmsFailure(response));
    }
  } catch (e) {
    console.log('call failure', e);
    yield put(getFilmsFailure(e));
  }
}

export {requestAllTheFilm};
