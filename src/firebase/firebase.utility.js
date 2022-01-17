import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzk-ENPhkunQx2uwmFTpx3dSO07Rd5WT0',
  authDomain: 'shop-app-a1815.firebaseapp.com',
  projectId: 'shop-app-a1815',
  storageBucket: 'shop-app-a1815.appspot.com',
  messagingSenderId: '77730230592',
  appId: '1:77730230592:web:b7b9e4fed62024c7004aa5',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocuments = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log(`error creating user ${e.message}`);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
