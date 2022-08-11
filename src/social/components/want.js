export default function Want(want) {
    const key = `want_${want.index}`
    return (

        <div className="tab-content overflow-hidden border-l-2 bg-gray-100 hover:bg-blue-100 border-gray-300 leading-normal">
            <div className="p-2 mb-2">
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
            
            <div class='h-px w-full bg-gray-400'></div>
        </div>
        
        
    )
}