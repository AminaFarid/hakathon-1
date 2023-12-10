import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCO9TcdZ3-vazPWhOjGxBgwzBcgh6MYcRs",
  authDomain: "fir-7316f.firebaseapp.com",
  projectId: "fir-7316f",
  storageBucket: "fir-7316f.appspot.com",
  messagingSenderId: "1053593259954",
  appId: "1:1053593259954:web:e463cd4e83bf04a7ffdeab",
  measurementId: "G-M2DCFDFQSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const studentForm = db.collection('students');