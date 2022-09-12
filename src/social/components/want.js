import { useState } from "react"
import { updateWantData } from "../services/social_firebase"
export default function Want(want) {

    const [wantTitle, setWantTitle] = useState(want.title)
    const [wantDescription, setWantDescription] = useState(want.description)
    const [wantImageUrl, setWantImageUrl] = useState(want.imageUrl)
    const [wantLink, setWantLink] = useState(want.link)
    const wantId = want && want.wantId ? want.wantId : ''
    
    return (

        <div className="bg-gray-100 hover:bg-indigo-50 border-gray-300 leading-normal mb-2 border-y-2 relative">
            
            {want.isEditable && 
                <div className="px-5 py-5 w-80 mb-3 mt-3 rounded-lg border-2 bg-yellow-50 border-yellow-200 shadow-md m-auto relative">
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        updateWantData(event)
                    }} id={`update_form_${want.wantId}`} name={`update_form_${want.wantId}`} >
                        <input 
                            type="text"
                            value={wantTitle} 
                            placeholder="Title" 
                            className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                            onChange={({ target }) => setWantTitle(target.value)}
                        /><br/>

                        <input 
                            type="text" 
                            value={wantDescription} 
                            placeholder="Description" 
                            className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                            onChange={({ target }) => setWantDescription(target.value)}
                        /><br/>

                        <input 
                            type="text" 
                            value={wantImageUrl} 
                            placeholder="Image Url" 
                            className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                            onChange={({ target }) => setWantImageUrl(target.value)}
                        /><br/>

                        <input 
                            type="text" 
                            value={wantLink} 
                            placeholder="Link" 
                            className='w-full border-2 border-yellow-100 rounded-md mb-1 px-2 py-1 text-sm font-medium shadow-md'
                            onChange={({ target }) => setWantLink(target.value)}
                        />

                    </form>

                        <div
                            className={`bg-blue-500 text-white text-sm rounded p-1 font-bold shadow-lg hover:bg-blue-800 w-32 cursor-pointer`}
                            id={`update_form_button_${want.wantId}`}
                            onClick={ async () => {
                                const returnData = await updateWantData({
                                    title: wantTitle,
                                    description: wantDescription,
                                    link: wantLink,
                                    imageUrl: wantImageUrl,
                                    id: wantId
                                })
                                setWantTitle(returnData.title)
                                setWantDescription(returnData.description)
                                setWantImageUrl(returnData.imageUrl)
                                setWantLink(returnData.link)
                            }}

                        >Update Want Data</div>
                            
                </div>
            }
            {want.isEditable &&
                <div className="m-1">
                    <label>
                        <input
                            type="checkbox"
                            name="deleteWants"
                            value={want.wantId}
                            key={want.wantKey}
                        />
                        &nbsp;<span className='text-xs text-red-400'>Delete</span>
                    </label>
              </div>
            }
            <div className="p-2">
                <a {... want.link ? {href: want.link} : {}}>
                    {want.imageUrl && want.imageUrl.length > 0 &&
                        <img src={want.imageUrl} className="w-20 mb-5 m-auto"/>
                    }

                    <div className="p-5">
                        <p className="font-bold text-sm">{want.title}</p>
                        <p className="text-sm">{want.description}</p>
                    </div>
                </a>
            </div>

        </div>
        
    )

}