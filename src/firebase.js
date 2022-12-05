// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNk28Ch4Oda4MVfUB7E6OulA0Mx4vgySQ",
  authDomain: "netflix-clone-e31c4.firebaseapp.com",
  projectId: "netflix-clone-e31c4",
  storageBucket: "netflix-clone-e31c4.appspot.com",
  messagingSenderId: "283141937178",
  appId: "1:283141937178:web:81e67b12efbdcfacb7d9a3",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
