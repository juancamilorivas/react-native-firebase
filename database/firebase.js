import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCelmTBObuenEOUBumm0ZC3zLDPSmatVoY",
  authDomain: "react-native-firebase-e7342.firebaseapp.com",
  projectId: "react-native-firebase-e7342",
  storageBucket: "react-native-firebase-e7342.appspot.com",
  messagingSenderId: "428193734114",
  appId: "1:428193734114:web:b28c88e7f30cc1e6a82dbb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};






