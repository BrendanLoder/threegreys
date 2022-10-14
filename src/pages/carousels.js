import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, EffectCoverflow, Pagination, Navigation } from "swiper";

var Carousel = require('react-responsive-carousel').Carousel

function Carousels() {

useEffect(() => {
        
    document.title = `Carousels`;
}, [])
    return (
        <div className="p-5">

{/* console.log("Start")
    // init Swiper:
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoHeight: true
      });

      console.log(swiper) */}


            SWIPER:<br/><br/>
            <div className='swiper-container'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="https://www.google.com"><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
            </div>


            {/* <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop = {true}
                pagination={true}
                navigation={true}
                spaceBetween={30}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper> */}

            <br/><br/>

            {/* https://www.npmjs.com/package/react-responsive-carousel */}
            react-responsive-carousel<br/><br/>
            <Carousel showArrows={true} infiniteLoop={true}>
                <div>
                    <img src="http://www.gap.com/webcontent/0017/225/023/cn17225023.jpg" />
                    <p className="legend">GapFit Tech Kids Joggers</p>
                </div>
                <div>
                    <img src="http://www.gap.com/webcontent/0028/248/729/cn28248729.jpg" />
                    <p className="legend">GapFit Kids Quick-Dry Shorts</p>
                </div>
                <div>
                    <img src="http://www.gap.com/webcontent/0020/576/659/cn20576659.jpg" />
                    <p className="legend">Kids Gap Logo Hoodie</p>
                </div>
            </Carousel>
            <br/><br/>

            Tailwind elements carousel:<br/><br/>
            <div id="carouselExampleCrossfade" className="carousel slide carousel-fade relative w-60 m-auto" data-bs-ride="carousel"  data-bs-interval="false">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                    <img
                        src="/images/t2.jpg"
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                    </div>
                    <div className="carousel-item float-left w-full">
                    <img
                        src="/images/t3.jpg"
                        className="block w-full"
                        alt="Camera"
                    />
                    </div>
                    <div className="carousel-item float-left w-full">
                    <img
                        src="/images/t6.jpg"
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousels