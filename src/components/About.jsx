import React from 'react';

const About = () => {
    return (
        <div className='bg-white text-black text-center px-20 py-10 border-b border-black-500'>
            <span className='border-1  border-green-500 text-green-500 px-5 py-2 rounded-3xl '>What Set Us Apart</span>
            <h2 className='text-4xl font-semibold mt-4'>Why Us? Because Your <span className='italic'>Growth Is Our Mission</span></h2>
            <p className='text-gray-500 w-3/8 mt-4 mx-auto'>See the difference thoughtful design makes. Our works highlight the dedication we bring to every client partnership.</p>

            <section className="w-full flex justify-center py-16 bg-white-100">

                {/* VIDEO BOX */}
                <div className="w-6/8 aspect-video rounded-xl overflow-hidden shadow-lg">

                    <video
                        className="w-full h-full object-cover"
                        src="/video/sample.mp4"   // 🔁 your video path
                        controls
                        autoPlay
                        muted
                        loop
                    />

                </div>
            </section>
        </div>
    );
};

export default About;