import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function useDragAndDrop() {

    const [fileDisplay, setFileDisplay] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('Files:', acceptedFiles)
        const fileList = acceptedFiles.map(
            (file) => {
                var newFileDisplay = fileDisplay.slice(); 

                this.setFileDisplay(newFileDisplay)
            }
        )
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()} className="bg-red-200 border-8 border-double border-blue-800 rounded w-48 h-48 text-center m-auto text-sm font-bold cursor-move mt-30">
            <input {...getInputProps()}/>
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }

            {fileDisplay}
        </div>
    )
}

export default useDragAndDrop