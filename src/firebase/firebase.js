import * as firebase from 'firebase';
// copied from firebase dashboard

const prodConfig = {
    apiKey: "AIzaSyD_Vpbkg3E3mXrJ3YWutc8v_NMRbbAvQ_k",
    authDomain: "iggi-webapp.firebaseapp.com",
    databaseURL: "https://iggi-webapp.firebaseio.com",
    projectId: "iggi-webapp",
    storageBucket: "iggi-webapp.appspot.com",
    messagingSenderId: "5112353845"
};
// for production
const devConfig = {
    apiKey: "AIzaSyD_Vpbkg3E3mXrJ3YWutc8v_NMRbbAvQ_k",
    authDomain: "iggi-webapp.firebaseapp.com",
    databaseURL: "https://iggi-webapp.firebaseio.com",
    projectId: "iggi-webapp",
    storageBucket: "iggi-webapp.appspot.com",
    messagingSenderId: "5112353845"
};

const config = process.env.NODE_ENV === 'production'
? prodConfig
    : devConfig;

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
export {
    auth,
};