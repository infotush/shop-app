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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
