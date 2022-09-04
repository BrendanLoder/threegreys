import Want from "../components/want"

export function  createWantDisplayObjects({
    wantData,
    type,
    isEditable
}) {

    // console.log('IN SOCIALJS wantData?', wantData)
    let wantDisplayObjects = []
    
    try {
        if(!wantData) {
            console.log('In createWantDisplayObjects() - no wantData')
        } else if (!type || type === '') {
            console.log('In createWantDisplayObjects() - no type')
        } else if(wantData.length === 0){
            console.info('In createWantDisplayObjects() - wantData array is empty')
        } else {
            wantData.map((want, index) =>  {
                if(want && want !== undefined){
                    wantDisplayObjects.push(<Want wantKey={`${type}_${want.wantId}`} type={type} title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} id={want.wantId} isEditable={isEditable} index={index} /> )
                }
            })

        }
    } catch(error) {
        console.log('Error in createWantDisplayObjects():', error)
    }
    console.log("IN SOCIALJS createWantDisplayObjects() wantDisplayObjects:", wantDisplayObjects)
    return wantDisplayObjects
    
}