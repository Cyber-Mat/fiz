import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBBv4ll-iaMIBUb1UfPiOpT6eHSR1-SSCA',
  authDomain: 'fiz-todo.firebaseapp.com',
  projectId: 'fiz-todo',
  storageBucket: 'fiz-todo.appspot.com',
  messagingSenderId: '1067180861551',
  appId: '1:1067180861551:web:67c44017299636522e859a',
  measurementId: 'G-JXNQVRTJYR',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Update firestore settings
firestore.settings({ timestampsInSnapshots: true });

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
