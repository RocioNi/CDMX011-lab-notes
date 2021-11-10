import firebase from 'firebase/app';

import 'firebase/auth';
import { } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyBXRRw_gBAXR3OkQnSFB-xAsrk45xzD1Hk',
  authDomain: 'todonotes-44578.firebaseapp.com',
  projectId: 'todonotes-44578',
  storageBucket: 'todonotes-44578.appspot.com',
  messagingSenderId: '183375753105',
  appId: '1:183375753105:web:79108a5fb35d4c4e493430',
};
// Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);

const auth = fb.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const googleRegister = () => auth.signInWithPopup(provider);

const createUserEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);

const LogInUser = (email, password) => auth.signInWithEmailAndPassword(email, password);

export default { fb, auth, provider };
export {
  googleRegister, createUserEmail, LogInUser,
};
