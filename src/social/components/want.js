import { useState, useEffect } from "react"
import { updateWant, deleteWantByIdAndUserIdAndType } from "../services/social_firebase"
export default function Want(want) {

    const [newWantTitle, setNewWantTitle] = useState(want.title)
    const [newWantDescription, setNewWantDescription] = useState(want.description)
    const [newWantImageUrl, setNewWantImageUrl] = useState(want.imageUrl)
    const [newWantLink, setNewWantLink] = useState(want.link)

    console.log('at top of want.js want.title is:', want.title)
    const [wantTitle, setWantTitle] = useState(want.title)
    console.log('at top of want.js wantTitle is:', wantTitle)
    
    const [wantDescription, setWantDescription] = useState(want.description)
    const [wantImageUrl, setWantImageUrl] = useState(want.imageUrl)
    const [wantLink, setWantLink] = useState(want.link)
    const [wantDeleted, setWantDeleted] = useState(false)
    const wantId = want && want.wantId ? want.wantId : ''
    const userId = want && want.userId ? want.userId : ''
    const wantType = want && want.type ? want.type : ''
    const refreshListData = want && want.refreshListData ? want.refreshListData : ''

    const [updateData, setUpdateData] = useState(false)

    function cancelUpdateWantData() {
        setNewWantTitle(wantTitle)
        setNewWantDescription(wantDescription)
        setNewWantImageUrl(wantImageUrl)
        setNewWantLink(wantLink)
        toggleEditData()
    }

    async function deleteWantWithType() {
        if(userId != '' && wantType != '') {
            try{
                await deleteWantByIdAndUserIdAndType({
                    wantId,
                    userId,
                    wantType
                })
                // setWantTitle('')
                // setWantDescription('')
                // setWantImageUrl('')
                // setWantLink('')
                setUpdateData(false)
                // setWantDeleted(true)
                refreshListData()
            } catch (error) {
                console.log('in deleteWantWithType() error:', error)
            }
        }
    }

    function toggleEditData() {
        setUpdateData(!updateData)
    }

    function test(){
        // want.title == 'keep me' && console.log('Keeping is:', want)
        // want.title == 'delete me' && console.log('Deleteing is:', want)

        if(want.title == 'keep me') {
            console.log('Keeping:')
            console.log('ID:', want.wantId)
            console.log('Title:', want.title)
            console.log('Description:', want.description)
            console.log('-----------------------')
        }
        if(want.title == 'delete me') {
            console.log('Deleting:')
            console.log('ID:', want.wantId)
            console.log('Title:', want.title)
            console.log('Description:', want.description)
            console.log('-----------------------')
        }
    }
    test()
    
    return (
        <div className="bg-gray-100 hover:bg-indigo-50 border-gray-300 leading-normal mb-2 border-y-2 relative">
            <div
                        className={`bg-blue-500 text-white text-sm rounded p-1 m-2 font-bold shadow-lg hover:bg-blue-800 w-16 cursor-pointer text-center`}
                        id={`update_form_button_${want.wantId}`}
                        onClick={deleteWantWithType}

                    >Delete</div>
            {!updateData &&   
                 <div
                    className={`bg-blue-500 text-white text-sm rounded p-1 font-bold shadow-lg hover:bg-blue-800 w-16 cursor-pointer m-2 text-center`}
                    onClick={toggleEditData}

                >Edit</div>
            }
            
            {updateData &&
                <div className="px-5 py-5 w-80 mb-3 mt-3 rounded-lg border-2 bg-yellow-50 border-yellow-200 shadow-md m-auto relative">
                
                    <input 
                        type="text"
                        value={newWantTitle} 
                        placeholder="Title" 
                        className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                        onChange={({ target }) => setNewWantTitle(target.value)}
                    /><br/>

                    <input 
                        type="text" 
                        value={newWantDescription} 
                        placeholder="Description" 
                        className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                        onChange={({ target }) => setNewWantDescription(target.value)}
                    /><br/>

                    <input 
                        type="text" 
                        value={newWantImageUrl} 
                        placeholder="Image Url" 
                        className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                        onChange={({ target }) => setNewWantImageUrl(target.value)}
                    /><br/>

                    <input 
                        type="text" 
                        value={newWantLink} 
                        placeholder="Link" 
                        className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                        onChange={({ target }) => setNewWantLink(target.value)}
                    />
                    <br/>

                    <div
                        className={`bg-blue-500 text-white text-sm rounded p-1 font-bold shadow-lg hover:bg-blue-800 w-16 cursor-pointer float-right text-center`}
                        id={`update_form_button_${want.wantId}`}
                        onClick={cancelUpdateWantData}

                    >Cancel</div>

                    <div
                        className={`bg-blue-500 text-white text-sm rounded p-1 font-bold shadow-lg hover:bg-blue-800 w-16 cursor-pointer float-right text-center`}
                        id={`update_form_button_${want.wantId}`}
                        onClick={ async () => {
                            const returnData = await updateWant({
                                title: newWantTitle,
                                description: newWantDescription,
                                link: newWantLink,
                                imageUrl: newWantImageUrl,
                                id: wantId
                            })
                            console.log('IS THERE SOME SORT OF RETURN DATA?? returnData.title:', returnData.title)
                            setWantTitle(returnData.title)
                            setWantDescription(returnData.description)
                            setWantImageUrl(returnData.imageUrl)
                            setWantLink(returnData.link)
                            toggleEditData()
                        }}

                    >Confirm</div>

                    
                        
            </div>
            }
            {!updateData &&
                <div className="p-2">
                    {console.log(`IN CODE: wantTitle: ${wantTitle} and want.title is: ${want.title}`)}
                    <a {... wantLink ? {href: wantLink} : {}}>
                        {wantImageUrl && wantImageUrl.length > 0 &&
                            <img src={wantImageUrl} className="w-20 mb-5 m-auto"/>
                        }

                        <div className="p-5">
                            
                            <p>Want ID in want.js: {wantId}</p>
                            <p>want.title: {want.title}</p>
                            <p>wantTitle: {wantTitle}</p>
                            <p>want.description: {want.description}</p>
                            <p>wantDescription: {wantDescription}</p>
                            {/* <p className="font-bold text-sm">{wantTitle}</p> */}
                            {/* <p className="text-sm">{wantDescription}</p> */}
                        </div>
                    </a>
                </div>
            }

        </div>
        
    )

}