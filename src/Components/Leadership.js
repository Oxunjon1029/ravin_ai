import { LinkedinFilled } from "@ant-design/icons";
import { Card, Modal } from "antd";
import React, { useState } from "react";
import LeaderImg from "../Images/leader_1.jpg";
import LeaderImg1 from "../Images/leader_2.jpg";
import LeaderImg2 from "../Images/leader_3.jpg";
import LeaderImg3 from "../Images/leader_4.jpg";
import LeaderImg4 from "../Images/leader_5.jpg";
import LeaderImg5 from "../Images/leader_6.jpg";
import LeaderImg6 from "../Images/leader_7.jpg";
import LeaderImg7 from "../Images/leader_8.jpg";
import LeaderImg8 from "../Images/leader_9.jpg";
import LeaderImg9 from "../Images/leader_10.jpg";
import LeaderImg10 from "../Images/leader_11.jpg";
import LeaderImg11 from "../Images/leader_12.jpg";
import LeaderImg12 from "../Images/leader_13.jpg";
import LeaderImg13 from "../Images/leader_14.jpg";
import LeaderImg14 from "../Images/leader_15.jpg";
import LeaderImg15 from "../Images/leader_16.jpg";
import LeaderImg16 from "../Images/leader_17.jpg";
import LeaderImg17 from "../Images/leader_18.jpg";
const Leadership = () => {
  const [leadermodalvisible, setLeaderModalVisible] = useState(false);
  const showModal = () => {
    setLeaderModalVisible(true);
  };
  const OnCancel = () => {
    setLeaderModalVisible(false);
  };
  const LeaderCards = [
    {
      img: LeaderImg,
      fullname: "Eliron Ekstein",
      sphere: "Co-founder & CEO",
    },
    {
      img: LeaderImg1,
      fullname: "Dr. Roman Sandler",
      sphere: "Co-founder & CEO",
    },
    {
      img: LeaderImg2,
      fullname: "Jim O’Brien",
      sphere: "General Manager, Americas",
    },
    {
      img: LeaderImg3,
      fullname: "Dganit Balan Vinter",
      sphere: "VP People",
    },
    {
      img: LeaderImg4,
      fullname: "Neil Alliston",
      sphere: "VP Product and General Manager, Europe",
    },
    {
      img: LeaderImg5,
      fullname: "Ron Soreanu",
      sphere: "VP Operations",
    },
    {
      img: LeaderImg6,
      fullname: "Vadim Ribak",
      sphere: "VP Engineering",
    },
    {
      img: LeaderImg7,
      fullname: "Dr. Alex Kenis",
      sphere: "Chief Scientist",
    },
    {
      img: LeaderImg8,
      fullname: "Sergey Mityasov",
      sphere: "VP QA & Delivery",
    },
    {
      img: LeaderImg9,
      fullname: "Alex Silver",
      sphere: "Lead Automotive",
    },
    {
      img: LeaderImg10,
      fullname: "Olga Klymenko",
      sphere: "Lead QA",
    },
    {
      img: LeaderImg11,
      fullname: "Alex (Sanya) Shvets",
      sphere: "Lead Front End",
    },
    {
      img: LeaderImg12,
      fullname: "Ido Yaari",
      sphere: "Lead Backend",
    },
    {
      img: LeaderImg13,
      fullname: "Igor Levtov",
      sphere: "Lead Infrastructure",
    },
    {
      img: LeaderImg14,
      fullname: "Avital Pessar-Green",
      sphere: "Director of Marketing",
    },
    {
      img: LeaderImg15,
      fullname: "Omer Perry",
      sphere: "Marketing & Business Development Manager",
    },
    {
      img: LeaderImg16,
      fullname: "Stas Mataev",
      sphere: "Lead Flow Architect",
    },
    {
      img: LeaderImg17,
      fullname: "Anton Shifman",
      sphere: "Lead Integrations",
    },

  ];
  return (
    <div className="Leadership">
      <div className="leadership">
        <h1>Our Leadership Team</h1>
      </div>
      <div className="Leader_container">
        <div className="leadership_container">
          <div className="title_leader">
            <h3>
              Bringing together world-class expertise in Artificial
              Intelligence, Automotive Inspections and Software Development
            </h3>
          </div>
          <div className="leader_grid">
            {LeaderCards.map((item) => (
              <Card
                onClick={showModal}
                cover={<img src={item.img} />}
                className="leader_card"
              >
                <div className="leader_card_flex">
                  <div className="leader_fullname">
                    <h3>{item.fullname}</h3>
                    <p>{item.sphere}</p>
                  </div>
                  <div className="linkedin_leader">
                    <LinkedinFilled className="icon_leader_linkedin" />
                  </div>
                </div>
                <div className="hoverable_div">
                  <div className="leader_card_flex">
                    <div className="leader_fullname">
                      <h3>Eliron Ekstein</h3>
                      <p>Co-founder & CEO</p>
                    </div>
                    <div className="linkedin_leader">
                      <LinkedinFilled className="icon_leader_linkedin" />
                    </div>
                  </div>
                  <p className="hoverable_div_text">
                    Eliron is co-founder and Chief Executive Officer. For the
                    past 10 years, he has worked to digitise the automotive and
                    transportation sectors. Before founding Ravin, Eliron was
                    Head of New Business Development at Shell’s Digital Ventures
                    unit in London, investing and incubating new businesses that
                    can leverage Shell’s global footprint of retail location for
                    the benefit of fleets, motorists and smart cities. Prior to
                    that, Eliron served as the CEO of FarePilot.com, a startup
                    using machine learning to help taxi and Uber drivers find
                    their next passenger by predicting demand patterns in local
                    areas. Eliron has an MBA from London Business School and is
                    a proud father of 2 boys and one adorable girl.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Modal
        visible={leadermodalvisible}
        onCancel={OnCancel}
        className="LeaderModal"
        title={
          <div className="leader_card_flex" style={{marginTop:"30px"}}>
            <div className="leader_fullname">
              <h3>Eliron Ekstein</h3>
              <p>Co-founder & CEO</p>
            </div>
            <div className="linkedin_leader">
              <LinkedinFilled className="icon_leader_linkedin" />
            </div>
          </div>
        }
      >
        <div className="hoverable_div_modal">
          <p className="hoverable_div_text">
            Eliron is co-founder and Chief Executive Officer. For the past 10
            years, he has worked to digitise the automotive and transportation
            sectors. Before founding Ravin, Eliron was Head of New Business
            Development at Shell’s Digital Ventures unit in London, investing
            and incubating new businesses that can leverage Shell’s global
            footprint of retail location for the benefit of fleets, motorists
            and smart cities. Prior to that, Eliron served as the CEO of
            FarePilot.com, a startup using machine learning to help taxi and
            Uber drivers find their next passenger by predicting demand patterns
            in local areas. Eliron has an MBA from London Business School and is
            a proud father of 2 boys and one adorable girl.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Leadership;
