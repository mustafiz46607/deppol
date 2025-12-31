import React from 'react';

import spotify from '../assets/Vector.png'
import zapier from '../assets/Logo-4.png'
import amazon from '../assets/Logo-1.png'
import slack from '../assets/Logo-3.png'
import zoom from '../assets/Logo-2.png'
import adobe from '../assets/Logo.png'
const Footer = () => {
    return (
        <div className='bg-black '>
            <div>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 border-b border-gray-300">
                    <nav className=''>
                        <h6 className="footer-title font-semibold">Important Links</h6>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Products</a>
                        <a className="link link-hover">Industry</a>
                        <a className="link link-hover">Blogs</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white font-semibold">Services</h6>
                        <a className="link link-hover">UI/UX Design</a>
                        <a className="link link-hover">Web Design</a>
                        <a className="link link-hover">Logo & Branding</a>
                        <a className="link link-hover">Webflow Design</a>
                        <a className="link link-hover">Framer Design</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white font-semibold">Specialized Industry</h6>
                        <a className="link link-hover">Fintech Industry</a>
                        <a className="link link-hover">Healthcare & Fitness Industry</a>
                        <a className="link link-hover">Edtech Industry</a>
                        <a className="link link-hover">Cybersecurity Industry</a>
                        <a className="link link-hover">Company Deck</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white font-semibold">Compare</h6>
                        <a className="link link-hover">Agencies</a>
                        <a className="link link-hover">Freelancers</a>
                        <a className="link link-hover">Inhouse</a>
                    </nav>
                </footer>
            </div>
            <div>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content  ">
                     <div className='grid grid-cols-8 gap-5 justify-between px-5 md:mx-15 items-center mt-8 '>
                                            <img src={spotify} alt="" />
                                            <img src={zapier} alt="" />
                                            <img src={spotify} alt="" />
                                            <img src={zoom} alt="" />
                                            <img src={slack} alt="" />
                                            <img src={amazon} alt="" />
                                            <img src={adobe} alt="" />
                                            <img src={adobe} alt="" />
                                        </div>
                </footer>
            </div>

            <div>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 bg-black">

                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start pl-30">
                        Terms & Conditions
                    </nav>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-center pl-30">
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </nav>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end pr-30 pl-30 py-10">
                        <h3>Privacy Policy</h3>
                    </nav>

                </footer>
            </div>
        </div>
    );
};

export default Footer;