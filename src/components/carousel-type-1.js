import Slider from "react-slick"; 
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

function CarouselType1 () {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
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
            <h2>Type 1</h2>
            <Slider {...settings}>
                <div class="image-holder">
                    <img src="/images/t2.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div class="image-holder">
                    <img src="/images/t3.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div class="image-holder">
                    <img src="/images/t6.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                
                {/* <div class="image-holder">
                    <img src="/images/all_grays_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div class="image-holder">
                    <img src="/images/sam_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div class="image-holder">
                    <img src="/images/sam_2.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div class="image-holder">
                    <img src="/images/sly_1.jpg" width="100%" height="100%" margin="auto"/>
                </div>
                <div class="image-holder">
                    <img src="/images/sly_2.jpg" width="100%" height="100%" margin="auto"/>
                </div> */}
            </Slider>
        </div>
    )
}

export default CarouselType1