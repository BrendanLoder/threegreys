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

    const [wantItems, setWantItems] = useState([])
    const [doNotWantItems, setDoNotWantItems] = useState([])

   
    const [newWantTitle, setNewWantTitle] = useState('');
    const [newWantDescription, setNewWantDescription] = useState('');
    const [newWantImageUrl, setNewWantImageUrl] = useState('');
    const [newWantLink, setNewWantLink] = useState('');
    const [newWantError, setNewWantError] = useState('');
    const [newWantWarning, setNewWantWarning] = useState('');

    const [newDoNotWantTitle, setNewDoNotWantTitle] = useState('');
    const [newDoNotWantDescription, setNewDoNotWantDescription] = useState('');
    const [newDoNotWantImageUrl, setNewDoNotWantImageUrl] = useState('');
    const [newDoNotWantLink, setNewDoNotWantLink] = useState('');
    const [newDoNotWantError, setNewDoNotWantError] = useState('');

    const [newWantSaveSuccess, setNewWantSaveSuccess] = useState('')

    const [newWantFormDisplayClass, setNewWantFormDisplayClass] = useState('hidden')
    const [addNewWantButtonDisplayClass, setAddNewWantButtonDisplayClass] = useState('')

    const warningText = '* title or description required'
    const errorText = 'Please Enter a Title or Description'


    useEffect(() => {
        document.title = 'TG Social - Dashboard';
    }, []);

    useEffect(()=>{

            const Results = () => (
                <div id="results" className="search-results">
                Some Results
                </div>
            )

        const getCurrentUser = async () => {

            if(firebaseAuthUser){
                try {
                    const dbUser = await getUserByUserId(firebaseAuthUser.uid)
                    setCurrentUser(dbUser)
                    const wants = await getWantItemsByUserId(dbUser.userId)
                    wants && wants.length > 0 && setWants(wants)
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
    
    function displayWants (wants) {
        const wantItems = wants && wants.length > 0 ? wants.map((want, index) => 
            <Want key={index} type="wantItem" title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} index={index}/> 
        ) : []
        setWantItems(wantItems)

    }

    useEffect(() => {
        if(wants.length > 0){
            displayWants(wants)
        }
    }, [wants])

    useEffect(() => {
        setNewWantWarning(warningText)
    }, [])

    function clearFields(type){
        if(type == 'wantForm'){
            setNewWantTitle('')
            setNewWantDescription('')
            setNewWantImageUrl('')
            setNewWantLink('')
        }
        if(type == 'doNotWantForm'){
            setNewDoNotWantTitle('')
            setNewDoNotWantDescription('')
            setNewDoNotWantImageUrl('')
            setNewDoNotWantLink('')
        }
    }

    function displayDoNotWants (doNotWants) {
        console.log('displayDoNotWants called with doNotWants:', doNotWants)
        const doNotWantItems = doNotWants && doNotWants.length > 0 ? doNotWants.map((doNotWant, index) => 
            <Want key={index} type="doNotWantItem" title={doNotWant.title} description={doNotWant.description} imageUrl={doNotWant.imageUrl} link={doNotWant.link} index={index}/> 
        ) : []
        setDoNotWantItems(doNotWantItems)

    }
    useEffect(() => {

        if(doNotWants.length > 0){
            displayDoNotWants(doNotWants)
        }
    
    }, [doNotWants])

    const fadeSuccess = (type) => {

        const saveMessage = 'Save successful'
        if(type == 'newWant'){
            setNewWantSaveSuccess(saveMessage)

            setTimeout(() => {
                setNewWantSaveSuccess('')
                toggleNewWantFormDisplay()
            }, 2000)
        } else if(type == 'newDoNotWant') {

        }

    }
    
        
      

    const handleNewWantSubmission = async (event) =>
    {
        event.preventDefault()

        if(newWantTitle == '' && newWantDescription == '') {
            setNewWantWarning('')
            setNewWantError(errorText)
            return
        } else {
            setNewWantWarning(warningText)
            setNewWantError('')
        }
        // if(newWantDescription == '') {
        //     setNewWantError('Please Enter a Description')
        //     return
        // }
        // if(newWantImageUrl == '') {
        //     setNewWantError('Please Enter an Image Url')
        //     return
        // }
        // if(newWantLink == '') {
        //     setNewWantError('Please Enter a Link')
        //     return
        // }

        const newWantKey = wants.length +1
        const newWant = {
            'title': newWantTitle,
            'description': newWantDescription,
            'imageUrl': newWantImageUrl,
            'link': newWantLink,
            'userId': currentUser.userId
        }
        try{

            await addUserWant(newWant)
            const wantList = wants
            wantList.push(newWant)
            setWants(wantList)
            displayWants(wantList)
            clearFields('wantForm')
            fadeSuccess('newWant')

        } catch(err){
            setNewWantError('want saving error: ' + err)
        }
        
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
        
        const newDoNotWantKey = doNotWants.length +1
        const newDoNotWant = {
            'title': newDoNotWantTitle,
            'description': newDoNotWantDescription,
            'imageUrl': newDoNotWantImageUrl,
            'link': newDoNotWantLink,
            'userId': currentUser.userId
        }

        await addUserDoNotWant(newDoNotWant)
        const doNotWantList = doNotWants
        doNotWantList.push(newDoNotWant)
        setDoNotWants(doNotWantList)
        displayDoNotWants(doNotWantList)

        
    }

    const toggleNewWantFormDisplay = (e) => {
        if(e) e.preventDefault()

        if(newWantFormDisplayClass == 'hidden') {
            setNewWantFormDisplayClass('')
            setAddNewWantButtonDisplayClass('hidden')
        } else {
            setNewWantFormDisplayClass('hidden')
            clearFields('wantForm')
            setAddNewWantButtonDisplayClass('')
        }
    }

     // ---------- END handleNewDoNotWantSubmission ----------




    return (
        <div>
            <Header />
            <div className="font-sans container w-full mx-auto py-5">
                <div className="font-bold text-xl">{currentUser.username}</div>






                    <div className='relative'>

                    <a href='' onClick={toggleNewWantFormDisplay}>
                        <div className={`w-6 h-6 text-md rounded-full bg-blue-500 text-white shadow-md hover:shadow-none text-center font-bold mx-1 my-1 ${addNewWantButtonDisplayClass}`}>
                                +
                        </div>
                    </a>
                    
                    <div className={`px-5 pt-0 pb-5 p-1 w-80 mb-3 rounded-lg border-2 border-blue-200 shadow-md m-auto relative ${newWantFormDisplayClass}`}>

                        


                        {/* Close new want form */}
                        <div className='absolute right-1 top-1'>
                            <a href='' onClick={toggleNewWantFormDisplay}><div className='w-6 h-6 text-md rounded-full content-between text-center bg-blue-500 text-white shadow-md hover:shadow-none font-bold'>x</div></a>
                        </div>
                        

                        
                        {/* --------- START NEW WANT SUBMISSION FORM ---------- */}
                        <form onSubmit={handleNewWantSubmission} method="POST" className='w-full px-2'>
                            <div className="text-xs text-red-500 mb-1 w-full text-center text-center text-red-700  min-h-[20px] h-[20px] pt-1">
                                <span className='text-indigo-600'>{newWantSaveSuccess}</span>
                                {newWantError}
                            </div>

                            <div>
                                <input
                                    aria-label="Enter Want Title"
                                    placeholder="Want Title"
                                    value={newWantTitle}
                                    onChange={({ target }) => setNewWantTitle(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            <div>
                                <input
                                    aria-label="Enter Want Description"
                                    placeholder="Want Description"
                                    value={newWantDescription}
                                    onChange={({ target }) => setNewWantDescription(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            <div>
                                <input
                                    aria-label="Enter Want Image Url"
                                    placeholder="Want Image Url"
                                    value={newWantImageUrl}
                                    onChange={({ target }) => setNewWantImageUrl(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            <div>
                                <input
                                    aria-label="Enter Want Link"
                                    placeholder="Want Link"
                                    value={newWantLink}
                                    onChange={({ target }) => setNewWantLink(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            <button
                                type="submit"
                                className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:shadow-none w-full`}
                            >
                                Add Want
                            </button>

                        </form>

                    </div>





                    </div>

                        
                        
                
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
                            Si ({wants.length})
                            </button>
                        </h2>
                        <div id="wantsCollapseOne" className="accordion-collapse collapse" aria-labelledby="wantsHeadingOne">
                            <div className="accordion-body py-4 px-5 max-h-48  overflow-scroll no-scrollbar">
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
                            Nein ({doNotWants.length})
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