import { useState, useEffect } from "react"

export function Test ({incrementCarCount}) {


    console.log('incrementCarCount is', incrementCarCount)

    return (
        <div>
            <a href="#" onClick={incrementCarCount}>Click to add car from text.js</a>
        </div>
    )
}