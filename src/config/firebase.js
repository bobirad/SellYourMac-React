// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC-Pk-tnc7G-MnlGrF_cpvkRAYTA21HPKM",
  authDomain: "sellyourmacreactapp.firebaseapp.com",
  projectId: "sellyourmacreactapp",
  storageBucket: "sellyourmacreactapp.appspot.com",
  messagingSenderId: "846293100902",
  appId: "1:846293100902:web:d669247255b91cd20a80a7",
  measurementId: "G-VT89RBP9XE"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
