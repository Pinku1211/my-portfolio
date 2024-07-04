import React from 'react';
import HomeNav from '../Home/HomeNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        
        <div>
            <div className='w-3/4 mx-auto'>
                <HomeNav></HomeNav>
                <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;