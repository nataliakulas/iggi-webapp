import * as firebase from 'firebase';

const db = firebase.database();

export const SET_ACTIVE_MENU_ITEM = 'SET_ACTIVE_MENU_ITEM';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const setActiveMenuItem = item => ({type: SET_ACTIVE_MENU_ITEM, payload: item});
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