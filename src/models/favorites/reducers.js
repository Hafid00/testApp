import {HANDLE_FAVORITE_FILM} from './actions';

const initialState = {
  data: null,
  payload: [],
};

const favoritesReducer = (state = initialState, action) => {
  console.log(action.data);

  switch (action.type) {
    case HANDLE_FAVORITE_FILM:
      const item = state.payload.find(x => x.id === action.data.id);
      state = {
        ...state,
        payload: item
          ? state.payload.filter(f => f.id !== item.id)
          : [...state.payload, action.data],
      };
      break;
  }
  return state;
};

export {favoritesReducer};
