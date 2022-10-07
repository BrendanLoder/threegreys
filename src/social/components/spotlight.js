import { useState, useEffect } from "react"
import Want from "./want"


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

    useEffect(() => {
        createSlideButtons()
        createSlides()
    }, [])

    return (
        <div className='bg-yellow-100 h-[900px]'>
            {console.log('inline slides:',slides)}


            <div id="spotlightCarousel" className="carousel slide carousel-fade relative w-60 m-auto" data-bs-ride="carousel"  data-bs-interval="false">
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
                    className="carousel-control-next absolute top-0 bottom-0 flex items-kcenter justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#spotlightCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/><br/>
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