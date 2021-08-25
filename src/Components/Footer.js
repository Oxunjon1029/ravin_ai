import { LinkedinOutlined, MessageOutlined } from '@ant-design/icons';
import { Button, Form, Input, Menu } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import TextArea from 'antd/lib/input/TextArea'
import MenuItem from 'antd/lib/menu/MenuItem';
import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import Logo from '../Images/ravin_logo.svg'

const Footer = () => {
 
    return (
        <div className="Contact">
            <div className="conatct_us">
                <div className="interested">
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                        Interested in a demo? Have a question or a comment? <br /> Simply fill out the form and we’ll be in touch.
                    </p>
                </div>
                <div className="contact_form">
                    <Form >
                        <FormItem >
                            <div className="fullname">
                                <div>
                                    <Input className="input" placeholder="Name" style={{ border: "0", borderBottom: "1px solid indigo", backgroundColor: "transparent", fontSize: "17px", padding: "10" }} />
                                </div>
                                <div>
                                    <Input className="input" placeholder="Company" style={{ border: "0", borderBottom: "1px solid indigo", backgroundColor: "transparent", fontSize: "17px", padding: "10x" }} />
                                </div>
                            </div>
                        </FormItem>
                        <FormItem >
                            <Input className="input" placeholder="Company's website" style={{ border: "0", borderBottom: "1px solid indigo", backgroundColor: "transparent", fontSize: "17px", padding: "10" }} />
                        </FormItem>
                        <FormItem >
                            <Input className="input" placeholder="Email" style={{ border: "0", borderBottom: "1px solid indigo", backgroundColor: "transparent", fontSize: "17px", padding: "10x" }} />
                        </FormItem>
                        <FormItem >
                            <TextArea className="textArea" placeholder="Type your message here" style={{ border: "0", borderBottom: "1px solid indigo", backgroundColor: "transparent", fontSize: "17px", padding: "10" }} />
                        </FormItem>
                        
                        <FormItem style={{ right: '0', position: "relative" }}>
                            <button  className="DemoSend"><h4>Send</h4></button>
                        </FormItem>
                        
                    </Form>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-grid">
                    <div className="logo-div">
                        <a className="rights" href="#"><img src={Logo} alt="Logi" /></a>
                        <a className="rights" href="#">All rights reserved Ravin AI 2020</a>
                    </div>
                    <div className="address">
                        <p>
                            40 Bank Street, Canary Wharf,<br />
                            London, E14 5AB, UK
                        </p>
                        <a className="rights" href="#">
                            Terms & Conditions - Privacy Policy - Coockies Policy
                        </a>
                    </div>
                    <div className="email_icon">
                        <div className="email" >
                            <div className="icons">
                                <FaEnvelope style={{ color: "white", cursor: "pointer", fontSize: "32px", lineHeight: "35px", fontWeight: "400", marginRight: "30px" }} />
                                <LinkedinOutlined style={{ color: "white", cursor: "pointer", fontSize: "32px", lineHeight: "35px", fontWeight: "400" }} />
                            </div>
                            <a style={{ color: "rgba(226, 229, 240, 0.32)", fontSize: "24px", lineHeight: "30px", fontWeight: "400", display: "flex", justifyContent: "flex-end" }} href="#">
                                Designed by studio&more
                        </a>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
