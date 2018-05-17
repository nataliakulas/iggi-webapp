import {GET_PRODUCTS} from '../actions';

const INITIAL_STATE = {
  products: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
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

export default productsReducer