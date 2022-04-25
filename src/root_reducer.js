import {combineReducers} from 'redux';

import {userReducer} from './models/user/reducers';
import {filmsReducer} from './models/Films/reducers';
import {favoritesReducer} from './models/favorites/reducers';

const reducer = combineReducers({
  userReducer,
  filmsReducer,
  favoritesReducer,
});

export {reducer};
