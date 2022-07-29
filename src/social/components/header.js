import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getUserByUserId } from "../services/social_firebase";

export default function Header() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const [firebaseAuthUsername, setFirebaseAuthUsername] = useState('')
    useEffect(()=>{
        if (firebaseAuthUser) {
            console.log('header.js / useEffect: YES user')
            const firebaseSocialUser = getUserByUserId(firebaseAuthUser.uid)
            console.log('socialuser:', firebaseSocialUser)
            setFirebaseAuthUsername("Have signed in uid:" + firebaseAuthUser.uid)
        } else {
            setFirebaseAuthUsername('')
        }
    },[firebaseAuthUser])

    async function getSocialUserData() {

    }

    function firebaseSignOut () {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('successfully signed out')
        }).catch((error) => {
            console.log('error in firebaseSignOut:', error)
        });

    }



    return (
        <div>
            <div className="font-serif text-lg w-full h-20">
                <p>{firebaseAuthUsername}</p>

                <button
                    type="button"
                    title="Sign Out"
                    onClick={() => firebaseSignOut()}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            firebaseSignOut()
                        }
                    }}
                >
                    Signout
                </button>
            </div>
        </div>  
    );
}