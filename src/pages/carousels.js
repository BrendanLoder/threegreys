import React, {useEffect, useState} from "react"
import CarouselType1 from "../components/carousel-type-1"
import CarouselType2 from "../components/carousel-type-2"

function Carousels() {

    const [carouselType, setCarouselType] = useState()

    useEffect(() => {
        setCarouselType("carouselType1")
    }, [])

    function toggleType(){
        switch (carouselType) {
            case 'carouselType1':
                setCarouselType("carouselType2")
                return
            case 'carouselType2':
                setCarouselType("carouselType1")
                return
            default:
                setCarouselType("carouselType2")
                return
        }
    }

    return (
        <div>
            This is the carousels.js<br/>
            <button onClick={() =>toggleType()}>Toggle Type</button><br/>
            {
                {
                    'carouselType1': <CarouselType1 />,
                    'carouselType2': <CarouselType2 />,
                    default: <CarouselType1 />
                }[carouselType]
            }
        </div>
    )
}

export default Carousels