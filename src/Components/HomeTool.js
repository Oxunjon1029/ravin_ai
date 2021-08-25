import { RightOutlined } from '@ant-design/icons'
import { Carousel, Row } from 'antd'
import React from 'react'
import Inspect from '../Video/ravin_inspect.mp4'
import AutoScan from '../Video/ravin-autoscan.mp4'
import Eye from '../Video/ravin-eye.mp4'
import Logo from '../Images/ravin_logo.svg';

const HomeTool = () => {
    return (
        <div className="home_tool">
            <div className="grid">
                <Carousel className="caru" dots={true} autoplay autoplaySpeed="100" dotPosition="top" style={{ width: "50%", margin: "0 40px", height: "100%" }} >
                    <div style={{ width: "100%" }}>
                        <div className="inspect">
                            <img style={{ margin: "30px 0" }} src={Logo} alt="" />
                            <div style={{ display: "flex" }}>
                                <h1>
                                    Inspect
                            </h1>
                                <sup className="tm">TM</sup>
                            </div>

                            <p>
                                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellendus <br /> animi fugit suscipit, veritatis illo porro?
                            </p>
                            <div className="more">
                                <h4>
                                    More About Our Tools
                                </h4>
                                <RightOutlined id="right" />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%" }}>
                        <div className="inspect">
                            <img style={{ margin: "30px 0" }} src={Logo} alt="" />
                            <div style={{ display: "flex" }}>
                                <h1>
                                    AutoScan
                            </h1>
                                <sup className="tm">TM</sup>
                            </div>

                            <p>
                                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellendus <br /> animi fugit suscipit, veritatis illo porro?
                            </p>
                            <div className="more">
                                <h4>
                                    More About Our Tools
                                </h4>
                                <RightOutlined id="right" />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%" }}>
                        <div className="inspect">
                            <img style={{ margin: "30px 0" }} src={Logo} alt="" />
                            <div style={{ display: "flex" }}>
                                <h1>
                                    Eye
                                </h1>
                                <sup className="tm">TM</sup>
                            </div>

                            <p>
                                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellendus <br /> animi fugit suscipit, veritatis illo porro?
                            </p>
                            <div className="more">
                                <h4>
                                    More About Our Tools
                                </h4>
                                <RightOutlined id="right" />
                            </div>
                        </div>
                    </div>
                </Carousel>
                <Carousel effect="fade" dots={false} easing="linear" autoplay autoplaySpeed="100" style={{ height: "100%", background: "transparent", position: "relative" }}>
                    <div style={{ height: "100%" }}>
                        <div>
                            <video style={{ zIndex: 1, width: "100%", height: "100%", objectFit: "cover", background: "transparent", bottom: "0" }} autoPlay muted loop>
                                <source src={Inspect} />
                            </video>
                        </div>
                    </div>
                    <div style={{ height: "100%" }}>
                        <div>
                            <video className="vvv" style={{ zIndex: 1, width: "100%", height: "100%", background: "transparent" }} autoPlay muted loop>
                                <source src={AutoScan} />
                            </video>
                        </div>
                    </div>
                    <div style={{ height: "100%" }}>
                        <div>
                            <video style={{ zIndex: 1, width: "100%", background: "transparent" }} autoPlay muted loop>
                                <source src={Eye} />
                            </video>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default HomeTool
