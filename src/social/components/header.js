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
        if(firebaseAuthUser && firebaseAuthUser.uid){
            getUserByUserId(firebaseAuthUser.uid)
            .then(dbUser => {
                setCurrentUser(dbUser)
                setUsername(dbUser.username)
            })
            .catch(err=> console.log('error in getUserByID promise:', err))
            setIsCurrentUser(true)
        } else {
            setCurrentUser({})
            setUsername('')
            setIsCurrentUser(false)
        }
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
            <div className="font-serif text-lg w-full h-9 px-5 py-1 bg-gray-300 justify-end items-end flex">
                <p className='font-bold text-sm'>{username}
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







// import FirebaseUserContext from "../../context/firebaseUser"
// import { useEffect, useState, useContext } from "react";
// import { getAuth, signOut } from "firebase/auth";
// import { getUserByUserId } from "../services/social_firebase";
// import Header from '../components/header'

// export default function Dashboard() {
    
//     const firebaseAuthUser = useContext(FirebaseUserContext)
//     const [currentUser, setCurrentUser] = useState({})

//     const getCurrentUser = async () => {
//         if(firebaseAuthUser){
//             getUserByUserId(firebaseAuthUser.uid)
//             .then(dbUser => {
//                 setCurrentUser(dbUser)
//             })
//             .catch(err=> console.log('error in Dashboard getUserByID promise:', err))
//         } else {
//             setCurrentUser({})
//         }
//     }

//     useEffect(()=>{

//         getCurrentUser()

//     }, [firebaseAuthUser])


//     return (
//         <div>
//             <Header />
//             username = {currentUser.username}
//         </div>  
//     );
// }