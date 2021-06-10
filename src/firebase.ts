import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg2HmNkP92tqxxTDZJKcXpozugL22exu4",
  authDomain: "twitter-app-fb5e9.firebaseapp.com",
  projectId: "twitter-app-fb5e9",
  storageBucket: "twitter-app-fb5e9.appspot.com",
  messagingSenderId: "888704287013",
  appId: "1:888704287013:web:1e97c8e7574e664b525acc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
