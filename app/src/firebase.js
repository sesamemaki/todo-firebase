// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU29bQFxfygRwa5a1D6MSw39corf_XwyY",
  authDomain: "todo-firebase-1dd6e.firebaseapp.com",
  projectId: "todo-firebase-1dd6e",
  storageBucket: "todo-firebase-1dd6e.appspot.com",
  messagingSenderId: "456687622741",
  appId: "1:456687622741:web:6fcd618d8cca3cb2db92dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
