import React from 'react';
import banner1 from '../assets/banner1.avif'
import banner2 from '../assets/banner2.avif'
import banner3 from '../assets/banner3.avif'
import banner4 from '../assets/banner4.avif'
import banner5 from '../assets/banner5.avif'
import ring from '../assets/ring.avif'

const Banner = () => {
    return (
        <div className="relative flex justify-between items-center  py-10 bg-black text-white">

            <div className="relative w-1/4 h-[450px] ">

                <img 
                    src={banner2} 
                    className="absolute top-10 left-0 h-[400px] z-20 " 
                    alt=""
                />

                <img 
                    src={banner5} 
                    className="absolute top-18  left-0 w-[80px] z-10" 
                    alt=""
                />

                <img 
                    src={banner4} 
                    className="absolute top-72 left-25 w-[80px] z-10" 
                    alt=""
                />
            </div>


            <div className="w-2/4 text-center space-y-5">

                <h3 className="text-lg font-semibold">
                    Leading UI/UX Design Agency
                </h3>

                <h1 className="text-6xl font-bold leading-tight">
                    We <span className="italic">Design</span> Products That Drive <span className="italic">Results</span>
                </h1>

                
                <span className="inline-block px-5 py-2 rounded-full border border-gray-500">
                    Designing across 8+ countries
                </span>

                <div className='text-center'>
                    <button className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700">
                    Contact Us
                </button>
                </div>
            </div>


            <div className="relative w-1/4 h-[450px] right-0">

                <img 
                    src={banner1} 
                    className="absolute top-10 right-0 h-[400px] z-20 " 
                    alt=""
                />

                <img 
                    src={banner3} 
                    className="absolute top-55 right-38 w-[90px] z-30" 
                    alt=""
                />

                <img 
                    src={ring} 
                    className="absolute top-15 right-0 w-[50px] z-10" 
                    alt=""
                />
            </div>

        </div>
    );
};

export default Banner;
