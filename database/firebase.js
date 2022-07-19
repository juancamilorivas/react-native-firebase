import firebase from "firebase";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCelmTBObuenEOUBumm0ZC3zLDPSmatVoY",
  authDomain: "react-native-firebase-e7342.firebaseapp.com",
  projectId: "react-native-firebase-e7342",
  storageBucket: "react-native-firebase-e7342.appspot.com",
  messagingSenderId: "428193734114",
  appId: "1:428193734114:web:b28c88e7f30cc1e6a82dbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
