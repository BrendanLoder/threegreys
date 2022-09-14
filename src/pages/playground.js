import { useState, useEffect } from 'react'
import {Test} from '../test'

export default function Playground() {
    const [carCount, setCarCount] = useState(0)

    const incrementCarCount = (event) => {
        if(event) {
            event.preventDefault()
        }
        setCarCount(carCount + 1)
    }

    return (
        <div className='p-5'>

            <p>carCount = {carCount}</p>
            <p>
                <a href='#' onClick={incrementCarCount}>Add a car</a>
            </p>
            <Test incrementCarCount={incrementCarCount}/>



        </div>
    )
}