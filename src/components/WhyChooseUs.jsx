import React from 'react';


const WhyChooseUs = () => {
    return (
        <div className='bg-white text-black px-5 lg:px-20 py-10 border-b border-black-500'>
            <span className='border-1  border-green-500 text-green-500 px-5 py-2 rounded-3xl '>Why Choose Us</span>
            <h2 className='text-4xl font-semibold mt-4'>We <span className='italic'>Design</span> for the <span className='italic'>Future</span> to</h2>
            <h2 className='text-4xl font-semibold italic'>Drive Today's <span className='italic'>Success</span></h2>


            <div className='md:flex justify-between items-center gap-5 lg:w-5/6 mx-auto mt-10'>

                <div className="card bg-gray-100 lg:w-110 shadow-md mb-3">

                    <img
                        src=''
                        className='w-[200px] p-4 h-[120px] rounded-xl'
                        alt="" />

                    <div className="card-body">
                        <h2 className="card-title">Unlimited Revisions</h2>
                        <p className='text-gray-600'>We are commited to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.</p>
                    </div>
                </div>

                <div className="card bg-gray-100 lg:w-110 shadow-md mb-3">
                    <img
                        src=''
                        className='w-[150px] p-4 h-[120px] rounded-xl'
                        alt='' />

                    <div className="card-body">
                        <h2 className="card-title">Lifetime Support</h2>
                        <p className='text-gray-600'>With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidence and assistance whenever you need it.</p>
                    </div>

                </div>
            </div>

            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 mt-5  lg:w-5/6 mx-auto gap-8'>

                <div className="card bg-gray-100 lg:w-70 shadow-md mb-3">

                    <img
                        src=''
                        className='w-[150px] p-4 h-[100px] rounded-xl'
                        alt="" />

                    <div className="card-body">
                        <h2 className="card-title">Unlimited Revisions</h2>
                        <p className='text-gray-600'>We are commited to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.</p>
                    </div>
                </div>

                <div className="card bg-gray-100 lg:w-70 shadow-md mb-3">

                    <img
                        src=''
                        className='w-[150px] p-4 h-[100px] rounded-xl'
                        alt="" />

                    <div className="card-body">
                        <h2 className="card-title">Unlimited Revisions</h2>
                        <p className='text-gray-600'>We are commited to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.</p>
                    </div>
                </div>

                <div className="card bg-gray-100 lg:w-70 shadow-md mb-3">

                    <img
                        src=''
                        className='w-[150px] p-4 h-[100px] rounded-xl'
                        alt="" />

                    <div className="card-body">
                        <h2 className="card-title">Unlimited Revisions</h2>
                        <p className='text-gray-600'>We are commited to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;