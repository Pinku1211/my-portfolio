import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 py-6  mx-2 lg:w-[1300px] lg:mx-auto'>
            <div>
                <nav className='flex gap-4 lg:gap-6'>
                    <div className='text-lg hover:bg-none'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "text-myColor underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className='text-lg'>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-myColor underline" : ""
                            }
                        >
                            Portfolio
                        </NavLink>
                    </div>
                    <div className='text-lg'>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-myColor underline" : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HomeNav;