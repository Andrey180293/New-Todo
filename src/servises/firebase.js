import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCEGbVHqJpcJzutSJT4eTf6tZ96nhcL304",
  authDomain: "todo-list-d867d.firebaseapp.com",
  projectId: "todo-list-d867d",
  storageBucket: "todo-list-d867d.appspot.com",
  messagingSenderId: "97627167960",
  appId: "1:97627167960:web:ced9d104ad0f3f00b60bad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
