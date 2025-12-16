import React from 'react';
import banner from '../assets/background.png'
import banner2 from '../assets/Rectangle 8c.png'
import spotify from '../assets/Vector.png'
import zapier from '../assets/Logo-4.png'
import amazon from '../assets/Logo-1.png'
import slack from '../assets/Logo-3.png'
import zoom from '../assets/Logo-2.png'
import adobe from '../assets/Logo.png'

const Banner = () => {
    return (
        <div className="relative items-center text-center py-10 bg-black text-white overflow-hidden">

            <div className='absolute top-55 md:top-40 '>
                <img src={banner} className='opacity-30 ' alt="" />
            </div>

            <div className=" w-full text-center">

                <span className="inline-block px-6 py-1 rounded-full border border-gray-500 mb-5">
                    👋 welcome to deppol
                </span>

                <h3 className="text-xl font-semibold mb-3">
                    Leading Tech Agency
                </h3>

                <h1 className="text-4xl lg:text-6xl md:w-4/8 mx-auto font-bold mb-8 ">
                    We <span className='playfair-display italic font-medium'>Manage</span> your IT, So
                    You can <span className='playfair-display italic font-medium'>Manage</span> Your Business
                </h1>

                <div className='text-center my-10 '>
                    <button className="px-6 py-2 rounded-xl font-bold btn btn-primary">
                        Contact Us
                    </button>
                </div>

                <span className="">Trusted By 250+ Companies</span>


                <div className='relative'>
                    <div className='grid grid-cols-8 gap-5 justify-between mx-10 items-center mt-8 '>
                        <img src={spotify} alt="" />
                        <img src={zapier} alt="" />
                        <img src={spotify} alt="" />
                        <img src={zoom} alt="" />
                        <img src={slack} alt="" />
                        <img src={amazon} alt="" />
                        <img src={adobe} alt="" />
                        <img src={adobe} alt="" />
                    </div>
                    <div className='absolute top-[-10px] md:top-[-80px]  '>
                        <img src={banner2} className='' alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;