// import { getAuth } from "firebase/auth";
// import { useState, useEffect, useContext } from 'react';
// import { getUserByUserId } from "../services/social_firebase";
// // import { getUserByUserId } from '../services/firebase';
// // import UserContext from '../context/user';

// export default function useFirebaseUser() {

//     const [firebaseAuthUser, setFirebaseAuthUser] = useState(null);
//     const [firebaseUser, setFirebaseUser] = useState(null);
    

//     useEffect(() => {

//         async function getFirebaseUser() {
//             const auth = getAuth();
//             const firebaseAuthUser = auth.currentUser;

//             if (firebaseAuthUser) {
//                 const firebaseUser = await getUserByUserId(firebaseAuthUser.uid)
//                 console.log("X I see a signed in firebase user", firebaseUser)
//                 setFirebaseUser(firebaseUser)
//                 // User is signed in, see docs for a list of available properties
//                 // https://firebase.google.com/docs/reference/js/firebase.User
//                 // ...
//             } else {
//                 // No user is signed in.
//                 console.log("I DONT see a signed in user")
//             }
//         }
//         getFirebaseUser()
//     }, [])

//     return firebaseUser

// }

    // const { user } = useContext(UserContext);
   
    // useEffect(() => {
    //     async function getUserObjByUserId() {
    //         // in here we need to query for the user data in the firestore
    //         const [response] = await getUserByUserId(user.uid);
    //         setActiveUser(response); // pass the user response to the state of activeUser
    //     }
    //     if (user && user.uid) {
    //         getUserObjByUserId();
    //     }
    // }, [user]);
    
    // return { user: activeUser }; // return activeUser as user to the hook when called