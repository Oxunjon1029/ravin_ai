import React from 'react'
import ToyotaCenter from '../../Images/toyota_center.jpg';
import Center from '../../Images/center_service.jpg'
import { RightOutlined } from '@ant-design/icons';
const Service_Centers = () => {
    return (
        <div className="Service">
            <div className="service_centers">
                <p>
                    Solutions
                </p>
                <h1>
                    Service Centers
                </h1>
            </div>
            <div className="service_container">
                <div className="service_centers_container">
                    <div className="centers_grid">
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
                            <img src={Center} alt="Center" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="case_studies">
                <div className="case">
                    <h1>
                        Case Studies
                    </h1>
                    <div className="fleet_media" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%"}}>
                        <div className="avis">
                            <div className="budjet">
                                <img src={ToyotaCenter} alt="ToyotaCenter"/>
                            </div>
                        </div>
                        <div className="article">
                            <h3>
                                “Ravin has detected over 22% more real damage <br/> than our human inspectors”
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
            </div>
        </div>
    )
}

export default Service_Centers
