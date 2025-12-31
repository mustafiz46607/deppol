import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/deppol 1.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import serviceImg from '../assets/ROTATE ME to 0° (mackbook)-1.png';

const Navbar = () => {

    // Active link style
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-white border-b-2 border-blue-500 font-semibold"
            : "text-white hover:border-b-2 hover:border-gray-400";

    const links = (
        <>
            <li>
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/Projects" className={navLinkClass}>
                    Projects
                </NavLink>
            </li>

            <li className="relative group">
                <NavLink to="/Services" className={navLinkClass}>
                    Services <IoMdArrowDropdown className="inline" />
                </NavLink>

                {/* SERVICES DROPDOWN */}
                <div
                    className="
                        absolute left-[-340px] top-full mt-4
                        w-[600px] bg-white text-black
                        shadow-xl p-6
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        transition-all duration-300
                        z-50
                    "
                >
                    <div className="flex gap-6">
                        {/* LEFT SIDE */}
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

                        {/* RIGHT SIDE */}
                        <div className="w-1/2 bg-gray-100 rounded-xl overflow-hidden">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg">
                                        Level Up Like Player
                                    </h3>
                                    <MdArrowOutward className="text-xl" />
                                </div>
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

            <li>
                <NavLink to="/Pricing" className={navLinkClass}>
                    Pricing
                </NavLink>
            </li>

            <li className="relative group">
                <NavLink to="/Company" className={navLinkClass}>
                    Company <IoMdArrowDropdown className="inline" />
                </NavLink>

                {/* COMPANY DROPDOWN */}
                <div
                    className="
                        absolute left-[-500px] top-full mt-4
                        w-[600px] bg-white text-black
                        shadow-xl p-6
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        transition-all duration-300
                        z-50
                    "
                >
                    <div className="flex gap-6">
                        <div className="w-1/2 bg-gray-100 rounded-xl overflow-hidden">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg">
                                        Our Latest Work
                                    </h3>
                                    <MdArrowOutward className="text-xl" />
                                </div>
                                <p className="text-sm text-gray-600">
                                    We've recently worked on amazing projects.
                                </p>
                            </div>

                            <img
                                src={serviceImg}
                                alt="Work"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>

                        <div className="w-1/2 space-y-4">
                            <div>
                                <h4 className="font-semibold">About Us</h4>
                                <p className="text-sm text-gray-500">
                                    The journey of Design Monks
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Meet the Team</h4>
                                <p className="text-sm text-gray-500">
                                    An overview of the Monk family
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Blogs</h4>
                                <p className="text-sm text-gray-500">
                                    A collection of informative blogs
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Career</h4>
                                <p className="text-sm text-gray-500">
                                    Work with top global brands
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Contact Us</h4>
                                <p className="text-sm text-gray-500">
                                    Start your dream design journey
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );

    return (
        <div className="w-full">
            <div className="navbar bg-black shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <NavLink to="/">
                        <img src={logo} className="w-[100px] md:ml-17" alt="logo" />
                    </NavLink>
                </div>

                <div className="hidden md:block navbar-end lg:pl-40">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
