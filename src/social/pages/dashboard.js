import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId, getWantsByUserId, getWantItemsByUserId } from "../services/social_firebase";
import Header from '../components/header'
import { useNavigate } from 'react-router-dom';
import Want from "../components/want";

export default function Dashboard() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    
    const [currentUser, setCurrentUser] = useState({})
    const [wants, setWants] = useState([])
    const [wantIds, setWantIds] = useState([])

    const navigate = useNavigate();
    const wantItems = wants && wants.length > 0 ? wants.map((want, index) => 
        <Want title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} index={index}/> 
    ) : null

    useEffect(() => {
        
        document.title = `Dashboard - TG Social`;
    }, [])

    useEffect(()=>{


        const getCurrentUser = async () => {

            if(firebaseAuthUser){
                try {
                    const dbUser = await getUserByUserId(firebaseAuthUser.uid)
                    setCurrentUser(dbUser)
                    const wants = await getWantItemsByUserId(dbUser.userId)
                    setWants(wants)
                } catch (err){
                    console.log('Error in dashboard.js getUserById and getWantsByUserId', err)
                }
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
            {wantItems}
        </div>  
    );
}