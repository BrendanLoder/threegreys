import useDragAndDrop from "../hooks/useDragAndDrop"

function DragAndDrop() {

    const test = useDragAndDrop()

    return (
        <div className="p-5\">
            {test}  
        </div>
    )
}

export default DragAndDrop