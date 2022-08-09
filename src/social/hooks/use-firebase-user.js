import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId } from "../services/social_firebase";

export default function useFirebaseDBUser() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const [currentUser, setCurrentUser] = useState({})
    const getCurrentUser = async () => {
        if(firebaseAuthUser){
            getUserByUserId(firebaseAuthUser.uid)
            .then(dbUser => {
                setCurrentUser(dbUser)
            })
            .catch(err=> console.log('error in getUserByID promise:', err))
        } else {
            setCurrentUser({})
        }
    }

    useEffect(()=>{

        getCurrentUser()

    }, [])


    return currentUser
}