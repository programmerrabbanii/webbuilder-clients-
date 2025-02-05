import React from 'react';
import Bannar from '../Components/Bannar';
import About from './About';
import Services from './Services';
import RecentWorks from '../Components/RecentWorks';
import Team from '../Components/Team';
import WhyChooseUs from '../Components/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <RecentWorks></RecentWorks>
            <Team></Team>
            <WhyChooseUs></WhyChooseUs>
           
           
        </div>
    ); 
};

export default Home;