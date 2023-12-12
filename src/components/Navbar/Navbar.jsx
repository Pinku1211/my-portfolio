import React, { useState } from 'react';
import './Navbar.css'
import { LuUser2 } from "react-icons/lu";
import { VscHome } from "react-icons/vsc";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Navbar = () => {

    const [active, setActive] = useState('#')
    return (
        <nav className='text-myColor flex items-center w-fit px-2 py-1 bg-[#0000004D] rounded-full fixed bottom-4 z-10'>
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><VscHome></VscHome></a>
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><LuUser2></LuUser2></a>
            <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><LuBookOpenCheck></LuBookOpenCheck></a>
            <a href="#services" onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><MdOutlineMedicalServices></MdOutlineMedicalServices></a>
            <a href="#education" onClick={() => setActive('#education')} className={active === '#education' ? 'active' : ''}><HiOutlineAcademicCap></HiOutlineAcademicCap></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar></MdOutlinePermContactCalendar></a>
        </nav>
    );
};

export default Navbar;