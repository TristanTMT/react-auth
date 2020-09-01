
// npm i firebase
// npm i react-firebaseui

import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQLSewocqvG7BKzjUtfE9fN5rvSCiqXLg",
    authDomain: "react-auth-9fd6c.firebaseapp.com",
    //databaseURL: "https://react-auth-9fd6c.firebaseio.com",
    //projectId: "react-auth-9fd6c",
    //storageBucket: "react-auth-9fd6c.appspot.com",
    //messagingSenderId: "73824281812",
    //appId: "1:73824281812:web:fef66c7ef21f90d9248741"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;