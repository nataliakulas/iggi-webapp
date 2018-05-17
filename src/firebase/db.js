import { db } from './firebase';
import * as firebase from 'firebase';

const db = firebase.database();

export const getProducts = () =>
  db.ref(`products`).once('value');

export const createUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email
    });

export const onceGetUsers = () =>
    db.ref('users').once('value');
