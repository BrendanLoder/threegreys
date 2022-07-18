import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// import { seedDatabase } from './seed'

const firebaseConfig = {
    apiKey: "AIzaSyDGIScToAC88qff3hLDcfzQqBKNSBe-XLU",
    authDomain: "threegrays-3cf6a.firebaseapp.com",
    projectId: "threegrays-3cf6a",
    storageBucket: "threegrays-3cf6a.appspot.com",
    messagingSenderId: "32475921296",
    appId: "1:32475921296:web:3bdf10bb9e5dc4cb119115"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// seedDatabase(firebase)

export {db}