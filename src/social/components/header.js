import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getUserByUserId } from "../services/social_firebase";

export default function Header() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const [username, setUsername] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [isCurrentUser, setIsCurrentUser] = useState(false)
    const auth = getAuth();

    const getCurrentUser = async () => {
        if(firebaseAuthUser){
            // const dbUser = await getUserByUserId(firebaseAuthUser.uid)
            
            // console.log('db user is', dbUser)
            // setCurrentUser(dbUser)
            // setUsername(dbUser.username)
            getUserByUserId(firebaseAuthUser.uid)
            .then(dbUser => {
                console.log('db user is', dbUser)
                setCurrentUser(dbUser)
                setUsername(dbUser.username)
            })
            .catch(err=> console.log('error in getUserByID promise:', err))
            setIsCurrentUser(true)
        } else {
            setCurrentUser({})
            setUsername('')
            setIsCurrentUser(false)
            console.log('there is no firebaseAuthUser, so not trying to get db user')
        }
        
        // setCurrentUser(dbUser[0])
    }

    useEffect(()=>{

        getCurrentUser()

    }, [firebaseAuthUser])

    function firebaseSignOut () {
        const auth = getAuth();
        try{
            signOut(auth)
            console.log('successfully signed out')
        }catch(error){
            console.log('error in firebaseSignOut:', error)
        }

    }


    return (
        <div>
            <div className="font-serif text-lg w-full h-9 px-5 pt-1 bg-gray-300">
                <p className='font-bold text-sm justify-center items-center'>{username}
                {
                    isCurrentUser && 
                        <button
                            type="button"
                            title="Sign Out"
                            onClick={() => firebaseSignOut()}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    firebaseSignOut()
                                }
                            }}
                            className="bg-blue-500 hover:bg-gray-400 text-white hover:text-blue-500 font-bold py-1 px-1 rounded text-sm ml-2"
                        >
                            Signout
                        </button> 
                }</p>
            </div>
        </div>  
    );
}