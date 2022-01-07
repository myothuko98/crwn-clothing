import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const config = {
  apiKey: "AIzaSyB6L2326qsgZGHHn1jkLE48bss4QVGbcPw",
  authDomain: "crown-db-905a5.firebaseapp.com",
  projectId: "crown-db-905a5",
  storageBucket: "crown-db-905a5.appspot.com",
  messagingSenderId: "148995845365",
  appId: "1:148995845365:web:5a5b91b68b3a9ed34fe9bc",
  measurementId: "G-ZG863K2654",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
