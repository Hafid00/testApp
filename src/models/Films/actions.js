const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';

const requestFilms = data => {
  return {
    data,
    type: GET_FILMS_REQUEST,
  };
};

const getFilmsSuccess = payload => {
  return {
    payload,
    type: GET_FILMS_SUCCESS,
  };
};

const getFilmsFailure = payload => {
  return {
    payload,
    type: GET_FILMS_FAILURE,
  };
};

export {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
  requestFilms,
  getFilmsSuccess,
  getFilmsFailure,
};
