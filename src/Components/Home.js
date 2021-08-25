import React from 'react';
import HomeTool from './HomeTool';
import HowItWorks from './HowItWorks';
import VehicleTransactions from './VehicleTransactions';
import Partners from './Partners'
import We_Are_Hire from './We_Are_Hire';
import RavinHeader from './RavinHeader';
const Home = () => {
    return (
        <div>
            <RavinHeader/>
            <HomeTool />
            <HowItWorks />
            <VehicleTransactions />
            <Partners/>
            <We_Are_Hire/>
        </div>
    )
}

export default Home
