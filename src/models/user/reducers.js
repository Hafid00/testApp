import {GET_USER, GET_USER_SUCCESS} from './actions';

const initialState = {
  data: null,
  user: '',
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      state = {
        ...state,
        data: action.data,
        loading: true,
      };
      break;
    case GET_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        loading: false,
      };
      break;
  }

  return state;
};

export {userReducer};
