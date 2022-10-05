import FirebaseUserContext from "../../context/firebaseUser"
import { useEffect, useState, useContext } from "react";
import { getUserByUserId, getWantItemsByUserId, getDoNotWantItemsByUserId, addUserWant, addUserDoNotWant, updateUserWants, updateUserDoNotWants } from "../services/social_firebase";
import { createWantDisplayObjects } from "../services/social";
import Header from '../components/header'
import Spotlight from "../components/spotlight";

export default function Dashboard() {

    // Set Page Title useEffect
    useEffect(() => {
        document.title = 'TG Social - Dashboard';
    }, []);
    
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const [currentUser, setCurrentUser] = useState({})

    // Start Wants Specific States

    const [wants, setWants] = useState([])
    const [wantItems, setWantItems] = useState([])
    const [newWantTitle, setNewWantTitle] = useState('');
    const [newWantDescription, setNewWantDescription] = useState('');
    const [newWantImageUrl, setNewWantImageUrl] = useState('');
    const [newWantLink, setNewWantLink] = useState('');
    const [newWantError, setNewWantError] = useState('');
    const [newWantSaveSuccess, setNewWantSaveSuccess] = useState('')
    const [newWantFormDisplayClass, setNewWantFormDisplayClass] = useState('hidden')
    const [addNewWantButtonDisplayClass, setAddNewWantButtonDisplayClass] = useState('')
    const [wantDeleteArray, setWantDeleteArray] = useState([])
    const [wantKeepArray, setWantKeepArray] = useState([])
    const [wantsEditable, setWantsEditable] = useState(false)
    const [hideNewWantFormFields, setHideNewWantFormFields] = useState(false)
    const [newWantFormFieldsClass, setNewWantFormFieldsClass] = useState('')

    // End Wants Specific States

    // Start Do Not Wants Specific States

    const [doNotWants, setDoNotWants] = useState([])
    const [doNotWantItems, setDoNotWantItems] = useState([])
    const [newDoNotWantTitle, setNewDoNotWantTitle] = useState('');
    const [newDoNotWantDescription, setNewDoNotWantDescription] = useState('');
    const [newDoNotWantImageUrl, setNewDoNotWantImageUrl] = useState('');
    const [newDoNotWantLink, setNewDoNotWantLink] = useState('');
    const [newDoNotWantError, setNewDoNotWantError] = useState('');
    const [newDoNotWantSaveSuccess, setNewDoNotWantSaveSuccess] = useState('')
    const [newDoNotWantFormDisplayClass, setNewDoNotWantFormDisplayClass] = useState('hidden')
    const [addNewDoNotWantButtonDisplayClass, setAddNewDoNotWantButtonDisplayClass] = useState('')
    const [doNotWantDeleteArray, setDoNotWantDeleteArray] = useState([])
    const [doNotWantKeepArray, setDoNotWantKeepArray] = useState([])
    const [doNotWantsEditable, setDoNotWantsEditable] = useState(false)
    const [hideNewDoNotWantFormFields, setHideNewDoNotWantFormFields] = useState(false)
    const [newDoNotWantFormFieldsClass, setNewDoNotWantFormFieldsClass] = useState('')

    // End Do Not Wants Specific States
    const [refreshWants, setRefreshWants] = useState('')
    // New Want/Do Not Want Form Error
    const errorText = 'Please Enter a Title or Description'

    const refreshListData = async (event) =>  {
        if(event) {
            event.preventDefault()
        }
        setDoNotWantsEditable(false)
        setWantsEditable(false)
        const updatedWantList = await getWantItemsByUserId(currentUser.userId)
        updatedWantList && updatedWantList.length > 0 && setWants(updatedWantList)
        const updatedDoNotWantList = await getDoNotWantItemsByUserId(currentUser.userId)
        updatedDoNotWantList && updatedDoNotWantList.length > 0 && setDoNotWants(updatedDoNotWantList)
    }

    // Get User useEffect
    useEffect(()=>{

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
    
    // **-------------------- Start Shared Want And Do Not Want Functions --------------------**


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

    const fadeSuccess = (type) => {
        const saveMessage = 'Save successful'
        if(type == 'newWant'){
            setNewWantSaveSuccess(saveMessage)
            setNewWantFormFieldsClass('hidden')
            setTimeout(() => {
                setNewWantSaveSuccess('')
                toggleNewWantFormDisplay()
                setNewWantFormFieldsClass('')
            }, 1000)
        } else if(type == 'newDoNotWant') {
            setNewDoNotWantSaveSuccess(saveMessage)
            setNewDoNotWantFormFieldsClass('hidden')
            setTimeout(() => {
                setNewDoNotWantSaveSuccess('')
                toggleNewDoNotWantFormDisplay()
                setNewDoNotWantFormFieldsClass('')
            }, 1000)
        }
    }

    function toggleEdit(type){
        type && type==='wants' ? setWantsEditable(!wantsEditable) :
        setDoNotWantsEditable(!doNotWantsEditable)
    }
    
    // **-------------------- End Shared Want And Do Not Want Functions --------------------**
  

// **********************************************************************


    // **-------------------- Start Do Not Want Specific Functions --------------------**

    useEffect(() => {
        if(doNotWants.length > 0){
            const doNotWantDisplayObjects = createWantDisplayObjects({
                'wantData': doNotWants,
                'type': 'doNotWantItem',
                'isEditable': doNotWantsEditable,
                'userId': currentUser.userId,
                'userDocId': currentUser.userDocId,
                'refreshListData': refreshListData

            })  
            setDoNotWantItems(doNotWantDisplayObjects)
            setDoNotWantItems(doNotWantDisplayObjects)
            setDoNotWantItems(doNotWantDisplayObjects)
        }
    }, [doNotWants, doNotWantsEditable])



    const toggleNewDoNotWantFormDisplay = (e) => {
        if(e) e.preventDefault()

        if(newDoNotWantFormDisplayClass == 'hidden') {
            setNewDoNotWantFormDisplayClass('')
            setAddNewDoNotWantButtonDisplayClass('hidden')
        } else {
            setNewDoNotWantFormDisplayClass('hidden')
            clearFields('doNotWantForm')
            setAddNewDoNotWantButtonDisplayClass('')
        }
    }
    
    
    const handleNewDoNotWantSubmission = async (event) =>
    {
        event.preventDefault()

        if(newDoNotWantTitle == '' && newDoNotWantDescription == '') {
            setNewDoNotWantError(errorText)
            return
        } else {
            setNewDoNotWantError('')
        }
        
        const newDoNotWantKey = doNotWants.length +1
        const newDoNotWant = {
            'title': newDoNotWantTitle,
            'description': newDoNotWantDescription,
            'imageUrl': newDoNotWantImageUrl,
            'link': newDoNotWantLink,
            'userId': currentUser.userId
        }

        try{

            newDoNotWant.wantId = await addUserDoNotWant(newDoNotWant)
            const doNotWantList = doNotWants
            doNotWantList.push(newDoNotWant)
            setDoNotWants(doNotWantList)

            const doNotWantDisplayObjects = createWantDisplayObjects({
                'wantData': doNotWants,
                'type': 'doNotWantItem',
                'isEditable': doNotWantsEditable,
                'userId': currentUser.userId,
                'userDocId': currentUser.userDocId,
                'refreshListData': refreshListData

            })
            setDoNotWantItems(doNotWantDisplayObjects)
            fadeSuccess('newDoNotWant')
            clearFields('doNotWantForm')

        } catch(err){
            setNewDoNotWantError('do not want saving error: ' + err)
        }
    }

    const handleDoNotWantsEditSubmit = async (event) => {
        event.preventDefault()
        const target = event.target;
        Array.prototype.forEach.call(event.target.elements, (element) => {
            if(element && element.value && element.checked) {
                setDoNotWantDeleteArray(doNotWantDeleteArray.push(element.value)) 
            } else if(element && element.value && !element.checked) {
                setDoNotWantKeepArray(doNotWantKeepArray.push(element.value))
            }
            
        })
        await updateUserDoNotWants({
            userId: currentUser.userId,
            deleteArray: doNotWantDeleteArray,
            keepArray: doNotWantKeepArray
        })

        const doNotWants = await getDoNotWantItemsByUserId(currentUser.userId)
        doNotWants && doNotWants.length > 0 && setDoNotWants(doNotWants)
        setDoNotWantDeleteArray([])
        setDoNotWantKeepArray([])
        setDoNotWantsEditable(false)
    }

    // **-------------------- End Do Not Want Specific Functions --------------------**


    // **********************************************************************


    // **-------------------- Start Wants Specific Functions --------------------**

    useEffect(() => {
        if(wants.length > 0){
            
            const wantDisplayObjects = createWantDisplayObjects({
                'wantData': wants,
                'type': 'wantItem',
                'isEditable': wantsEditable,
                'userId': currentUser.userId,
                'userDocId': currentUser.userDocId,
                'refreshListData': refreshListData

            })
            setWantItems(wantDisplayObjects)
        }
    }, [wants, wantsEditable])
    

    const handleNewWantSubmission = async (event) =>
    {
        event.preventDefault()

        if(newWantTitle == '' && newWantDescription == '') {
            setNewWantError(errorText)
            return
        } else {
            setNewWantError('')
        }

        const newWantKey = wants.length +1
        const newWant = {
            'title': newWantTitle,
            'description': newWantDescription,
            'imageUrl': newWantImageUrl,
            'link': newWantLink,
            'userId': currentUser.userId
        }
        try{

            newWant.wantId = await addUserWant(newWant)
            const wantList = wants
            wantList.push(newWant)
            setWants(wantList)
            const wantDisplayObjects = createWantDisplayObjects({
                'wantData': wants,
                'type': 'wantItem',
                'isEditable': wantsEditable,
                'userId': currentUser.userId,
                'userDocId': currentUser.userDocId,
                'refreshListData': refreshListData

            })
            setWantItems(wantDisplayObjects)
            clearFields('wantForm')
            fadeSuccess('newWant')

        } catch(err){
            setNewWantError('want saving error: ' + err)
        }
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

    const handleWantsEditSubmit = async (event) => {
        event.preventDefault()
        const target = event.target;
        Array.prototype.forEach.call(event.target.elements, (element) => {
            if(element && element.value && element.checked) {
                setWantDeleteArray(wantDeleteArray.push(element.value)) 
            } else if(element && element.value && !element.checked) {
                setWantKeepArray(wantKeepArray.push(element.value))
            }
            
        })
        await updateUserWants({
            userId: currentUser.userId,
            deleteArray: wantDeleteArray,
            keepArray: wantKeepArray
        })

        const wants = await getWantItemsByUserId(currentUser.userId)
        wants && wants.length > 0 && setWants(wants)
        setWantDeleteArray([])
        setWantKeepArray([])
        setWantsEditable(false)
    }

    // **-------------------- End Wants Specific Functions --------------------**
    
    return (
        <div>
            <Header />
            <div className="font-sans container w-full mx-auto py-5">

                <Spotlight />
                
                <div className='relative'>

                    {/* Add Want Button */}
                    <button className={` bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-1 rounded text-sm m-1 w-20 text-center ${addNewWantButtonDisplayClass}`} onClick={toggleNewWantFormDisplay}>
                        Add Want
                    </button>
                    
                    {/* Add Want Form Window */}
                    <div className={`px-5 pt-0 pb-5 p-1 w-80 mb-3 rounded-lg border-2 bg-blue-50 border-blue-200 shadow-md m-auto relative ${newWantFormDisplayClass}`}>

                        {/* Close Add Want Window Button */}
                        <div className={`absolute right-1 top-1 ${newWantFormFieldsClass}`}>
                            <a href='' onClick={toggleNewWantFormDisplay}><div className='w-6 h-6 text-md rounded-full content-between text-center bg-blue-500 text-white shadow-md font-bold hover:bg-blue-800'>x</div></a>
                        </div>
                            {/* New Want Form Success Message */}
                            <div className="text-red-500 w-full text-center text-center text-red-700 mt-2">
                                <span className='text-indigo-600'>{newWantSaveSuccess}</span>
                            </div>
                        
                        {/* --------- Start New Want Submit Form ---------- */}

                        <form onSubmit={handleNewWantSubmission} method="POST" className={`w-full px-2 ${newWantFormFieldsClass}`}>

                                {/* New Want Form Error Message */}
                                <div className="text-xs text-red-500 mb-1 w-full text-center text-center text-red-700  min-h-[20px] h-[20px] pt-1 mt-2">
                                    {newWantError}
                                </div>
                            {/* New Want Title */}
                            <div>
                                <input
                                    aria-label="Enter Title"
                                    placeholder="Title"
                                    value={newWantTitle}
                                    onChange={({ target }) => setNewWantTitle(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            {/* New Want Description */}
                            <div>
                                <input
                                    aria-label="Enter Description"
                                    placeholder="Description"
                                    value={newWantDescription}
                                    onChange={({ target }) => setNewWantDescription(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            {/* New Want Image Url */}
                            <div>
                                <input
                                    aria-label="Enter Image Url"
                                    placeholder="Image Url"
                                    value={newWantImageUrl}
                                    onChange={({ target }) => setNewWantImageUrl(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            {/* New Want Link */}
                            <div>
                                <input
                                    aria-label="Enter Link"
                                    placeholder="Link"
                                    value={newWantLink}
                                    onChange={({ target }) => setNewWantLink(target.value)}
                                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                                />
                            </div>

                            {/* New Want Submit Button */}
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:bg-blue-800`}
                            >
                                Add Want
                            </button>

                        </form>

                        {/* --------- End New Want Submit Form ---------- */}

                    </div>
                </div>
                
                {/* Start Wants Accordion */}
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

                            <form onSubmit={handleWantsEditSubmit} method="POST">
                                <div className="accordion-body py-4 px-5 max-h-48  overflow-scroll no-scrollbar">
                                    
                                    {wantItems}
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                {/* End Wants Accordion */}





{/* --------------------------------------------------- */}

        {/* Add Do Not Want Button */}
        <button className={` bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-1 rounded text-sm m-1 w-20 text-center ${addNewDoNotWantButtonDisplayClass}`} onClick={toggleNewDoNotWantFormDisplay}>
            Add Avoid
        </button>

        {/* Add Do Not Want Form Window */}
        <div className={`px-5 pt-0 pb-5 p-1 w-80 mb-3 rounded-lg border-2 bg-blue-50 border-blue-200 shadow-md m-auto relative ${newDoNotWantFormDisplayClass}`}>

        {/* Close Add Do Not Want Window Button */}
        <div className={`absolute right-1 top-1 ${newDoNotWantFormFieldsClass}`}>
            <a href='' onClick={toggleNewDoNotWantFormDisplay}><div className='w-6 h-6 text-md rounded-full content-between text-center bg-blue-500 text-white shadow-md font-bold hover:bg-blue-800'>x</div></a>
        </div>

        {/* --------- Start New Do Not Want Submit Form ---------- */}

            {/* New Do Not Want Form Error/Success Message */}
            <div className="text-red-500 w-full text-center text-center text-red-700 mt-2">
                <span className='text-indigo-600'>{newDoNotWantSaveSuccess}</span>
            </div>

        <form onSubmit={handleNewDoNotWantSubmission} method="POST" className={`w-full px-2 ${newDoNotWantFormFieldsClass}`}>

            {/* New Want Form Error Message */}
            <div className="text-xs text-red-500 mb-1 w-full text-center text-center text-red-700  min-h-[20px] h-[20px] pt-1 mt-2">
                {newDoNotWantError}
            </div>

            {/* New Do Not Want Title */}
            <div>
                <input
                    aria-label="Enter Title"
                    placeholder="Title"
                    value={newDoNotWantTitle}
                    onChange={({ target }) => setNewDoNotWantTitle(target.value)}
                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                />
            </div>

            {/* New Do Not Want Description */}
            <div>
                <input
                    aria-label="Enter Description"
                    placeholder="Description"
                    value={newDoNotWantDescription}
                    onChange={({ target }) => setNewDoNotWantDescription(target.value)}
                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                />
            </div>

            {/* New Do Not Want Image Url */}
            <div>
                <input
                    aria-label="Enter Image Url"
                    placeholder="Image Url"
                    value={newDoNotWantImageUrl}
                    onChange={({ target }) => setNewDoNotWantImageUrl(target.value)}
                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                />
            </div>

            {/* New Do Not Want Link */}
            <div>
                <input
                    aria-label="Enter Want Link"
                    placeholder="Want Link"
                    value={newDoNotWantLink}
                    onChange={({ target }) => setNewDoNotWantLink(target.value)}
                    className='w-full border-2 border-blue-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                />
            </div>

            {/* New Do Not Want Submit Button */}
            <button
                type="submit"
                className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:bg-blue-800`}
            >
                Add Do Not Want
            </button>

        </form>

        {/* --------- End New Do Not Want Submit Form ---------- */}

        </div>
                {/* Start Do Not Want Accordion */}
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


                            {/* TRYING TO GET IN EDIT FORM START */}
                            
                            <form onSubmit={handleDoNotWantsEditSubmit} method="POST">
                            
                                
                                    

                                <div className="accordion-body py-4 px-5 max-h-48  overflow-scroll no-scrollbar">
                                    
                                    {doNotWantItems}
                                    
                                </div>
                                
                            </form>

                                {/* TRYING TO GET IN EDIT FORM END */}
                        </div>
                    </div>
                </div>
                {/* End Do Not Want Accordion */}
            
                
            </div>
        </div>  
    );
}