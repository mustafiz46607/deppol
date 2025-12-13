import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Clinet from './Client';
import About from './About';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Projects></Projects>
           <Clinet></Clinet>
           <About></About>
           <WhatWeDo></WhatWeDo>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;