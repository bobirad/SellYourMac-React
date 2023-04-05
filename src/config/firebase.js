// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Pk-tnc7G-MnlGrF_cpvkRAYTA21HPKM",
  authDomain: "sellyourmacreactapp.firebaseapp.com",
  projectId: "sellyourmacreactapp",
  storageBucket: "sellyourmacreactapp.appspot.com",
  messagingSenderId: "846293100902",
  appId: "1:846293100902:web:d669247255b91cd20a80a7",
  measurementId: "G-VT89RBP9XE"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

