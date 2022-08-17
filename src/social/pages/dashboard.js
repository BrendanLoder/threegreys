import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId, getWantsByUserId, getWantItemsByUserId, getDoNotWantItemsByUserId, addUserWant, addUserDoNotWant } from "../services/social_firebase";
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

    const [newDoNotWant, setNewDoNotWant] = useState()
    const [newDoNotWantTitle, setNewDoNotWantTitle] = useState('');
    const [newDoNotWantDescription, setNewDoNotWantDescription] = useState('');
    const [newDoNotWantImageUrl, setNewDoNotWantImageUrl] = useState('');
    const [newDoNotWantLink, setNewDoNotWantLink] = useState('');
    const [newDoNotWantType, setNewDoNotWantype] = useState('');
    const [newDoNotWantIndex, setNewDoNotWantIndex] = useState('');
    const [newDoNotWantError, setNewDoNotWantError] = useState('');
    

    const [changingWant, setChangingWant] = useState(false)

    const navigate = useNavigate();
    const wantItems = wants && wants.length > 0 ? wants.map((want, index) => 
        <Want key={index} type="wantItem" title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} index={index}/> 
    ) : []
    console.log("HERE IS THE TEST:", doNotWants)
    const doNotWantItems = doNotWants && doNotWants.length > 0 ? doNotWants.map((doNotWant, index) => 
        <Want key={index} type="doNotWantItem" title={doNotWant.title} description={doNotWant.description} imageUrl={doNotWant.imageUrl} link={doNotWant.link} index={index}/> 
    ) : []

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



    const handleNewWantSubmission = async (event) =>
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
            'title': newWantTitle,
            'description': newWantDescription,
            'imageUrl': newWantImageUrl,
            'link': newWantLink,
            'userId': currentUser.userId
        }
        // console.log('Would be adding this to new want:')
        // console.log('desscription:', newWantDescription)
        // console.log('title: ', newWantTitle)
        // console.log('imageUrl: ', newWantImageUrl)
        // console.log('link: ', newWantType)
        // console.log('userId: ', currentUser.userId)

        const newUserWantList = await addUserWant(newWant)
        console.log('newUserWantList', newUserWantList)
        setWants(newUserWantList)
    }


    // ---------- START handleNewDoNotWantSubmission ----------

    const handleNewDoNotWantSubmission = async (event) =>
    {
        event.preventDefault()

        if(newDoNotWantTitle == '') {
            setNewDoNotWantError('Please Enter a Title')
            return
        }
        if(newDoNotWantDescription == '') {
            setNewDoNotWantError('Please Enter a Description')
            return
        }
        if(newDoNotWantImageUrl == '') {
            setNewDoNotWantError('Please Enter an Image Url')
            return
        }
        if(newDoNotWantLink == '') {
            setNewDoNotWantError('Please Enter a Link')
            return
        }
        // console.log('length of wants is:', wants.length)
        const newDoNotWantKey = doNotWants.length +1
        const newDoNotWant = {
            'title': newDoNotWantTitle,
            'description': newDoNotWantDescription,
            'imageUrl': newDoNotWantImageUrl,
            'link': newDoNotWantLink,
            'userId': currentUser.userId
        }
        console.log('Would be adding this to new Do NOT want:')
        console.log('desscription:', newDoNotWantDescription)
        console.log('title: ', newDoNotWantTitle)
        console.log('imageUrl: ', newDoNotWantImageUrl)
        console.log('link: ', newDoNotWantLink)
        console.log('userId: ', currentUser.userId)

        const newUserNoNotWantList = await addUserDoNotWant(newDoNotWant)
        setDoNotWants(newUserNoNotWantList)
    }

     // ---------- END handleNewDoNotWantSubmission ----------




    return (
        <div>
            <Header />
            <div className="font-sans container w-full mx-auto py-5">
                <div className="font-bold text-xl">{currentUser.username}</div>



                        {/* --------- START NEW WANT SUBMISSION ---------- */}
                        <form onSubmit={handleNewWantSubmission} method="POST" className='w-full'>

                            <p>{newWantError}</p>
                            <p><input
                                aria-label="Enter Want Title"
                                placeholder="Want Title"
                                value={newWantTitle}
                                onChange={({ target }) => setNewWantTitle(target.value)}
                                className='w-full'
                            /></p>

                            <p><input
                                aria-label="Enter Want Description"
                                placeholder="Want Description"
                                value={newWantDescription}
                                onChange={({ target }) => setNewWantDescription(target.value)}
                                className='w-full'
                            /></p>

                            <p><input
                                aria-label="Enter Want Image Url"
                                placeholder="Want Image Url"
                                value={newWantImageUrl}
                                onChange={({ target }) => setNewWantImageUrl(target.value)}
                                className='w-full'
                            /></p>

                            <p><input
                                    aria-label="Enter Want Link"
                                    placeholder="Want Link"
                                    value={newWantLink}
                                    onChange={({ target }) => setNewWantLink(target.value)}
                                    className='w-full'
                            /></p>

                            <button
                                type="submit"
                                className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:shadow-none w-full`}
                            >
                                Add Want
                            </button>

                        </form>
                        {/* --------- START NEW WANT SUBMIRRION ---------- */}
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




                <form onSubmit={handleNewDoNotWantSubmission} method="POST" className='w-full'>

                    <p>{newDoNotWantError}</p>
                    <p><input
                        aria-label="Enter DoNotWant Title"
                        placeholder="DoNotWant Title"
                        value={newDoNotWantTitle}
                        onChange={({ target }) => setNewDoNotWantTitle(target.value)}
                        className='w-full'
                    /></p>

                    <p><input
                        aria-label="Enter DoNotWant Description"
                        placeholder="DoNotWant Description"
                        value={newDoNotWantDescription}
                        onChange={({ target }) => setNewDoNotWantDescription(target.value)}
                        className='w-full'
                    /></p>

                    <p><input
                        aria-label="Enter DoNotWant Image Url"
                        placeholder="DoNotWant Image Url"
                        value={newDoNotWantImageUrl}
                        onChange={({ target }) => setNewDoNotWantImageUrl(target.value)}
                        className='w-full'
                    /></p>

                    <p><input
                            aria-label="Enter DoNotWant Link"
                            placeholder="Want DoNotLink"
                            value={newDoNotWantLink}
                            onChange={({ target }) => setNewDoNotWantLink(target.value)}
                            className='w-full'
                    /></p>

                    <button
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:shadow-none w-full`}
                    >
                        Add DoNotWant
                    </button>

                </form>        

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