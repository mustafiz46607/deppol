import React from 'react';
import card3 from '../assets/card3.avif'
import card1 from '../assets/card1.avif'

const Projects = () => {
    return (
        <div className='bg-white text-black px-20 py-10 border-b border-black-500'>
            <span className='border-1  border-green-500 text-green-500 px-5 py-2 rounded-3xl '>Industry Wins</span>
            <h2 className='text-4xl font-semibold mt-4'>Proven Success In</h2>
            <h2 className='text-4xl font-semibold italic'>Every Industry</h2>


            <div>
                <div className="hero bg-blue-300 min-h-[500px] mt-5 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={card3}
                            className=" rounded-lg shadow-2xl"
                        />
                        <div>
                            <h3 className='text-xl italic text-black mb-5'>Travel</h3>
                            <h1 className="text-3xl font-bold">Easy Booking for Dream Trips</h1>
                            <p className="py-6 text-gray-600">
                                Triply is a hassle free & effective tour solution for travelers. It's an all-inclusive booking and planning website that's helps people make their dream trips easier.
                            </p>
                            <div className='flex gap-20 items-center'>
                                <div>
                                    <h4 className='text-gray-700 text-xl font-semibold'>Pages in Projects</h4>
                                    <h1 className='text-2xl font-semibold text-black'>40+</h1>
                                </div>
                                <div>
                                    <h4 className='text-gray-700 text-xl font-semibold'>Retention Growth</h4>
                                    <h1 className='text-2xl font-semibold text-black'>36%</h1>
                                </div>
                            </div>

                            <div className='my-5'>
                                <ul className="list bg-blue-400 rounded-box shadow-md">

                                    <li className="list-row">
                                        <div><img className="size-10 rounded-3xl" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                        <div>
                                            <div className='text-xl font-bold text-black'>Shubho Al-Faroque</div>
                                            <div className="text-md  font-semibold opacity-100">Triply CEO</div>
                                        </div>

                                        <button className="btn btn-square btn-ghost">
                                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero bg-green-200 min-h-[500px] mt-5 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={card1}
                            className=" rounded-lg shadow-2xl"
                        />
                        <div>
                            <h3 className='text-xl italic text-black mb-5'>Travel</h3>
                            <h1 className="text-3xl font-bold">Easy Booking for Dream Trips</h1>
                            <p className="py-6 text-gray-600">
                                Triply is a hassle free & effective tour solution for travelers. It's an all-inclusive booking and planning website that's helps people make their dream trips easier.
                            </p>
                            <div className='flex gap-20 items-center'>
                                <div>
                                    <h4 className='text-gray-700 text-xl font-semibold'>Pages in Projects</h4>
                                    <h1 className='text-2xl font-semibold text-black'>40+</h1>
                                </div>
                                <div>
                                    <h4 className='text-gray-700 text-xl font-semibold'>Retention Growth</h4>
                                    <h1 className='text-2xl font-semibold text-black'>36%</h1>
                                </div>
                            </div>

                            <div className='my-5'>
                                <ul className="list bg-green-300 rounded-box shadow-md">

                                    <li className="list-row">
                                        <div><img className="size-10 rounded-3xl" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                        <div>
                                            <div className='text-xl font-bold text-black'>Shubho Al-Faroque</div>
                                            <div className="text-md  font-semibold opacity-100">Triply CEO</div>
                                        </div>

                                        <button className="btn btn-square btn-ghost">
                                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center py-10'>
                <button className="btn btn-primary p-5"> See All Projects </button>
            </div>
        </div>
    );
};

export default Projects;