import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA1pPi4cW_lulJ8AoOVNbzECGU7Sk6KsT8",
    authDomain: "przepisnik-przysmaki.firebaseapp.com",
    databaseURL: "https://przepisnik-przysmaki.firebaseio.com",
    projectId: "przepisnik-przysmaki",
    storageBucket: "",
    messagingSenderId: "94850127915"
};


firebase.initializeApp(config);

const firestore = firebase.firestore;
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export {firestore, auth, provider}