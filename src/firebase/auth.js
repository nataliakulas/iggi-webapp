import {auth} from './firebase';

// Sign Up
export const registerUser =
    (email, password) => auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const logIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Password Reset
export const passwordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Sign out
export const signOut = () =>
    auth.signOut();

// Password Change
export const passwordUpdate = (password) =>
    auth.currentUser.updatePassword(password);


