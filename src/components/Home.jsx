import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Clinet from './Client';
import About from './About';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import ClientStories from './ClientStories';

const Home = () => {
    return (
        <div className='max-w-[1240px] mx-auto red-hat-display'>
           <Banner></Banner>
           <Projects></Projects>
           <Clinet></Clinet>
           <About></About>
           <WhatWeDo></WhatWeDo>
           <WhyChooseUs></WhyChooseUs>
           <ClientStories></ClientStories>
        </div>
    );
};

export default Home;