import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBDEWdr2TbguST8onL25iiizThjUv_nxYg",
    authDomain: "clothing-db-459e2.firebaseapp.com",
    projectId: "clothing-db-459e2",
    storageBucket: "clothing-db-459e2.appspot.com",
    messagingSenderId: "431689786846",
    appId: "1:431689786846:web:e6707b6fcf623166b6e94f",
    measurementId: "G-LXGVRDTQFM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;