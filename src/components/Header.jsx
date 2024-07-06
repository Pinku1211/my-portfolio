import React from 'react';
import p from '../assets/p-4.png'
import HeaderSocials from './HeaderSocials';
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
    return (
        <header className='lg:h-[627px] flex flex-col gap-6 lg:justify-between items-center w-3/4 mx-auto pt-4 lg:pt-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-lg font-semibold'>Hello, I'm</h1>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Pinku Sarker</h1>
            </div>
            <div className='flex justify-center md:justify-between items-center w-full'>
                <HeaderSocials></HeaderSocials>
                <div className='bg-gradient-to-b from-myColor to-[#014154] rounded-t-full pt-4'>
                    <img className='h-[22rem] w-[22rem] pt-8' src={p} alt="Person" />
                </div>
                <div className='hidden md:block'>
                    <a href="#footer" className='text-myColor  font-thin'><FaChevronDown></FaChevronDown></a>   
                </div>

            </div>
        </header>
    );
};

export default Header;
