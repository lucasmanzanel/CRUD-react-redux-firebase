import firebase from 'firebase/app';
// BDD
import 'firebase/firestore'
// autentication
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD3IAtN49UlpMo47T5rvyCs2N3D4ZlPZ10",
    authDomain: "crud-react-4b3c2.firebaseapp.com",
    projectId: "crud-react-4b3c2",
    storageBucket: "crud-react-4b3c2.appspot.com",
    messagingSenderId: "556585548935",
    appId: "1:556585548935:web:551e0d11cf2c81a2a78c22"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, db, googleAuthProvider}