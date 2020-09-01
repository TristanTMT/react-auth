import React from 'react';
import firebase from '../utils/firebaseConfig';

const Main = () => {
    return (
        <div>
            <h3>Yo comment i lé La Réunion !</h3>
            <p>Tu vas bien {firebase.auth().currentUser.displayName} ?</p>
            <div onClick={ () => {firebase.auth().signOut()}}>Se déconnecter</div>
        </div>
    );
};

export default Main;