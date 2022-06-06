// import { Carousel } from "react-responsive-carousel";

var Carousel = require('react-responsive-carousel').Carousel;


function CarouselType2 () {
    return (
        <div>
            <h2>Type 2</h2>
            <Carousel showThumbs={false} infiniteLoop={true}>
                <div style={{ height: "100%", width:"100%", color: "#fff" }}>
                    <img alt="" src="/images/t2.jpg" />
                    <p className="legend">Baz #1</p>
                </div>
                <div style={{ height: "100%", color: "#fff" }}>
                    <img alt="" src="/images/t3.jpg" />
                    <p className="legend">Bax #2</p>
                </div>
                <div style={{ height: "100%", color: "#fff" }}>
                    <img alt="" src="/images/t6.jpg" />
                    <p className="legend">William</p>
                </div>
                
            </Carousel>
        </div>
    )
}

export default CarouselType2