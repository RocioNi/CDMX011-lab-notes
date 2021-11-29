import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXRRw_gBAXR3OkQnSFB-xAsrk45xzD1Hk',
  authDomain: 'todonotes-44578.firebaseapp.com',
  projectId: 'todonotes-44578',
  storageBucket: 'todonotes-44578.appspot.com',
  messagingSenderId: '183375753105',
  appId: '1:183375753105:web:79108a5fb35d4c4e493430',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const googleRegister = () => auth.signInWithPopup(provider);

const createUserEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);

const LogInUser = (email, password) => auth.signInWithEmailAndPassword(email, password);

const LogOut = () => auth.signOut();

const user = firebase.auth().currentUser;

export {
  db, auth, provider, googleRegister, createUserEmail, LogInUser, LogOut, user,
};
