import {useEffect, useState} from "react"
var Carousel = require('react-responsive-carousel').Carousel;

function Carousels() {
    return (
        <div className="p-5">
            <div className="justify-center text-center p-0 m-auto">
                <Carousel showThumbs={true} infiniteLoop={true}>
                    <div style={{ color: "#fff" }}>
                        <img alt="" src="/images/alice_1.jpg" class="m-auto"/>
                        <p className="legend">Alice</p>
                    </div>
                    <div style={{ color: "#fff" }}>
                        <img alt="" src="/images/t2.jpg" />
                        <p className="legend">Baz #1</p>
                    </div>
                    <div style={{ color: "#fff" }}>
                        <img alt="" src="/images/t3.jpg" />
                        <p className="legend">Bax #2</p>
                    </div>
                    <div style={{ color: "#fff" }}>
                        <img alt="" src="/images/t6.jpg" />
                        <p className="legend">William</p>
                    </div>
                    
                </Carousel>
            </div>
        </div>
    )
}

export default Carousels