import Slider from "react-slick"; 
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function CarouselType1 () {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div>
                    <img src="/images/alice_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div>
                    <img src="/images/all_grays_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div>
                    <img src="/images/sam_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div>
                    <img src="/images/sam_2.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div>
                    <img src="/images/sly_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div>
                    <img src="/images/sly_2.jpg" width="100%" height="100%" margin="auto"/>
                </div>
            </Slider>
        </div>
    )
}

export default CarouselType1