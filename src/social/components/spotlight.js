import { useState, useEffect } from "react"
import Want from "./want"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, EffectCoverflow, Pagination, Navigation } from "swiper";

var Carousel = require('react-responsive-carousel').Carousel


export default function Spotlight({
    numberOfSlides,
    userId = 'QXqJs9Pf1tRP9pR4ympoIXKPrvA2',
    userDocId = 'DdYPQTdKzSTW1lD7l05N',
    refreshListData = () => {console.log('this would be the call to refreshListData() that is passed in')},
    isEditable = false
}) {
    const numSlides = 2

    const wants = [
        {
            title: 'ps5 games',
            description: 'almost any ps5 game',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3UBxHJCjzqKWKFab8hBd8Vex5sVBtM62hQ&usqp=CAU',
            link: 'https://www.bestbuy.com/site/playstation-4-ps4/playstation-4-ps4-video-games/pcmcat296300050018.c?id=pcmcat296300050018',
            wantId: '7g8sCKoczrdybryLAIQb',
            userId: 'QXqJs9Pf1tRP9pR4ympoIXKPrvA2'
        },
        {
            title: 'Cuisinart - Air Fryer Toaster Oven - Stainless Steel',
            description: 'Cook your favorite dishes in this Cuisinart air fryer toaster oven.',
            imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6073/6073801_sd.jpg',
            link: 'https://www.bestbuy.com/site/cuisinart-air-fryer-toaster-oven-stainless-steel/6073801.p?skuId=6073801',
            wantId: 'O6hWUZ160r7TzqSTw7mI',
            userId: 'QXqJs9Pf1tRP9pR4ympoIXKPrvA2'
        }
    ]

    const [slideButtons, setSlideButtons] = useState([])
    const [wantList, setWantList] = useState(wants)
    const [slides, setSlides] = useState([])
    const [swiperSlides, setSwiperSlides] = useState([])
    const [swiperObj, setSwiperObj] = useState([])

    

    const createSlideButtons = () => {
        const buttons = []
        for (let i = 0; i < numSlides; i++) {
            buttons.push(
                <button
                    type="button"
                    data-bs-target="#spotlightCarousel"
                    data-bs-slide-to={i}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${i + 1}`}
                    key={`spotlightSlideButton${i + 1}`}
                ></button>
            )
        } 
        setSlideButtons(buttons)
    }

    const createSlides = () => {
        let slideList = []
        wants.map((want, index) =>  {
            if(want && want !== undefined){
                // dont forget to add:
                // userDocId={userDocId}
                // isEditable={isEditable}
                // refreshListData={refreshListData}
                let activeCheck = ''
                if(index == 0) {
                    activeCheck = 'active'
                } 
                slideList.push(<div className={`carousel-item float-left w-full ${activeCheck}`} key={`slideHoldingDiv_${index}`}><Want key={`spotlightWant_${index}`} wantKey={`spotlightWant_${index}`} type='spotlightWant' userId={want.userId} userDocId={userDocId} title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} wantId={want.wantId} isEditable={isEditable} index={index} refreshListData={refreshListData}/></div>)
                console.log(`in createSlides() -- wantIndex is: ${index} and want is:`, want)
                console.log('slideList is:', slideList)
            }
        })
        setSlides(slideList)
    }

    const createSwiperSlides = () => {
        // let slideList = []
        // wants.map((want, index) =>  {
        //     if(want && want !== undefined){
        //         // dont forget to add:
        //         // userDocId={userDocId}
        //         // isEditable={isEditable}
        //         // refreshListData={refreshListData}
        //         // <SwiperSlide>
        //         //     <a href="https://www.google.com"><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></a>
        //         // </SwiperSlide>
        //         // slideList.push(<SwiperSlide><Want key={`spotlightWant_${index}`} wantKey={`spotlightWant_${index}`} type='spotlightWant' userId={want.userId} userDocId={userDocId} title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} wantId={want.wantId} isEditable={isEditable} index={index} refreshListData={refreshListData}/></SwiperSlide>)
        //         slideList.push(<SwiperSlide><img src={want.imageUrl} /></SwiperSlide>)
        //     }
        // })
        // setSwiperSlides(slideList)

    }

    const createSwiper = () => {
        const swiperObj = null

        setSwiperObj( wants.length > 0 ?   
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
                {wants.map((want, index) => (
                    <SwiperSlide key={`wantSlide_${want.wantId}`}>
                        {/* <a href={want.link}><img src={want.imageUrl} /></a> */}
                        <Want key={`spotlightWant_${index}`} wantKey={`spotlightWant_${index}`} type='spotlightWant' userId={want.userId} userDocId={userDocId} title={want.title} description={want.description} imageUrl={want.imageUrl} link={want.link} wantId={want.wantId} isEditable={isEditable} index={index} refreshListData={refreshListData}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            :
            <h2>No wants</h2>
        )
        // setSwiperObj(swiperObj)

    }

    useEffect(() => {
        createSlideButtons()
        createSlides()
        createSwiper()
    }, [])

    return (
        <div className='bg-yellow-100'>
            <div className='swiper-container w-full m-auto'>
                {console.log('inline slides:',slides)}

                again:<br/>
                {swiperObj}
                {/* {wants.length > 0 ?   
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
                        {wants.map((want, index) => (
                            <SwiperSlide key={`wantSlide_${want.wantId}`}>
                                <a href={want.link}><img src={want.imageUrl} /></a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                :
                <h2>No wants</h2>
                } */}
            </div>


{/* <div class="swiper-container">
<div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper">
<div class="swiper-wrapper" style="transform: translate3d(-997px, 0px, 0px); transition-duration: 0ms;">
<div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="8" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-9.jpg"/></div>
<div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 967px; margin-right: 30px;"><a href="https://www.google.com"><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></a></div><div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-2.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="2" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-3.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="3" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-4.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="4" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-5.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="5" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-6.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="6" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-7.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="7" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-8.jpg"/></div><div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="8" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-9.jpg"/></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 967px; margin-right: 30px;"><a href="https://www.google.com"><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></a></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div></div></div> */}

            {/* <div className='swiper-container'>
                <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper">
                    <div class="swiper-wrapper" style="transform: translate3d(-997px, 0px, 0px); transition-duration: 0ms;">
                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="8" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                        </div>
                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                        </div>
                        <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="2" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="3" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="4" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="5" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="6" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="7" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg"/>
                        </div>
                        <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="8" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                        </div>

                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                        </div>

                    </div>

                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    
                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                    </div>


                </div>
            </div> */}



            {/* <div className='swiper-container'>
                <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper">
                <div class="swiper-wrapper" style="transform: translate3d(-997px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="8" style="width: 967px; margin-right: 30px;">
                <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                </div>
                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 967px; margin-right: 30px;"><a href="https://www.google.com"><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></a></div>
                <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 967px; margin-right: 30px;">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="2" style="width: 967px; margin-right: 30px;">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg"/></div><div class="swiper-slide" data-swiper-slide-index="3" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="4" style="width: 967px; margin-right: 30px;">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                // </div>
                <div class="swiper-slide" data-swiper-slide-index="5" style="width: 967px; margin-right: 30px;">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                </div>
                    <div class="swiper-slide" data-swiper-slide-index="6" style="width: 967px; margin-right: 30px;">
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg"/>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="7" style="width: 967px; margin-right: 30px;">
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg"/>
                            </div>
                            <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="8" style="width: 967px; margin-right: 30px;"><img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                            </div>
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 967px; margin-right: 30px;"/><a href="https://www.google.com">
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg"/></a></div></div><div class="swiper-button-prev">
                                    </div>
                                    <div class="swiper-button-next">
                                        </div>
                                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span>
                                        </div>
                                        </div>
            </div> */}







            {/* <div id="spotlightCarousel" className="carousel slide carousel-fade relative w-96 m-auto" data-bs-ride="carousel"  data-bs-interval="false">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {slideButtons}
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                {slides}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#spotlightCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#spotlightCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            <br/><br/>

            {/* <div id="spotlightCarousel" className="carousel slide carousel-fade relative w-96 m-auto h-52 bg-blue-100" data-bs-ride="carousel"  data-bs-interval="false">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 bg-orange-100">
                    {slideButtons}
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {slides}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#spotlightCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#spotlightCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}

        </div>
    )
}