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
    apiKey: 'AIzaSyADjSchzRoa7IuOFsIu0hPjmgJJzPG25y4',
    authDomain: 'aboai-48a69.firebaseapp.com',
    projectId: 'aboai-48a69',
    storageBucket: 'aboai-48a69.firebasestorage.app',
    messagingSenderId: '889593195869',
    appId: '1:889593195869:web:54c8453e25f8facd560cb4',
    measurementId: 'G-S77FQ1H8K1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const formDB = getFirestore(app);

export { formDB, analytics };
