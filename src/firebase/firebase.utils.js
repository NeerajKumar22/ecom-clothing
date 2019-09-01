import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
    apiKey: "AIzaSyAtQTRFsrER55j25KPuNkrJC0Tspbmrczg",
    authDomain: "ecom-clothing-db.firebaseapp.com",
    databaseURL: "https://ecom-clothing-db.firebaseio.com",
    projectId: "ecom-clothing-db",
    storageBucket: "",
    messagingSenderId: "322887585578",
    appId: "1:322887585578:web:c21b8e6a84aaf801"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;   