import React from 'react';


const WhatWeDo = () => {
    return (
        <div className='bg-black text-white px-5 lg:px-20 py-10 '>
            <span className='border-1  border-green-500 text-green-500 px-5 py-2 rounded-3xl '>Industry Wins</span>
            <h2 className='text-4xl font-semibold mt-4'>We design <span>Brands</span> That <span>Speak </span> To Audiences</h2>


            <div className='lg:flex justify-between items-center lg:h-120  gap-8 my-5 '>
                <div className='lg:w-1/3 '>
                    <h2 className='text-4xl font-semibold mt-4 pb-4 border-b border-purple-500'>UI/UX Design</h2>
                    <p>UI/UX Design,App Design,Website Design,Dashboard Design,Wireframing & Prototyping,Interaction Design and Product Design</p>
                    <button className="btn text-semibold text-purple-500 border-none  shadow-none bg-transparent my-5">See More</button>
                </div>
                <div className='lg:w-1/3  h-full  '>
                    <img src='' className='lg:h-5/6 mt-10 mx-auto lg:w-4/6 rounded-xl ' alt="" />
                </div>
                <div className='lg:w-1/3  h-full my-10'>
                  <img src='' className='lg:h-5/6 lg:w-4/6 mx-auto mt-25 rounded-xl ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;