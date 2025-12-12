import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink className={'font-semibold text-lg text-white m-2'}>Projects </NavLink>
        <NavLink className={'font-semibold text-lg text-white m-2'}>Services </NavLink>
        <NavLink className={'font-semibold text-lg text-white m-2'}>Pricing </NavLink>
        <NavLink className={'font-semibold text-lg text-white m-2'}>More </NavLink>
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
                    <a className="btn btn-ghost text-xl font-bold text-white pl-40">LOGO</a>
                </div>
                
                <div className="hidden md:block navbar-end pl-40 ">
                  
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;