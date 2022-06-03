// import { Carousel } from "react-responsive-carousel";

var Carousel = require('react-responsive-carousel').Carousel;


function CarouselType2 () {
    return (
        <div>
            <h2>Type 2-x</h2>
            <Carousel showThumbs={false} infiniteLoop={true}>
                <div style={{ height: "100%", width:"100%", color: "#fff" }}>
                <img alt="" src="https://react-responsive-carousel.js.org/assets/1.jpeg" />
                <p className="legend">Peanut</p>
                </div>
                <div style={{ height: "100%", color: "#fff" }}>
                <img alt="" src="https://react-responsive-carousel.js.org/assets/2.jpeg" />
                <p className="legend">Sammy</p>
                </div>
                <div style={{ height: "100%", color: "#fff" }}>
                <img alt="" src="https://react-responsive-carousel.js.org/assets/3.jpeg" />
                <p className="legend">The Jew</p>
                </div>
                <div style={{ height: "200100%px", color: "#fff" }}>
                <img alt="" src="https://react-responsive-carousel.js.org/assets/4.jpeg" />
                <p className="legend">Sly Guy</p>
                </div>
                <div style={{ height: "100%", color: "#fff" }}>
                <img alt="" src="https://react-responsive-carousel.js.org/assets/5.jpeg" />
                <p className="legend">Beefy</p>
                </div>
                <div style={{ height: "100%", color: "#fff" }}>
                <img alt="" src="https://react-responsive-carousel.js.org/assets/6.jpeg" />
                <p className="legend">Beefy</p>
                </div>
                
            </Carousel>
        </div>
    )
}

export default CarouselType2