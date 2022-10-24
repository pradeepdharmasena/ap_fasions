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

export const createUserProfileDoc = async (authUser, otherProps) =>{
  console.log(" current user inside profile doc", authUser)
  if(!authUser) return;
  const userRef = firestore.doc(`users/${authUser.uid}`)
  const snapShot = await userRef.get();
  console.log("snapshot==> ", snapShot)

  if(!snapShot.exists){
    const {displayName, email} = authUser;
    const createAt = new Date();
    console.log("email   ==> ", email)
    console.log("displayName   ==> ", displayName)
    console.log("createAt   ==> ", createAt)

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...otherProps

      }

      )
    }catch(error){
      console.log("error creating user ===> ", error.massage)
    }
  }

}

