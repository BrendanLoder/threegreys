export default function Want(want) {
    const key = `${want.type}_${want.index}`
    return (

        <div className="bg-gray-100 hover:bg-indigo-50 border-gray-300 leading-normal mb-2 border-y-2">
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
            
            {/* <div className='h-px w-full bg-gray-400'></div> */}
        </div>
        
    )
}