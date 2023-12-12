import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="footer footer-center py-10 bg-[#092635] text-base-content">
            <h1 className='text-myColor text-2xl font-bold'>Pinku Sarker</h1>
            <nav className="grid grid-flow-col gap-2">
                <a href='#' className="link link-hover">Home</a>
                <a href='#about' className="link link-hover">About</a>
                <a href='#experience' className="link link-hover">Experience</a>
                <a href='#services' className="link link-hover">Projects</a>
                <a href='#contact' className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://linkedin.com" target='_black'><FaLinkedin className='text-myColor'></FaLinkedin></a>
                    <a href="https://github.com" target='_black'><FaGithub className='text-myColor'></FaGithub></a>
                    <a href="https://facebook.com" target='_black'><FaFacebook className='text-myColor'></FaFacebook></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023</p>
            </aside>
        </footer>
    );
};

export default Footer;