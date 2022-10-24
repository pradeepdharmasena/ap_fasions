// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUVUin8XUI09Vq3AWvN_aAfhfFaFFFvfM",
  authDomain: "apfasions.firebaseapp.com",
  projectId: "apfasions",
  storageBucket: "apfasions.appspot.com",
  messagingSenderId: "300118634580",
  appId: "1:300118634580:web:0ee90621db748d9d257dc1",
  measurementId: "G-N5LSG13DRP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

