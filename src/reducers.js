import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import {SET_ACTIVE_MENU_LIST, GET_PRODUCTS, SET_USER_GROUPS, SET_USER_PRODUCTS} from './actions';

const INITIAL_STATE = {
  products: [],
  userGroups: [],
  userProducts: []
};

export const activeMenuListReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU_LIST: {
      return {
        ...state,
        menuList: action.payload
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
    case SET_USER_GROUPS: {
      return {
        ...state,
        userGroups: action.payload
      }
    }
    case SET_USER_PRODUCTS: {
      return {
        ...state,
        userProducts: action.payload
      }
    }
    default:
      return state
  }
};


const rootReducer = combineReducers({
  form: formReducer,
  menuListState: activeMenuListReducer,
  productsState: productsReducer
});

export default rootReducer;