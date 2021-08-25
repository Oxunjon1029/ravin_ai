import { Button, Card, Menu, Modal, Row } from 'antd'
import React, { useState } from 'react'
import Video from '../Video/back_1.mp4';
import Vid from '../Video/back.mp4';
import {  PlayCircleOutlined } from '@ant-design/icons'
import { Carousel } from 'antd';
import {FaAngleDoubleDown} from 'react-icons/fa'
const RavinHeader = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <video style={{ height: "100%", width: "100%", objectFit: "cover", zIndex: "-1" }} autoPlay loop muted id='myVideo'>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="vid" style={{marginTop:"150px 0"}}>
        <Row id="v_row" style={{ width: "90%", margin: "100px 50px", zIndex: 0 }}>
          <div className="vehicle" id="bike">
            <h1>Turn your camera into the ultimate vehicle inspector</h1>
            <h4>Ravin uses computer vision and <br /> deep learning to detect and <br /> monitor vehicle condition leveraging mobile phones and standard CCTV cameras</h4>
            <div className="book" id="VideoDiv">
              <button style={{ padding: "12px 40px" }} className="Demo"><h4>Book your demo</h4></button>
              <div onClick={showModal} className="watchfilm" style={{ zIndex: 1 }}>
                <PlayCircleOutlined id="play" style={{ color: "#4E3C8E", marginRight: "12px", fontSize: "32px" }} />
                <p>Watch Demo</p>
              </div>
            </div>
          </div>
        </Row>
        <Row style={{ width: "90%", margin: "0 auto", zIndex: 0, justifyContent: "space-between" }}>
          <div className="market-leading">
            <h4 className="tech">
              Market-leading technology
            </h4>
            <Carousel autoplay effect="fade" dots={false} easing="linear"   >
              <div>
                <div className="slider-div">
                  <img src="https://uploads-ssl.webflow.com/6032638a994d4ae4aa2d8db5/604630349cf4f67a971a7175_602e43f6ec6163859d85b38d_pngfind.svg" />
                  <div className="after_div">

                  </div>
                  <p >
                    Enabling technology, North American <br /> Vehicle inspection
                  </p>
                </div>
              </div>
              <div>
                <div className="slider-div_1">
                  <img src="https://uploads-ssl.webflow.com/6032638a994d4ae4aa2d8db5/60463065fb63565d0f462d63_6037a8828af131cb71418ec9_forbs.png" />
                  <div className="after_div_1">
                  </div>
                  <p>
                    Best AI companies to watch
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
          <div>
            <div className="icon_div">
              <a href="#HomeTool">
                <FaAngleDoubleDown id="down" />
              </a>
            </div>
          </div>
          <div className="together">
            <div className="video_watch">
              <div className="Height">
                <p>
                  Watch  Video
                </p>
              </div>
            </div>
            <div className="playlist">
              <iframe id='  ' src={Vid} frameborder="0" allow="fullscreen" allowFullScreen style={{ height: "100%", width: "100%" }}></iframe>
            </div>
          </div>
        </Row>
        <Modal centered title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <iframe style={{ width: "100%", height: "100%", left: "0", top: "0" }} src={Vid} frameborder="0" allowfullscreen allow="fullscreen" autoPlay="0" aria-controls="true"></iframe>
        </Modal>
      </div>
    </div>
  )
}
export default RavinHeader
