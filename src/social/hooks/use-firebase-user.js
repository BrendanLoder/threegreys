import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId } from "../services/social_firebase";

export default function useFirebaseDBUser() {
    const [activeUser, setActiveUser] = useState({});
    const authUser = useContext(FirebaseUserContext);
   
    useEffect(() => {
        async function getUserObjByUserId() {
            // in here we need to query for the user data in the firestore
            const dbUser = await getUserByUserId(authUser.uid);
            setActiveUser(dbUser); // pass the user response to the state of activeUser
        }
        if (authUser && authUser.uid) {
            getUserObjByUserId();
        }
    }, [authUser]);
    
    return { user: activeUser }; // return activeUser as user to the hook when called
}