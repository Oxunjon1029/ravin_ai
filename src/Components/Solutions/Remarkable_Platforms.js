import { RightOutlined } from '@ant-design/icons';
import React from 'react'
import Slider from 'react-slick'
import Report_1 from '../../Images/report_1.jpg';
import SliderImg from '../../Images/slider_img.jpg'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",display:"flex",justifyContent:"center",alignItems:"center",right:"80px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",left:"60px",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"1"}}
        onClick={onClick}
      />
    );
  }
const Remarkable_Platforms = () => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,      
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
        <div className="remarkable">
            <div className="platforms">
                <p>
                    Solutions
                </p>
                <h1>
                    Remarketing platforms
                </h1>
            </div>
            <div className="remarkable_container">
                <div className="platforms_container">
                    <div className="platforms_grid">
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div className="how_it_works">
                                <h1>
                                    How it works
                                </h1>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                            </div>
                            <div className="benefits">
                                <h1>
                                    Benefits
                                </h1>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                                <p>
                                    <img className="true" src="https://uploads-ssl.webflow.com/602e266b79d4be7eebca445f/60324b654520918490534c8d_Group%205818.svg" alt="" />
                                360 walkaround scanning, AI-assisted to ensure <br /> full angle capture and quality
                            </p>
                            </div>
                        </div>
                        <div className="report">
                            <img src={Report_1} alt="Report" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="case_studies">
                <div className="case">
                    <h1>
                        Case Studies
                    </h1>
                    <Slider className="slider_platform" {...settings}>
                        <div id="slider-1">
                            <div className="platforms_media" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <div className="avis">
                                    <div className="budjet">
                                        <p className="p_1_slider">
                                            Auction group
                                        </p>
                                    </div>
                                </div>
                                <div className="article">
                                    <h3>
                                        “Ravin has detected over 22% more real damage <br /> than our human inspectors”
                                        <p className="rental">
                                            VP, Rental company
                                        </p>
                                    </h3>
                                    <p className="read">
                                        Read article <RightOutlined style={{ color: "#0000ee", fontSize: "24px", lineHeight: "30px", fontWeight: "400", marginLeft: "12px" }} />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="slider-2">
                            <div className="platforms_media" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <div className="avis">
                                    <div className="budjet">
                                        <img src={SliderImg} alt="" />
                                    </div>
                                </div>
                                <div className="article">
                                    <h3>
                                        “Ravin has detected over 22% more real damage <br /> than our human inspectors”
                        <p className="rental">
                                            VP, Rental company
                        </p>
                                    </h3>
                                    <p className="read">
                                        Read article <RightOutlined style={{ color: "#0000ee", fontSize: "24px", lineHeight: "30px", fontWeight: "400", marginLeft: "12px" }} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Remarkable_Platforms
