import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// console.log('sure working')
// import { seedDatabase } from './seed'

const firebaseConfig = {
    apiKey: "AIzaSyDGIScToAC88qff3hLDcfzQqBKNSBe-XLU",
    authDomain: "threegrays-3cf6a.firebaseapp.com",
    projectId: "threegrays-3cf6a",
    storageBucket: "threegrays-3cf6a.appspot.com",
    messagingSenderId: "32475921296",
    appId: "1:32475921296:web:3bdf10bb9e5dc4cb119115"
  };
  
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const firebaseAuth = getAuth();

// seedDatabase(firebase)

export {firebase, db, firebaseAuth, onAuthStateChanged}