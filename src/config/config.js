// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2FWWS9tm50YyWm0yK1Bu_aLPpFN4VA9k",
    authDomain: "aboai-29dbb.firebaseapp.com",
    projectId: "aboai-29dbb",
    storageBucket: "aboai-29dbb.firebasestorage.app",
    messagingSenderId: "540126187994",
    appId: "1:540126187994:web:fae84e01fc3b9ae5ecf0e3",
    measurementId: "G-DCMJCQ0F2H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const formDB = getFirestore(app);

export { formDB, analytics };
