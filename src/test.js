import { useState, useEffect } from "react"

export function Test ({incrementCarCount}) {


    return (
        <div>
            <a href="#" onClick={incrementCarCount}>Click to add car from text.js</a>
        </div>
    )
}