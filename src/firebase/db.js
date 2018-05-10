import * as firebase from 'firebase';

const db = firebase.database();

export const getProducts = () =>
  db.ref(`products`).once('value');

