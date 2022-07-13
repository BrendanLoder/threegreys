import useDragAndDrop from "../hooks/useDragAndDrop"

function DragAndDrop() {

    const drop = useDragAndDrop()

    return (
        <div className="p-5">

            <div>
                {drop}
            </div>
              

        </div>
    )
}

export default DragAndDrop