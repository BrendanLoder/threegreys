import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase'
import {db} from '../lib/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserContext from '../context/user'

export default function useFirebaseAuthListener() {
    const [firebaseUser, setFirebaseUser] = useState(null)
    // const { firebase } = useContext(FirebaseContext);

    const auth = getAuth();

    useEffect(() => {
        
        const listener = onAuthStateChanged(auth, (user) => {

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
              } else {
                // User is signed out
                // ...
              }            

        })

        return () => listener()

    }, []);
    

    return { firebaseUser };
}