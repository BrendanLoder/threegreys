export default function Want(want) {
    return (
        <div>
            <p>title: {want.title}</p>
            <p>description: {want.description}</p>
            <p>imageUrl: {want.imageUrl}</p>
            <p>link: {want.link}</p>
        </div>
    )
}