import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 


const app = firebase.initializeApp({
  apiKey: "AIzaSyC-Pk-tnc7G-MnlGrF_cpvkRAYTA21HPKM",
  authDomain: "sellyourmacreactapp.firebaseapp.com",
  projectId: "sellyourmacreactapp",
  storageBucket: "sellyourmacreactapp.appspot.com",
  messagingSenderId: "846293100902",
  appId: "1:846293100902:web:d669247255b91cd20a80a7",
  measurementId: "G-VT89RBP9XE"
});



export const firebaseApp = app();