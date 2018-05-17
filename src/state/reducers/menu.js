import {SET_ACTIVE_MENU_ITEM} from '../actions';

const activeMenuItemReducer = (state = {}, action) => {
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

export default activeMenuItemReducer
