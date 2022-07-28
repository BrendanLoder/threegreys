import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useFirebaseAuthListener() {

    // const [firebaseAuthUser, setFirebaseAuthUser] = useState(JSON.parse(localStorage.getItem('firebaseAuthUser')));
    const [firebaseAuthUser, setFirebaseAuthUser] = useState({})
    const { firebase } = useContext(FirebaseContext);
    const auth = getAuth()
    console.log('in useFirebaseAuthListener firebaseAuthUser.displayName is:', firebaseAuthUser.displayName)
     useEffect(() => {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                // localStorage.setItem('firebaseAuthUser', JSON.stringify(authUser));
                setFirebaseAuthUser(authUser);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = authUser.uid;
                // ...
            } else {
                // localStorage.removeItem('firebaseAuthUser');
                setFirebaseAuthUser(null);
                // User is signed out
                // ...
            }
        });

        // return () => listener()

    }, [firebase]);
    

    return { firebaseAuthUser };
}