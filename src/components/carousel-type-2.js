// import { Carousel } from "react-responsive-carousel";

var Carousel = require('react-responsive-carousel').Carousel;


function CarouselType2 () {
    return (

        <div class="pt-5 px-5 pb-1 content-center justify-center text-center">
            <div className="w-screen justify-center text-center p-0 m-auto max-w-xl">
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

export default CarouselType2