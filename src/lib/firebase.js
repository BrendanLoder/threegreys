import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// import { seedDatabase } from './social_seed'

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

// seedDatabase(app)

export {firebase, db}


// THIS IS IG'S FILE - so know for imports
// // import { seedDatabase } from '../seed'

// const config = {
//     apiKey: "AIzaSyBlm4tEC2uERA3rbv0nI73rw9ypFUFRR5M",
//     authDomain: "instagram-bl.firebaseapp.com",
//     projectId: "instagram-bl",
//     storageBucket: "instagram-bl.appspot.com",
//     messagingSenderId: "488290866504",
//     appId: "1:488290866504:web:d571d215cd72f0f10b4f7d"
// }

// const firebase = window.firebase.initializeApp(config)
// const {FieldValue} = window.firebase.firestore
// // seedDatabase(firebase)

// export {firebase, FieldValue}