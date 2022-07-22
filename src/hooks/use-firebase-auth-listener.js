import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase'
import {db} from '../lib/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserContext from '../context/user'

export default function useFirebaseAuthListener() {
    const [firebaseUser, setFirebaseUser] = useState(null)
    // onAuthStateChanged() 
// console.log("onAuthStateChanged in use-firebase-auth-listener", onAuthStateChanged)


    // const { firebase } = useContext(FirebaseContext);
    // const {user} = useContext(UserContext)

    // useEffect(() => {
    //     console.log("db in use-firebase-auth-listener is:", db)
    //     const listener = onAuthStateChanged((firebaseAuthUser) => {
    //         if (firebaseAuthUser) {
    //             console.log("if (firebaseAuthUser) in use-firebase-auth-listener")
    //             localStorage.setItem('firebaseUser', JSON.stringify(firebaseAuthUser));
    //             setFirebaseUser(firebaseAuthUser);
    //         } else {
    //             console.log("else (firebaseAuthUser) in use-firebase-auth-listener")
    //             localStorage.removeItem('firebaseUser');
    //             setFirebaseUser(null);
    //         }
    //     })
    //     return () => listener();
    // },[])

    // console.log('firebaseUser in use-firebase-auth-listener:', firebaseUser)

    
    // const { firebase, firebaseAuth, onAuthStateChanged } = useContext(FirebaseContext)
    // const [firebaseUser, setFirebaseUser] = useState(JSON.parse(localStorage.getItem('firebaseUser')));
    // const { firebase, firebaseAuth, onAuthStateChanged } = useContext(FirebaseContext);
    
    // useEffect(() => {
    //     const listener = onAuthStateChanged((firebaseAuthUser) => {
    //         if (firebaseAuthUser) {
    //             localStorage.setItem('firebaseUser', JSON.stringify(firebaseAuthUser));
    //             setFirebaseUser(firebaseAuthUser);
    //         } else {
    //             localStorage.removeItem('firebaseUser');
    //             setFirebaseUser(null);
    //         }
    //     });
        
    //     return () => listener();
    // }, [firebase]);
    
    
    // console.log("firebase auth user is:", firebaseUser)
    return { firebaseUser };
}