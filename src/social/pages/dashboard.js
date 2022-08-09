import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getUserByUserId, getWantsByUserUid } from "../services/social_firebase";
import Header from '../components/header'
import RoutePaths from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    
    const [currentUser, setCurrentUser] = useState({})
    const [wants, setWants] = useState([])

    const navigate = useNavigate();

    

    useEffect(()=>{


        const getCurrentUser = async () => {
            if(firebaseAuthUser){
                getUserByUserId(firebaseAuthUser.uid)
                .then(dbUser => {
                    setCurrentUser(dbUser)
                    getWantsByUserUid(dbUser.uid).then(wants => {
                        console.log('wants are:', wants)
                        setWants(wants)
                    })
                    .catch(err=> console.log('error in Dashboard getUserByID/getWantsByUserUid promise:', err))
                })
                .catch(err=> console.log('error in Dashboard getUserByID promise:', err))
            } else {
                setCurrentUser({})
                setWants([])
            }
        }
        getCurrentUser()
        
        

    }, [firebaseAuthUser])


    return (
        <div>
            <Header />
            username = {currentUser.username}
        </div>  
    );
}