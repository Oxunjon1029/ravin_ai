import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import Insurance from '../../Images/insurance_img.jpg'
const Insurance_Providers = () => {
    return (
        <div className="Insurance">
            <div className="providers">
                <p>
                    Solutions
                </p>
                <h1>
                    Insurance Providers
                </h1>
            </div>
            <div className="insurance_conatiner">
                <div className="providers_conatiner">
                    <div className="providers_grid">
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
                            <img src={Insurance} alt="Insurance" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="case_studies">
                <div className="case">
                    <h1>
                        Case Studies
                    </h1>
                    <div className="insurance_media" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%" }}>
                        <div className="avis">
                            <div className="budjet">
                                <p className="p_2">
                                    Major insurance group
                                </p>
                            </div>
                        </div>
                        <div className="article">
                        <h3>
                            "Ravin’s technology facilitates our <br /> commitment to a 24-hour collision <br /> repair”
                            <p className="rental">
                                Mobility Manager, Insurance Carrier
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

export default Insurance_Providers
