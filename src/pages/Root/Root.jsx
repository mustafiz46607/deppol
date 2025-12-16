import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';

const Root = () => {
    return (
        <div className='max-w-[1240px] mx-auto red-hat-display'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;