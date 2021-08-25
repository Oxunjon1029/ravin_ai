import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import Work from '../Video/how.mp4';
const HowItWorks = () => {
    return (
        <div style={{ background: "#ffffff" }}>
            <div style={{ width: "90%", margin: "auto auto" }}>
                <div className="grid_work">
                    <div style={{ padding: "40px 0" }}>
                        <h1>
                            How it works
                        </h1>
                        <h4>
                            Ravin's tools can be mixed & matched to create the optimal inspection flow
                        </h4>
                    </div>
                    <div>
                        <p className="learn" style={{ display: "inline-block", padding: "70px 0" }}>
                            <a href="#">
                                Learn more about Ravin tools
                            <RightOutlined style={{ color: "#C4B8FF", fontSize: "19px", fontWeight: "600", lineHeight: "33px" }} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <video style={{ width: "100%",objectFit:"cover" }} src={Work} autoPlay muted loop></video>
        </div>
    )
}

export default HowItWorks
