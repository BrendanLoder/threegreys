import { useState, useEffect } from "react"
import { updateWant, deleteWantByIdAndUserIdAndType } from "../services/social_firebase"
export default function Want(want) {

    const [newWantTitle, setNewWantTitle] = useState(want.title)
    const [newWantDescription, setNewWantDescription] = useState(want.description)
    const [newWantImageUrl, setNewWantImageUrl] = useState(want.imageUrl)
    const [newWantLink, setNewWantLink] = useState(want.link)

    const [wantTitle, setWantTitle] = useState(want.title)
    const [wantDescription, setWantDescription] = useState(want.description)
    const [wantImageUrl, setWantImageUrl] = useState(want.imageUrl)
    const [wantLink, setWantLink] = useState(want.link)
    const [wantDeleted, setWantDeleted] = useState(false)
    const wantId = want && want.wantId ? want.wantId : ''
    const userId = want && want.userId ? want.userId : ''
    const wantType = want && want.type ? want.type : ''
    const refreshListData = want && want.refreshListData ? want.refreshListData : ''
    const ts = want.setRefreshWants

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
                refreshListData()
            } catch (error) {
                console.log('in deleteWantWithType() error:', error)
            }
        }
    }

    function toggleEditData() {
        setUpdateData(!updateData)
    }
    
    return (

        <div className="bg-gray-100 hover:bg-indigo-50 border-gray-300 leading-normal mb-2 border-y-2 relative">

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
                            setWantTitle(returnData.title)
                            setWantDescription(returnData.description)
                            setWantImageUrl(returnData.imageUrl)
                            setWantLink(returnData.link)
                        }}

                    >Confirm</div>

                    <div
                        className={`bg-blue-500 text-white text-sm rounded p-1 font-bold shadow-lg hover:bg-blue-800 w-16 cursor-pointer text-center`}
                        id={`update_form_button_${want.wantId}`}
                        onClick={deleteWantWithType}

                    >Delete</div>
                    <a href='#' onClick={refreshListData}>Click to refreshListData</a>
                    <div>wantType: {wantType}</div>
                        
            </div>
            }
            {!updateData &&
                <div className="p-2">
                    <a {... wantLink ? {href: wantLink} : {}}>
                        {wantImageUrl && wantImageUrl.length > 0 &&
                            <img src={wantImageUrl} className="w-20 mb-5 m-auto"/>
                        }

                        <div className="p-5">
                            <p className="font-bold text-sm">{wantTitle}</p>
                            <p className="text-sm">{wantDescription}</p>
                        </div>
                    </a>
                </div>
            }

        </div>
        
    )

}