import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Clinet from './Client';
import About from './About';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import ClientStories from './ClientStories';
import ConsultationSection from './ConsultrationSection';
import FAQSection from './FAQSection';

const Home = () => {
    return (
        <div className='w-full mx-auto red-hat-display'>
           <Banner></Banner>
           <Projects></Projects>
           <Clinet></Clinet>
           <About></About>
           <WhatWeDo></WhatWeDo>
           <WhyChooseUs></WhyChooseUs>
           <ClientStories></ClientStories>
           <FAQSection></FAQSection>
           <ConsultationSection></ConsultationSection>
        </div>
    );
};

export default Home;