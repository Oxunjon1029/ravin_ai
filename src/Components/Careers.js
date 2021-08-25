import { Card, Modal } from 'antd'
import React, { useState } from 'react'
import CareerCar from "../Images/career_car.jpg";
import { FaClock, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'
import {RightOutlined } from '@ant-design/icons'
const Careers = () => {
    const CareerCards = [
        {
            id:1,
            title:"Backend Developer",
            location:"Haifa, IL (WFH possible)",
            time:"Full time, permanent",
            description:"This is an opportunity to work with cutting edge AI technologies in a fast-changing mobility sector.",
            qualification:"Basic Qualifications",
            qualification_text:"Proven experience (3+ years) in full stack development including microservice architecture, cloud solutions, Node.js and Python, Object Oriented and functional programming, Databases: RDS, NOSQL (MongoDB, DynamoDB), MemCache."
        },
        {
            id:2,
            title:"Algorithms Engineer",
            location:"Haifa, IL",
            time:"Full time, permanent",
            description:"This is an opportunity to work with cutting edge AI technologies in a fast-changing mobility sector.",
            qualification:"Basic Qualifications",
            qualification_text:"Proven experience (3+ years) in full stack development including microservice architecture, cloud solutions, Node.js and Python, Object Oriented and functional programming, Databases: RDS, NOSQL (MongoDB, DynamoDB), MemCache."
        },
        {
            id:3,
            title:"Front-End Developer",
            location:"Kyiv, Ukraine",
            time:"Full time, permanent",
            description:"This is an opportunity to work with cutting edge AI technologies in a fast-changing mobility sector.",
            qualification:"Basic Qualifications",
            qualification_text:"Proven experience (3+ years) in full stack development including microservice architecture, cloud solutions, Node.js and Python, Object Oriented and functional programming, Databases: RDS, NOSQL (MongoDB, DynamoDB), MemCache."
        },
        {
            id:4,
            title:"Technical Support Specialist",
            location:"Austin, TX",
            time:"Full time",
            description:"This is an opportunity to work with cutting edge AI technologies in a fast-changing mobility sector.",
            qualification:"Basic Qualifications",
            qualification_text:"Proven experience (3+ years) in full stack development including microservice architecture, cloud solutions, Node.js and Python, Object Oriented and functional programming, Databases: RDS, NOSQL (MongoDB, DynamoDB), MemCache."
        },
        {
            id:5,
            title:"Technial Support Specialist",
            location:"Haifa, IL",
            time:"Full time",
            description:"This is an opportunity to work with cutting edge AI technologies in a fast-changing mobility sector.",
            qualification:"Basic Qualifications",
            qualification_text:"Proven experience (3+ years) in full stack development including microservice architecture, cloud solutions, Node.js and Python, Object Oriented and functional programming, Databases: RDS, NOSQL (MongoDB, DynamoDB), MemCache."
        },
        {
            id:6,
            title:"Pre-sales engineer",
            location:"Austin, TX",
            time:"Full time",
            description:"This is an opportunity to work with cutting edge AI technologies in a fast-changing mobility sector.",
            qualification:"Basic Qualifications",
            qualification_text:"Proven experience (3+ years) in full stack development including microservice architecture, cloud solutions, Node.js and Python, Object Oriented and functional programming, Databases: RDS, NOSQL (MongoDB, DynamoDB), MemCache."
        }
    ]
    const [visible,setVisible] = useState(false)
    const OnClick = (id) =>{
        setVisible(true)
    }
    const OnCancel = (id) =>{
        setVisible(false)
    }
    return (
        <div className="Career">
            <div className="careers">
                <h1>
                    Careers
                </h1>
            </div>
            <div className="Career_container">
                <div className="careers_container">
                    <div className="career_grid">
                        <div className="we_hiring">
                            <h3>
                                We are hiring
                            </h3>
                            <p>
                                Our mission is to create trust and transparency whenever a vehicle changes hands. To do this, we start with our own community by creating an open, inclusive, and diverse organization across various offices around the world.
                            </p>
                            <p>
                                We're looking for you: a self-starter, open-minded individual that has promoted complex initiatives at larger organizations, has a strong bias towards action in ambiguous environments, and most importantly, wants to introduce Ravin’s technology to facilitate change.
                            </p>
                            <p>
                                If you’re a natural leader who is business-savvy, data focused, versatile, and exceptionally driven, keep reading.
                            </p>
                        </div>
                        <div className="career_car">
                            <img src={CareerCar} alt="CareerCar" />
                        </div>
                    </div>
                    <div className="career_cards_flex">
                        <div className="career_cards_grid">
                           {
                               CareerCards.map(item=>(
                                <Card className="card_career" key={item.id}>
                                <div className="card_flex_div">
                                    <div className="developer">
                                        <h1>
                                            {item.title}
                                        </h1>
                                        <div className="card_icons">
                                            <p className="location">
                                                <FaMapMarkerAlt style={{marginRight:"5px"}} />
                                                {item.location}
                                            </p>
                                            <p className="watch">
                                                <FaClock style={{marginRight:"5px"}} />
                                                {item.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right_icon_div">
                                        <RightOutlined id="career_right" />
                                    </div>
                                </div>
                            </Card>
                               ))
                           }
                        </div>
                    </div>
                </div>
            </div>
            {
                
            }
        </div>
    )
}

export default Careers
