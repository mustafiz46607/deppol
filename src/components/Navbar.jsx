import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/deppol 1.png'
import serviceImg from '../assets/ROTATE ME to 0° (mackbook)-1.png'

const Navbar = () => {
    const links = <>
        <li><NavLink className={'text-white'}>Home </NavLink></li>
        <li><NavLink className={'text-white'}>Projects </NavLink></li>
        <li className="relative group">
            <NavLink className={'text-white '}>Services </NavLink>
        

            {/* POPUP CARD */}
            <div
                className="
                    absolute left-[-270px] top-full mt-4
                    w-[500px] bg-white text-black
                     shadow-xl p-6
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-300
                    z-50
                "
            >
                <div className="flex gap-6">

                    {/* LEFT SIDE - SERVICES LIST */}
                    <div className="w-1/2 space-y-4">
                        <div>
                            <h4 className="font-semibold">UI/UX</h4>
                            <p className="text-sm text-gray-500">
                                Creating user-friendly digital experiences.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Web Design</h4>
                            <p className="text-sm text-gray-500">
                                Visually appealing & functional websites.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Web Development</h4>
                            <p className="text-sm text-gray-500">
                                Responsive websites effortlessly.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Brand Design</h4>
                            <p className="text-sm text-gray-500">
                                Interactive web designs made simple.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Logo & Branding</h4>
                            <p className="text-sm text-gray-500">
                                Creating memorable identities.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">SaaS Design</h4>
                            <p className="text-sm text-gray-500">
                                Intuitive interfaces that boost engagement.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE - IMAGE CARD */}
                    <div className="w-1/2 bg-gray-100 rounded-xl overflow-hidden">
                        <div className="p-4">
                            <h3 className="font-bold text-lg">
                                Level Up Like Player
                            </h3>
                            <p className="text-sm text-gray-600">
                                Our services will help you win the business success game.
                            </p>
                        </div>

                        <img
                            src={serviceImg}
                            alt="Service"
                            className="w-full h-[220px] object-cover"
                        />
                    </div>

                </div>
            </div>
        </li>
        <li><NavLink className={'text-white'}>Company </NavLink></li>
        <li><NavLink className={'text-white'}>Resources </NavLink></li>
    </>
    return (
        <div className='w-full'>
            <div className="navbar bg-black shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                  <a href=""> <img src={logo} className='w-[100px] md:ml-17' alt="" /></a> 
                </div>
                
                <div className="hidden md:block navbar-end lg:pl-40 ">
                  
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;