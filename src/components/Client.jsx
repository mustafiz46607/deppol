import React from 'react';

const Client = () => {

    return (
        <div className='bg-white text-black px-4 md:px-20 py-10 border-b border-gray-200'>
            
            {/* Header Section */}
            <span className='inline-block border border-green-500 text-green-500 px-5 py-2 rounded-3xl text-sm font-medium'>
                Client Stories
            </span>
            <h2 className='text-4xl font-semibold mt-4'>
                Success <span className='italic'>Stories</span>
            </h2>
            <h2 className='text-4xl font-semibold italic'>
                That <span className='italic'>Inspire Us</span>
            </h2>

            {/* Reels Section (Inlined Design) */}
            <div className='mt-10'>
                {/* Grid layout for the four reels/cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    
                    {/* Reel 1: RelaxV */}
                    <div className={`relative h-110 rounded-2xl overflow-hidden shadow-lg bg-red-500/80`}>
                        <div className="absolute inset-0 bg-cover bg-center"> 
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90">
                                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4l15 8-15 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-white text-lg font-semibold tracking-wide">
                                    RelaxV
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reel 2: klasio */}
                    <div className={`relative h-110 rounded-2xl overflow-hidden shadow-lg bg-purple-500/80`}>
                        <div className="absolute inset-0 bg-cover bg-center"> 
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90">
                                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4l15 8-15 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-white text-lg font-semibold tracking-wide">
                                    klasio
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reel 3: gmfik Technology */}
                    <div className={`relative h-110 rounded-2xl overflow-hidden shadow-lg bg-blue-500/80`}>
                        <div className="absolute inset-0 bg-cover bg-center"> 
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90">
                                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4l15 8-15 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-white text-lg font-semibold tracking-wide">
                                    gmfik Technology
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reel 4: Esdiac */}
                    <div className={`relative h-110 rounded-2xl overflow-hidden shadow-lg bg-orange-500/80`}>
                        <div className="absolute inset-0 bg-cover bg-center"> 
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90">
                                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4l15 8-15 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-white text-lg font-semibold tracking-wide">
                                    Esdiac
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Client;