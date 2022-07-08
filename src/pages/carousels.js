import {useEffect, useState} from "react"
import CarouselType1 from "../components/carousel-type-1"
import CarouselType2 from "../components/carousel-type-2"

function Carousels() {
    return (
        <div className="bg-yellow-300">
            <CarouselType2 />
        </div>
    )
}

export default Carousels