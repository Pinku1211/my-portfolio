import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const HomeNav = () => {
    return (
            <div className='flex flex-col md:flex-row lg:flex-row justify-center md:justify-between items-center mx-2'>
                <img className='h-14' src={logo} alt="logo" />
                <div className='flex flex-col md:flex-row lg:flex-row justify-center md:justify-end items-center gap-4 py-6  mx-2'>
                    <div className='text-sm hover:text-myColor'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "text-myColor" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className='text-sm hover:text-myColor'>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-myColor" : ""
                            }
                        >
                            WD-Portfolio
                        </NavLink>
                    </div>
                    <div className='text-sm hover:text-myColor'>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-myColor" : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </div>
                    <div className='text-sm hover:text-myColor'>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-myColor" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
    );
};

export default HomeNav;