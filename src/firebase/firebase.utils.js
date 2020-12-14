import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAj52aHHXNJMAKA7zLzol4bVaRfys4VMlY",
    authDomain: "gem-clothing-db.firebaseapp.com",
    projectId: "gem-clothing-db",
    storageBucket: "gem-clothing-db.appspot.com",
    messagingSenderId: "440786288170",
    appId: "1:440786288170:web:8d5428226ec7629c9b8d53",
    measurementId: "G-MGSNNGJG1Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;