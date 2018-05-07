import {combineReducers} from 'redux';

import {SET_ACTIVE_MENU_LIST, GET_PRODUCTS} from './actions';

const INITIAL_STATE = {
  menuList: '',
  products: []
};

export const activeMenuListReducer = (state = INITIAL_STATE, action) => {
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
    default:
      return state
  }
};


const rootReducer = combineReducers({
  menuListState: activeMenuListReducer,
  productsState: productsReducer
});

export default rootReducer;