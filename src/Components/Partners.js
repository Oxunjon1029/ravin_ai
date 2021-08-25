import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BVRLA from '../Images/bvrla.jpg';
import Capital from '../Images/capital.jpg';
import KAR from '../Images/kar_global.jpg';
import Crowd from '../Images/our_crowd.jpg';
import Toyota from '../Images/toyota.jpg';
import Pico from '../Images/pico.jpg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
const Partners = () => {
    let settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <div className="our_partners">
            <h1 className="partner_h1">
                Our Partners
            </h1>
            <div>
                <Slider className="slider" {...settings}>
                    <div>
                        <img className="img" src={BVRLA} />
                    </div>
                    <div>
                        <img className="img" src={Capital} />
                    </div>
                    <div>
                        <img className="img" src={KAR} />
                    </div>
                    <div>
                        <img className="img" src={Crowd} />
                    </div>
                    <div>
                        <img className="img" src={Toyota} />
                    </div>
                    <div>
                        <img className="img" src={Pico} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Partners
