import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import sessionReducer from './session';
import userReducer from './user';
import productsReducer from './products';
import activeMenuItemReducer from './menu';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  form: formReducer,
  menuItemState: activeMenuItemReducer,
  productsState: productsReducer
});

export default rootReducer;