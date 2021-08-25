import { RightOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'

const Media = () => {
    const MediaCards = [
        {
            title: "Israeli Insurtech RAVIN AI Partners With KAR Global",
            date: " MARCH 25, 2021",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "KAR Global Announces Strategic Investment in AI-Powered Vehicle Inspections Technology",
            date: "Mar 16, 2021",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "TechRound",
            date: "October 14, 2020",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Auto Marketing",
            date: "August 13, 2020",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Beauhurst",
            date: "November 7, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "NVIDIA",
            date: "August 27, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Digital Trends",
            date: "August 7, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Coverager",
            date: " May 29, 2019 ",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Tech Company News",
            date: " May 28, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Forbes",
            date: " May 27, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Sifted",
            date: " May 24, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Prolifik London",
            date: " May 23, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "The Jerusalem Post",
            date: " May 22, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Tech.eu",
            date: " May 21, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "CTECH",
            date: " May 21, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        },
        {
            title: "Tech Crunch",
            date: "  May 21, 2019",
            article: " Ravin is an international provider of automated, mobile and CCTV-based artificial intelligence solutions for vehicle inspections serving diverse fleet, insurance and remarketing customers around the world.",
        }
    ]
    return (
        <div className="Med">
            <div className="media">
                <h1>
                    Media
                </h1>
            </div>
            <div className="Med_container">
                <div className="media_conatiner">
                    <div className="title_media">
                        <h2>
                            What people are saying
                        </h2>
                        <p>
                            Ravin uses computer vision and deep learning to inspect vehicles using most camera types, under most physical conditions, removing the hassle and cost in renting, insuring or buying vehicles.
                         </p>
                    </div>
                    <div className="media_flex">
                        <div className="media_grid">
                            {
                                MediaCards.map(item => (
                                    <Card className="med_card">
                                        <div className="media_card_flex_div">
                                            <h1>
                                                {item.title}
                                            </h1>
                                            <p>
                                                {item.date}
                                            </p>
                                            <h4>
                                                {item.article}
                                            </h4>
                                        </div>
                                        <div className="articel_button">
                                            <p>
                                                Go article
                                        <RightOutlined style={{ color: "#765AFF", fontSize: "14px", lineHeight: "24px", fontWeight: "400" }} />
                                            </p>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media
