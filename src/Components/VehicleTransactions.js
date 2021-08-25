import { RightOutlined } from '@ant-design/icons';
import { Card,Button } from 'antd'
import Meta from 'antd/lib/card/Meta';
import React from 'react'
import Card1 from '../Images/card_1.jpg';
const VehicleTransactions = () => {
    const cards = [
        {
            image: Card1,
            h1: "Fleets and Leasing",
            p: <>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ea.</>,
            button: "Read More"
        },
        {
            image: Card1,
            h1: "Fleets and Leasing",
            p: <>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ea.</>,
            button: "Read More"
        },
        {
            image: Card1,
            h1: "Fleets and Leasing",
            p: <>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ea.</>,
            button: "Read More"
        },
        {
            image: Card1,
            h1: "Fleets and Leasing",
            p: <>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ea.</>,
            button: "Read More"
        },

    ]
    return (
        <div style={{backgroundColor:"white",padding:"50px",width:"100%"}} className="vehicle_1">
            <h1 className='vt'>Vehicle Transactions</h1>
            <div style={{width:"90%",margin:"10px auto"}}>
            <div className="vehicle-cards">
                {
                    cards.map(item => (
                        <Card className="card" cover={<img src={item.image} alt="Hello" />}>
                            <Meta style={{padding:"20px",fontSize:"15px",fontWeight:"400"}} title={item.h1} description={item.p} />
                            <Button  style={{color:"#79799a",fontSize:"14px",fontWeight:"400",lineHeight:"30px",border:"none"}}>{item.button} <RightOutlined style={{color:"#0000ee",lineHeight:"30px",fontSize:"14px",fontWeight:"400"}} /></Button>
                        </Card>
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default VehicleTransactions
