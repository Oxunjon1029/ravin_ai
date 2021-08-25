import { AlignLeftOutlined, BarsOutlined } from '@ant-design/icons'
import { Button, Card, Drawer, Menu, Popover } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import React, { useState } from 'react'
import { NavLink, BrowserRouter as Router, Link } from 'react-router-dom'
import Logo from '../Images/ravin_logo.svg'

const Header = () => {
    window.onscroll = function () { myFunction() };
    function myFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("media_menu").style.background = "rgba(0,0,0,0.4) ";
            document.getElementById("media_menu").style.transition = "all ease .6s";
            document.getElementById("media_menu").style.zIndex = "1";
            document.getElementById("media_menu").style.padding = "30px 0";
            document.getElementById("menu").style.background = "indigo ";
            document.getElementById("menu").style.transition = "all ease .6s";
            document.getElementById("menu").style.zIndex = "1";
            document.getElementById("menu").style.height = "100px";
        }
        else {
            document.getElementById("media_menu").style.background = "transparent";
            document.getElementById("media_menu").style.zIndex = "1";
            document.getElementById("media_menu").style.width = "100%";
            document.getElementById("media_menu").style.top = "0";
            document.getElementById("media_menu").style.position = "fixed";
            document.getElementById("media_menu").style.transition = "all ease .7s";
            document.getElementById("media_menu").style.padding = "0";
            document.getElementById("menu").style.background = "transparent";
            document.getElementById("menu").style.zIndex = "1";
            document.getElementById("menu").style.width = "100%";
            document.getElementById("menu").style.top = "0";
            document.getElementById("menu").style.position = "fixed";
            document.getElementById("menu").style.transition = "all ease .8s";

        }
    }
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }
    const content = (
        <Card id="card_media">
            <ul className="solution_ul">
                <li><Link to="/fleet">Fleet Solutions</Link></li>
                <li><Link to="/platform">Remarketing platforms</Link></li>
                <li><Link to="/insurance">Insurance providers</Link></li>
                <li><Link to="/service">Service centers</Link></li>
            </ul>
        </Card>
    )
    return (
        <div>
            <Menu style={{ padding: "10px 0", zIndex: 1, background: "transparent", borderBottom: "none" }} mode="horizontal" id="menu">
                <MenuItem >
                    <Link to="/"><img style={{ zIndex: -1 }} src={Logo} alt="Logo" /></Link>
                </MenuItem>
                <Menu style={{ background: "transparent", borderBottom: "none"}} mode="horizontal" id="menu_1">
                    <Menu.Item>
                        <p className="tool"><Link to="/tool">Tools</Link></p>
                    </Menu.Item>
                    <Menu.Item className="Hover">
                        <p className="tool">Solutions</p>
                        <Card id="card">
                            <ul className="solution_ul">
                                <li><Link to="/fleet">Fleet Solutions</Link></li>
                                <li><Link to="/platform">Remarketing platforms</Link></li>
                                <li><Link to="/insurance">Insurance providers</Link></li>
                                <li><Link to="/service">Service centers</Link></li>
                            </ul>
                        </Card>
                    </Menu.Item>
                    <Menu.Item>
                        <p className="tool"><Link to="/career">Careers</Link></p>
                    </Menu.Item>
                    <Menu.Item>
                        <p className="tool"><Link to="/media">Media</Link></p>
                    </Menu.Item>
                    <Menu.Item>
                        <p className="tool"><Link to="/leader">Leadership</Link></p>
                    </Menu.Item>
                    <Menu.Item className="book">
                        <button className="demo"><h4>Book your demo</h4></button>
                    </Menu.Item>
                </Menu>
            </Menu>
            <div id="media_menu" style={{ display: "none" }}>
                <div className="menuLogo">
                    <div>
                        <Link to="/"><img style={{ zIndex: -1 }} src={Logo} alt="Logo" /></Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", right: "0" }}>
                        <Button type="default" onClick={showDrawer} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <BarsOutlined />
                        </Button>
                    </div>
                </div>
                <Drawer
                    placement="left"
                    onClose={onClose}
                    visible={visible}
                    width="330px"
                    // zIndex="999999999"
                >
                    <Menu
                        mode="vertical"
                        style={{ height: "100%" }}

                    >
                        <MenuItem>
                            <Link
                                className="active"
                                to="/tool"
                                onClick={onClose}
                            >
                                Tool
                            </Link>
                        </MenuItem>
                        <Popover  style={{ padding: "20px", width: "50%" }} content={content} placement="bottom">
                            <MenuItem >
                                <Link
                                    className="active"
                                    to="#"
                                >
                                    Solutions
                        </Link>

                            </MenuItem>
                        </Popover>
                        
                        <MenuItem>
                            <Link
                                className="active"
                                to="/career"
                                onClick={onClose}

                            >
                                Careers
                        </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link 
                            className="active"
                            to="/media"
                            onClick={onClose}

                            >
                                Media
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                className="active"
                                to="/leader"
                                onClick={onClose}

                            >
                                Leader
                        </Link>
                        </MenuItem>
                        <MenuItem className="Book" style={{ height: "90px" }}>
                            <button className="DEMO"><h4>Book your demo</h4></button>
                        </MenuItem>
                    </Menu>
                </Drawer>
            </div>
        </div>
    )
}

export default Header
