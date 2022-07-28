import useFirebaseAuthUser from "../../hooks/use-firebase-auth-user"
import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";

export default function Header() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const [firebaseAuthUsername, setFirebaseAuthUsername] = useState('')
    // console.log('in /social/components/header.js firebaseAuthUser is', firebaseAuthUser)
    useEffect(()=>{
        if (firebaseAuthUser) {
            // setFirebaseAuthUsername(firebaseAuthUser.displayName)
            // username = firebaseUser.username
            setFirebaseAuthUsername(firebaseAuthUser.displayName)
            console.log('in /social/components/header.js firebaseAuthUser.displayName is', firebaseAuthUser.displayName)
        }
    },[firebaseAuthUser])

    return (
        <div>
            <div className="font-serif text-lg w-full h-20">
                <p>{firebaseAuthUsername}</p>
            </div>
        </div>  
    );
}