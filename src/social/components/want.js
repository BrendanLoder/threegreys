export default function Want(want) {
    const key = `want_${want.index}`
    return (
        <div key={key} className="mb-5 w-64 bg-blue-100 p-2">
            <a href={want.link}>
                <img src={want.imageUrl} className="w-20 mb-5 m-auto"/>
            </a>
            <a href={want.link}>
                <p className="font-bold text-sm">{want.title}</p>
                <p className="text-sm">{want.description}</p>
            </a>
                
        </div>
    )
}