import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getUserByUserId } from "../services/social_firebase";
import { useNavigate } from "react-router-dom";
import RoutePaths from '../../constants/routes';

export default function Header() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const [username, setUsername] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{

        const getCurrentUser = async () => {

            if(firebaseAuthUser){
                try {
                    const dbUser = await getUserByUserId(firebaseAuthUser.uid)
                    setCurrentUser(dbUser)
                    setUsername(dbUser.username)
                    setIsCurrentUser(true)
                } catch (err){
                    console.log('Error in header.js getUserById', err)
                }
            } else {
                setCurrentUser({})
                setUsername('')
                setIsCurrentUser(false)
            }
        }

        getCurrentUser()

    }, [firebaseAuthUser])

    function firebaseSignOut () {
        const auth = getAuth();
        try{
            signOut(auth)
        }catch(error){
            console.log('error in firebaseSignOut:', error)
        }

            navigate(RoutePaths.SOCIAL_LOGIN)
    }


    return (
        <div>
            <div className="font-serif text-lg w-full h-9 px-5 py-1 bg-gray-300 justify-end items-end flex">
                <p className='font-bold text-sm'>{currentUser.username}
                {
                    Object.keys(currentUser).length !== 0 ? 
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
                        : 
                        <button
                            type="button"
                            title="Login"
                            onClick={() => navigate(RoutePaths.SOCIAL_LOGIN)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    navigate(RoutePaths.SOCIAL_LOGIN)
                                }
                            }}
                            className="bg-blue-500 hover:bg-gray-400 text-white hover:text-blue-500 font-bold py-1 px-1 rounded text-sm ml-2"
                        >
                            Login
                        </button> 
                }</p>
            </div>
        </div>  
    );
}