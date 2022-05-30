import { useParams } from 'react-router-dom';



// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function Profile({user}) {


    console.log("Start")
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

      console.log(swiper)

return (
    // START PAGE CONTAINER
    <div>

        <style>
            {`
            .swiper {
                width: 600px;
                height: 300px;
            }
            `}
        </style>

        User is: {user.username}<br/><br/>

        START SWIPER:<br/><br/>


        {/* <!-- Slider main container --> */}
        <div className="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            <div className="swiper-slide">
                <img src="/images/pexels-constantine-vopilovsky-10665216.jpg" width="749" height="999"/>
            </div>
            <div className="swiper-slide">
                <img src="/images/pexels-dastan-khdir-4035485.jpg" width="749" height="999"/>
            </div>
            <div className="swiper-slide">
                <img src="/images/pexels-mathias-reding-11911952.jpg" width="749" height="999"/>
            </div>
            <div className="swiper-slide">
                <img src="/images/pexels-zülâl-sezici-12098194.jpg" width="749" height="999"/>
            </div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* <!-- If we need scrollbar --> */}
            <div className="swiper-scrollbar"></div>
        </div>
        
    {/* END PAGE CONTAINER */}
    </div>
)
}

export default Profile