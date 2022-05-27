import { useParams } from 'react-router-dom';
import Swiper from 'swiper';

function Profile({user}) {


    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
    });

    // const swiperDiv = document.querySelector('.swiper').swiper;
    // swiperDiv.allowSlideNext()

    return (
        <div>
            User is: {user.username}<br/><br/>

            {/* <!-- Slider main container --> */}
            <div class="swiper">
                {/* <!-- Additional required wrapper --> */}
                <div class="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    {/* ... */}
                </div>
                {/* <!-- If we need pagination --> */}
                <div class="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                {/* <!-- If we need scrollbar --> */}
                <div class="swiper-scrollbar"></div>
            </div>
            
        </div>
    )
}

export default Profile