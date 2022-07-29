import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase'
import FirebaseUserContext from '../context/firebaseUser'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useFirebaseAuthListener() {

    // const [firebaseAuthUser, setFirebaseAuthUser] = useState(JSON.parse(localStorage.getItem('firebaseAuthUser')));
    const [firebaseAuthUser, setFirebaseAuthUser] = useState()
    const { firebase } = useContext(FirebaseContext);
    const auth = getAuth()
     useEffect(() => {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                console.log('use-firebase-auth-listener/useFirebaseAuthListener/onAuthStateChanged: YES user:',authUser)
                // localStorage.setItem('firebaseAuthUser', JSON.stringify(authUser));
                setFirebaseAuthUser(authUser);
                const uid = authUser.uid;
                // ...
            } else {
                console.log('use-firebase-auth-listener/useFirebaseAuthListener/onAuthStateChanged: NO user')
                // localStorage.removeItem('firebaseAuthUser');
                setFirebaseAuthUser(null);
            }
        });

        return () => listener()

    }, []);
    
    return { firebaseAuthUser };
}