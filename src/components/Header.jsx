import React from 'react';
import CV from '../assets/Task-2.pdf'
import ButtonOutline from './shared/ButtonOutline';
import ButtonFill from './shared/ButtonFill';
import p from '../assets/P.png'
import HeaderSocials from './HeaderSocials';
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
    return (
        <header className='flex flex-col justify-between items-center min-h-screen w-full pt-16'>
            <div className='flex flex-col items-center'>
                <h1 className='text-lg font-semibold'>Hello, I'm</h1>
                <h1 className='text-4xl font-semibold my-3'>Pinku Sarker</h1>
                <small>Front End Developer</small>
                <div className='flex items-center gap-4 my-10'>
                    <a href={CV} download><ButtonOutline text='Download CV'></ButtonOutline></a>
                    <a href='#contact'><ButtonFill text="Contact Me"></ButtonFill></a>
                </div>
            </div>
            <div className='flex justify-center md:justify-between items-center w-full'>
                <HeaderSocials></HeaderSocials>
                <div className='bg-gradient-to-b from-myColor to-[#014154] rounded-t-full pt-4'>
                    <img className='h-[22rem] w-[24rem]' src={p} alt="Person" />
                </div>
                <div className='hidden md:block'>
                    <a href="#contact" className='text-myColor  font-thin'><FaChevronDown></FaChevronDown></a>   
                </div>

            </div>
        </header>
    );
};

export default Header;
