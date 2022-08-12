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
            <div className="font-sans container w-full mx-auto py-5">
                <div className="font-bold text-xl">{currentUser.username}</div>
                
                {/* WANTS ACCORDION */}
                <div className="accordion accordion-flush" id="wantsAccordion">
                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200 mb-2">
                        <h2 className="accordion-header mb-0" id="wantsHeadingOne">
                            <button className="
                            accordion-button
                            collapsed
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                            " type="button" data-bs-toggle="collapse" data-bs-target="#wantsCollapseOne" aria-expanded="true"
                            aria-controls="wantsCollapseOne">
                            Si
                            </button>
                        </h2>
                        <div id="wantsCollapseOne" className="accordion-collapse collapse" aria-labelledby="wantsHeadingOne">
                            <div className="accordion-body py-4 px-5 bg-blue-200 max-h-48  overflow-scroll no-scrollbar">
                                {wantItems}
                                {wantItems}
                                {wantItems}
                            </div>
                        </div>
                    </div>
                </div>


                {/* DO NOT WANTS ACCORDION */}
                <div className="accordion accordion-flush" id="doNotWantsAccordion">
                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200 mb-2">
                        <h2 className="accordion-header mb-0" id="doNotWantsHeadingOne">
                            <button className="
                            accordion-button
                            collapsed
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                            " type="button" data-bs-toggle="collapse" data-bs-target="#doNotWantsCollapseOne" aria-expanded="true"
                            aria-controls="doNotWantsCollapseOne">
                            Nein
                            </button>
                        </h2>
                        <div id="doNotWantsCollapseOne" className="accordion-collapse collapse" aria-labelledby="doNotWantsHeadingOne">
                            <div className="accordion-body py-4 px-5 bg-blue-200 max-h-48  overflow-scroll no-scrollbar">
                                {doNotWantItems}
                                {doNotWantItems}
                                {doNotWantItems}
                            </div>
                        </div>
                    </div>
                </div>
            
                
            </div>
        </div>  
    );
}