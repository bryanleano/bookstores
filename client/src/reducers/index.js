import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import books from './books';

const rootReducer = combineReducers({
  user,
  flash,
  books,
});

export default rootReducer;
