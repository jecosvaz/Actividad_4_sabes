import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1UX71c3uVzrzge24-3BDvp9gjWtUKoPE",
  authDomain: "react-native-appmoviles.firebaseapp.com",
  projectId: "react-native-appmoviles",
  storageBucket: "react-native-appmoviles.appspot.com",
  messagingSenderId: "757136026932",
  appId: "1:757136026932:web:73d02ade855648b2cf4961"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

  export default {
      firebase,
      db, 
  };