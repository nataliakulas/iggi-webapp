import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {SET_ACTIVE_MENU_ITEM, GET_PRODUCTS} from './actions';

const INITIAL_STATE = {
  products: []
};

export const activeMenuItemReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU_ITEM: {
      return {
        ...state,
        menuItem: action.payload
      }
    }
    default:
      return state
  }
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      }
    }
    default:
      return state
  }
};


const rootReducer = combineReducers({
  form: formReducer,
  menuItemState: activeMenuItemReducer,
  productsState: productsReducer
});

export default rootReducer;