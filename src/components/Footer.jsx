import React from 'react';

import spotify from '../assets/Vector.png'
import zapier from '../assets/Logo-4.png'
import amazon from '../assets/Logo-1.png'
import slack from '../assets/Logo-3.png'
import zoom from '../assets/Logo-2.png'
import adobe from '../assets/Logo.png'
import logo from '../assets/deppol 1.png'
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div className='bg-black '>
            <div className=''>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content lg:px-50 p-10 border-b border-gray-200">
                    <nav className='lg:w-[450px] '>
                        <img src={logo} className=" " alt="logo" />
                        <div className=''>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tenetur, vitae nisi, optio aspernatur vero repellat rem minus quod nihil porro sapiente modi numquam dolorum sit inventore asperiores quia, ut alias.</p>
                        </div>
                    </nav>
                    <nav className=''>
                        <h6 className="footer-title font-semibold">Important Links</h6>
                        <Link to={'/company/contact-us'} className="link link-hover">Contact Us</Link>
                        <Link to={'company/about-us'} className="link link-hover">About Us</Link>
                        <Link to={'/projects'} className="link link-hover">Projects</Link>
                        <Link to={''} className="link link-hover">Industry</Link>
                        <Link to={'/company/blogs'} className="link link-hover">Blogs</Link>
                    </nav>
                    <nav className=''>
                        <h6 className="footer-title text-white font-semibold">Services</h6>
                        <Link to={"/services/ui-ux"} className="link link-hover">UI/UX Design</Link>
                        <Link to={"/services/web-design"} className="link link-hover">Web Design</Link>
                        <Link to={"/services/logo-&-branding"} className="link link-hover">Logo & Branding</Link>
                        <Link to={"/services/brand-design"} className="link link-hover">Brand Design</Link>
                        <Link to={"/services/web-development"} className="link link-hover">Web Development</Link>
                    </nav>
                    
                    
                </footer>
            </div>
            <div>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content  ">
                     <div className='grid grid-cols-8 gap-5 justify-between px-50 md:mx-15 items-center mt-8 '>
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
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center lg:px-50 bg-black">

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