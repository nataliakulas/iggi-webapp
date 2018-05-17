import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD_Vpbkg3E3mXrJ3YWutc8v_NMRbbAvQ_k",
  authDomain: "iggi-webapp.firebaseapp.com",
  databaseURL: "https://iggi-webapp.firebaseio.com",
  projectId: "iggi-webapp",
  storageBucket: "iggi-webapp.appspot.com",
  messagingSenderId: "5112353845"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}


const auth = firebase.auth();
const db = firebase.database();

export {
  auth, db
};