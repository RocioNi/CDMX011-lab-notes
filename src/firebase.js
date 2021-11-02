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
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
// const db = getFirestore(app);
// export const auth = getAuth();
export default { db };
