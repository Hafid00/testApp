import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
} from './actions';

const initialState = {
  data: null,
  payload: null,
  loading: false,
  success: false,
  failure: false,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_REQUEST:
      state = {
        ...state,
        data: action.data,
        loading: true,
        success: false,
        failure: false,
      };
      break;
    case GET_FILMS_SUCCESS:
      state = {
        ...state,
        payload: action.payload,
        loading: false,
        success: true,
        failure: false,
      };
    case GET_FILMS_FAILURE:
      state = {
        ...state,
        payload: action.payload,
        loading: false,
        success: false,
        failure: true,
      };
      break;
  }

  return state;
};

export {filmsReducer};
