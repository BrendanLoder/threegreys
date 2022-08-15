import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId, getWantsByUserId, getWantItemsByUserId, getDoNotWantItemsByUserId, addUserWant } from "../services/social_firebase";
import Header from '../components/header'
import { useNavigate } from 'react-router-dom';
import Want from "../components/want";

export default function Dashboard() {
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    
    const [currentUser, setCurrentUser] = useState({})
    const [wants, setWants] = useState([])
    const [doNotWants, setDoNotWants] = useState([])
    const [wantIds, setWantIds] = useState([])

    const [newWant, setNewWant] = useState()
    const [newWantTitle, setNewWantTitle] = useState('');
    const [newWantDescription, setNewWantDescription] = useState('');
    const [newWantImageUrl, setNewWantImageUrl] = useState('');
    const [newWantLink, setNewWantLink] = useState('');
    const [newWantType, setNewWantType] = useState('');
    const [newWantIndex, setNewWantIndex] = useState('');
    const [newWantError, setNewWantError] = useState('');

    const navigate = useNavigate();
    const wantItems = wants && wants.length > 0 ? wants.map((want, index) => 
        <Want key={index} type="wantItem" title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} index={index}/> 
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


    // NEW WANT functionality
    // const addWant = async (want) => {
    //     console.log('passed in want:', want)
    //     const key = "newWant_" + wants.length
    //     let newWantItem = <Want type="newWantItem" title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} index={wants.length + 1}/> 

    //     setNewWant(newWantItem)
    // }



    const handleNewWantSubmission = (event) =>
    {
        event.preventDefault()

        if(newWantTitle == '') {
            setNewWantError('Please Enter a Title')
            return
        }
        if(newWantDescription == '') {
            setNewWantError('Please Enter a Description')
            return
        }
        if(newWantImageUrl == '') {
            setNewWantError('Please Enter an Image Url')
            return
        }
        if(newWantLink == '') {
            setNewWantError('Please Enter a Link')
            return
        }
        // console.log('length of wants is:', wants.length)
        const newWantKey = wants.length +1
        const newWant = {
            'title:': newWantTitle,
            'description': newWantDescription,
            'imageUrl:': newWantImageUrl,
            'link': newWantLink,
            'userId': currentUser.userId
        }
        // console.log('Would be adding this to new want:')
        // console.log('desscription:', newWantDescription)
        // console.log('title: ', newWantTitle)
        // console.log('imageUrl: ', newWantImageUrl)
        // console.log('link: ', newWantType)
        // console.log('userId: ', currentUser.userId)

        addUserWant(newWant)
    }


    return (
        <div>
            <Header />
            <div className="font-sans container w-full mx-auto py-5">
                <div className="font-bold text-xl">{currentUser.username}</div>



                        {/* TEST */}
                        <form onSubmit={handleNewWantSubmission} method="POST">

                            <p>{newWantError}</p>
                            <p><input
                                aria-label="Enter Want Title"
                                placeholder="Want Title"
                                value={newWantTitle}
                                onChange={({ target }) => setNewWantTitle(target.value)}
                            /></p>

                            <p><input
                                aria-label="Enter Want Description"
                                placeholder="Want Description"
                                value={newWantDescription}
                                onChange={({ target }) => setNewWantDescription(target.value)}
                            /></p>

                            <p><input
                                aria-label="Enter Want Image Url"
                                placeholder="Want Image Url"
                                value={newWantImageUrl}
                                onChange={({ target }) => setNewWantImageUrl(target.value)}
                            /></p>

                            <p><input
                                    aria-label="Enter Want Link"
                                    placeholder="Want Link"
                                    value={newWantLink}
                                    onChange={({ target }) => setNewWantLink(target.value)}
                            /></p>

                            <button
                                type="submit"
                                className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:shadow-none`}
                            >
                                Add Want
                            </button>

                        </form>
                        {/* <button className="mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg" onClick={addWant}>
                            test:
                        </button>
                        {newWant} */}

                            {/* ENDTEST */}
                
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
                            <div className="accordion-body py-4 px-5 max-h-48  overflow-scroll no-scrollbar">
                                {/* {newWant} */}
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
                            <div className="accordion-body py-4 px-5 max-h-48  overflow-scroll no-scrollbar">
                                {doNotWantItems}
                            </div>
                        </div>
                    </div>
                </div>
            
                
            </div>
        </div>  
    );
}