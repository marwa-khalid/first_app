// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDOn3lwtRuUAjK6eZvczktx58CDSj9RIsc",

  authDomain: "testdatabase-3b72e.firebaseapp.com",

  projectId: "testdatabase-3b72e",

  storageBucket: "testdatabase-3b72e.appspot.com",

  messagingSenderId: "554600795680",

  appId: "1:554600795680:web:6aac0f8a10f164ff813645",

  measurementId: "G-9DQDQJ6973"

};


// Initialize Firestore
const app = firebase.initializeApp(firebaseConfig);
export const db=getFirestore(app);




