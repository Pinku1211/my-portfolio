import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";


const HeaderSocials = () => {
    return (
        <div className='hidden md:flex flex-col items-center text-xl gap-4'>
            <a href="https://linkedin.com/pinkusarker" target='_black'><FaLinkedin className='text-myColor'></FaLinkedin></a>
            <a href="https://github.com/Pinku1211" target='_black'><FaGithub className='text-myColor'></FaGithub></a>
            <a href="https://www.facebook.com/pinkukumarsarker" target='_black'><FaFacebook className='text-myColor'></FaFacebook></a>
            <h1 className='text-myColor'><RxDividerVertical className=''></RxDividerVertical></h1>
        </div>
    );
};

export default HeaderSocials;