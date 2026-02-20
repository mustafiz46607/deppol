import React from 'react';
import noman from '../../assets/al-noman.png'

const Contact_us = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-yellow-900 text-white px-6 lg:px-20 py-20 rounded-3xl my-20 mx-5 lg:mx-50 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                
                {/* LEFT SIDE */}
                <div>
                  <span className="border border-green-500 text-green-400 px-5 py-2 rounded-full text-sm">
                    Claim a $799 Consultation, on Us!
                  </span>
        
                  <h2 className="text-4xl lg:text-5xl font-semibold mt-6 leading-tight">
                    Enhance Your Brand <br />
                    Potential{" "}
                    <span className="italic font-serif text-yellow-300">
                      At No Cost!
                    </span>
                  </h2>
        
                  <ul className="mt-8 space-y-4 text-gray-300">
                    <li>✔ Expect a response from us within 24 hours</li>
                    <li>✔ We're happy to sign an NDA upon request.</li>
                    <li>✔ Get access to a team of dedicated product specialists.</li>
                  </ul>
        
                  {/* Profile */}
                  <div className="mt-10 flex items-center gap-6">
                    <img
                      src={noman}
                      alt="Founder"
                      className="w-28 h-28 rounded-2xl object-cover"
                    />
        
                    <div>
                      <h3 className="text-xl font-semibold">Abdullah Al Noman</h3>
                      <p className="text-gray-400 text-sm">COO & Co-founder</p>
                      <p className="text-gray-400 mt-2">+1 (716) 503-6335</p>
                      <p className="text-purple-400 cursor-pointer hover:underline">
                        Book a Call Directly
                      </p>
                    </div>
                  </div>
                </div>
        
                {/* RIGHT SIDE - FORM */}
                <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-gray-700">
                  <form className="space-y-5">
                    
                    <div>
                      <label className="block mb-2 text-sm">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-purple-500"
                      />
                    </div>
        
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm">Your Email</label>
                        <input
                          type="email"
                          placeholder="yourmail@gmail.com"
                          className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                      </div>
        
                      <div>
                        <label className="block mb-2 text-sm">Whatsapp Number</label>
                        <input
                          type="text"
                          placeholder="1123 1234567"
                          className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>
        
                    {/* Budget */}
                    <div>
                      <label className="block mb-3 text-sm">Project Budget</label>
                      <div className="flex flex-wrap gap-3">
                        <button type="button" className="px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500">
                          Less than $5K
                        </button>
                        <button type="button" className="px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500">
                          $5K - $10K
                        </button>
                        <button type="button" className="px-4 py-2 border border-purple-500 rounded-lg bg-purple-600">
                          $10K - $20K
                        </button>
                        <button type="button" className="px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500">
                          $20K - $50K
                        </button>
                        <button type="button" className="px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500">
                          More than $50K
                        </button>
                      </div>
                    </div>
        
                    {/* Project Details */}
                    <div>
                      <label className="block mb-2 text-sm">Project Details</label>
                      <textarea
                        rows="4"
                        placeholder="I want to redesign my website.."
                        className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-purple-500"
                      ></textarea>
                    </div>
        
                    <button className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold">
                      Let's Connect →
                    </button>
                  </form>
                </div>
              </div>
            </div>
    );
};

export default Contact_us;