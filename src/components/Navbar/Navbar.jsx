import React, { useState } from 'react';
import './Navbar.css'
import { LuUser2 } from "react-icons/lu";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";


const Navbar = () => {

    const [active, setActive] = useState('#')
    return (
        <nav className='text-myColor flex items-center w-fit px-2 py-1 bg-[#0000004D] rounded-full fixed bottom-4 z-10'>
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><LuUser2></LuUser2></a>
            <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><LuBookOpenCheck></LuBookOpenCheck></a>
            <a href="#services" onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><MdOutlineMedicalServices></MdOutlineMedicalServices></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar></MdOutlinePermContactCalendar></a>
        </nav>
    );
};

export default Navbar;