import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function useDragAndDrop() {

    const [fileDisplay, setFileDisplay] = useState([])
    console.log('in useDragAndDrop')
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    // console.log('in useDragAndDropp onDropx', acceptedFiles[0].path)
    const fileList = acceptedFiles.map(
        (file) => {

            var newFileDisplay = fileDisplay.slice();    
            newFileDisplay.push("poop");   
            this.setFileDisplay(newFileDisplay)

        }
    )
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="bgred">
      <input {...getInputProps()} />
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