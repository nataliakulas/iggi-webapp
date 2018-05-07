import {combineReducers} from 'redux';

import {SET_ACTIVE_LIST} from './actions';

export const setActiveListReducer = (state = {list: ''}, action) => {
  switch (action.type) {
    case SET_ACTIVE_LIST: {
      return {
        ...state,
        list: action.data
      }
    }
    default:
      return state
  }
};


const rootReducer = combineReducers({
  listState: setActiveListReducer
});

export default rootReducer;