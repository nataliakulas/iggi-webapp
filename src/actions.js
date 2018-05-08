import * as firebase from 'firebase';

const db = firebase.database();

export const SET_ACTIVE_MENU_LIST = 'SET_ACTIVE_MENU_LIST';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const setActiveMenuList = list => ({type: SET_ACTIVE_MENU_LIST, payload: list});
export const getProducts = products => ({type: GET_PRODUCTS, payload: products});

export function getProductsThunk() {
  return dispatch => {
    const products = [];

    db.ref(`products`).once('value')
      .then(snap => {
          snap.forEach(item => {
            let product = item.val();
            product.name = item.key;

            products.push(product)
          });
        }
      ).then(() => dispatch(getProducts(products)));
  }
}