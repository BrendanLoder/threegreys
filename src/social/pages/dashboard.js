import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId, getWantsByUserId, getWantItemsByUserId, getDoNotWantItemsByUserId } from "../services/social_firebase";
import Header from '../components/header'
import { useNavigate } from 'react-router-dom';
import Want from "../components/want";

export default function Dashboard() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    
    const [currentUser, setCurrentUser] = useState({})
    const [wants, setWants] = useState([])
    const [doNotWants, setDoNotWants] = useState([])
    const [wantIds, setWantIds] = useState([])

    const navigate = useNavigate();
    const wantItems = wants && wants.length > 0 ? wants.map((want, index) => 
        <Want key={index} title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} index={index}/> 
    ) : []
    const doNotWantItems = doNotWants && doNotWants.length > 0 ? doNotWants.map((doNotWant, index) => 
        <Want key={index} type="doNotWantItem" title={doNotWant.title} description={doNotWant.description} imageUrl={doNotWant.imageUrl} link={doNotWant.link} index={index}/> 
    ) : []

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
                    const doNotWants = await getDoNotWantItemsByUserId(dbUser.userId)
                    setDoNotWants(doNotWants)
                } catch (err){
                    console.log('Error in dashboard.js getUserById and getWantsByUserId and getDoNotWantItemsByUserId', err)
                }
            } else {
                setCurrentUser({})
                setWants([])
                setDoNotWants([])
            }
        }
        getCurrentUser()
        
    }, [firebaseAuthUser])


    return (
        <div>
            <Header />
            <div className="font-sans container w-full mx-auto">
                <div className="font-bold text-xl">{currentUser.username}</div>
                <div className="w-full md:w-3/5 mx-auto p-8">
                    <div className="shadow-md">
                    <div className='h-px w-full bg-gray-300'></div>
                        <div className="tab w-full overflow-scroll border-t max-h-80 no-scrollbar">
                            <input className="absolute top-0 right-0opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
                            <label className="block p-5 leading-normal cursor-pointer font-bold" htmlFor="tab-multi-one">Si ({wantItems.length})</label>
                            {wantItems}
                            {wantItems}
                            {wantItems}
                        </div>
                        <div className='h-2 w-full bg-gray-300'></div>
                        <div className="tab w-full overflow-hidden border-t max-h-80 no-scrollbar">
                            <input className="absolute opacity-0 " id="tab-multi-two" type="checkbox" name="tabs" />
                            <label className="block p-5 leading-normal cursor-pointer font-bold" htmlFor="tab-multi-two">Nein ({doNotWantItems.length})</label>
                            {doNotWantItems}
                            {doNotWantItems}
                            {doNotWantItems}
                        </div>
                        
                        
                        
                    </div>
                </div>
                
            </div>
        </div>  
    );
}