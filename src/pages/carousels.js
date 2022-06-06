import {useEffect, useState} from "react"
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
            <h3>Carousels:<br/></h3>
            <button className="appButton" onClick={() =>toggleType()}>Toggle Type</button><br/>
            {
                {
                    'carouselType1': <CarouselType2 />,
                    'carouselType2': <CarouselType1 />,
                    default: <CarouselType2 />
                }[carouselType]
            }
        </div>
    )
}

export default Carousels