import React from 'react';
import Bannar from '../Components/Bannar';
import About from './About';
import Services from './Services';
import RecentWorks from '../Components/RecentWorks';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <RecentWorks></RecentWorks>
           
           
        </div>
    ); 
};

export default Home;