import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-[100px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;