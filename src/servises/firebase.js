import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAVlB_kBRth2I-H7t5FzbxnuttsLVujI08",
  authDomain: "todo-9a634.firebaseapp.com",
  projectId: "todo-9a634",
  storageBucket: "todo-9a634.appspot.com",
  messagingSenderId: "805499520554",
  appId: "1:805499520554:web:b218181a7fe33d3fd92553",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
