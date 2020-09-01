import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebaseConfig.js';
import Main from './components/Main';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
  const [isSignedIn, setSigneIn] = useState(false);

  // APPELER CE QU'ON A CREE SUR FIREBASE
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect( () => {
    firebase.auth().onAuthStateChanged((user) => {
      setSigneIn(!!user); // !! TRANSFORME LA VALEUR EN BOOLEEN
    })
  }, []);

  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1>Hello World !</h1>
      {isSignedIn ? (
        <Main />
      ) : (
        <div className='login-page'>
          <h1>React Authentification</h1>
          <StyledFirebaseAuth 
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )
    }
    </div>
  );
};

export default App;
