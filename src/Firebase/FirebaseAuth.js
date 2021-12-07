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

const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   console.log(user.displayName);
//   console.log(user.email);
//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   console.log(user.uid);
// }

export {
  db, auth, provider, googleRegister, createUserEmail, LogInUser, LogOut, user,
};
