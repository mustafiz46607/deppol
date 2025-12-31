import React from 'react'
import image1 from '../assets/ROTATE ME to 0° (mackbook)-1.png'
import image2 from '../assets/ROTATE ME to 0° (mackbook).png'
import top from '../assets/top.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import ellipse from '../assets/Ellipse 1.png'
import { Link } from 'react-router'

const Projects = () => {
    
    return (
        <div className="bg-white text-black px-5 lg:px-20 py-10 border-b">

            {/* Section Header */}
            <span className="border border-blue-500 font-bold text-blue-500 px-5 py-2 rounded-3xl">
                Where We Do
            </span>

            <h2 className="text-4xl font-semibold mt-4">Results For</h2>
            <h2 className="text-4xl font-semibold italic playfair-display">
                Every Industry
            </h2>

            {/* ================= FIRST BANNER ================= */}
            <div className="bg-blue-200 mt-8 rounded-3xl overflow-hidden">

                <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-10 gap-10">

                    <div className="lg:w-1/2">
                        <h3 className="text-xl italic font-bold playfair-display mb-4">
                            News Portal
                        </h3>

                        <h1 className="text-3xl font-bold mb-4">
                            Website Maintenance
                        </h1>

                        <p className="text-gray-700 mb-6">
                            The Caribbean Times website is regularly maintained to ensure smooth
                            performance. News content is published on time with a strong focus on
                            accuracy. Technical issues are monitored and resolved promptly.
                        </p>

                        <div className="bg-blue-400 rounded-xl p-4 inline-flex items-center gap-4 w-full">
                            <img
                                className="w-12 h-12 rounded-full"
                                src={ellipse}
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-black">Michael Babwar</p>
                                <p className="text-sm font-semibold">
                                    Caribbean Times – Publisher
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="relative lg:w-1/2 flex justify-center">

                        
                        <img
                            src={image1}
                            className="w-[400px] relative  top-[-40px]  z-10 "
                            alt=""
                        />

                        
                        <img
                            src={top}
                            className="absolute top-40 md:top-44 right-0"
                            alt=""
                        />
                        <img
                            src={left}
                            className="absolute bottom-[-60px] md:bottom-[-90px] left-0"
                            alt=""
                        />
                        <img
                            src={right}
                            className="absolute bottom-[-60px] md:bottom-[-90px] right-0 w-[220px] md:w-[300px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* ================= SECOND BANNER ================= */}
            <div className="bg-[#FBE8A4] mt-10 rounded-3xl overflow-hidden">

                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between px-6 lg:px-12 py-10 gap-10">

                    
                    <div className="relative lg:w-1/2 flex justify-center ">
                        <img
                            src={image2}
                            className="w-[400px] relative  top-[-40px]  z-10 "
                            alt=""
                        />

                        <img src={top} className="absolute top-40 md:top-44 right-0" alt="" />
                        <img src={left} className="absolute bottom-[-60px] md:bottom-[-90px] left-0" alt="" />
                        <img src={right} className="absolute bottom-[-60px] md:bottom-[-90px] right-0 w-[220px] md:w-[300px]" alt="" />
                    </div>

                    
                    <div className="lg:w-1/2 ">
                        <h3 className="text-xl italic font-bold playfair-display mb-4">
                            Agency
                        </h3>

                        <h1 className="text-3xl font-bold mb-4">
                            Manage IT
                        </h1>

                        <p className="text-gray-700 mb-6">
                            The Caribbean Times website is regularly maintained to ensure smooth
                            performance. News content is published on time with a strong focus on
                            accuracy.
                        </p>

                        <div className="bg-[#F7BB48] rounded-xl p-4 inline-flex items-center gap-4 w-full ">
                            <img
                                className="w-12 h-12 rounded-full"
                                src={ellipse}
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-black">Michael Babwar</p>
                                <p className="text-sm font-semibold">
                                    Publisher
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* BUTTON */}
            <div className="text-center py-10">
                <Link to={"/Projects"} className="btn btn-primary px-8 py-4" >
                    See All Projects
                </Link>
            </div>
        </div>
    )
}

export default Projects
