import React from 'react';
import SectionTitle from './shared/SectionTitle';
import person from '../assets/me.jpg';
import { LuBookOpenCheck } from "react-icons/lu";
import ButtonFill from './shared/ButtonFill';
import { FaFolder } from "react-icons/fa";

const About = () => {
    return (
        <div id='about' className='min-h-[100vh] pt-16'>
            <SectionTitle title='About Me' subtitle='Get to Know'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
                <div className='bg-myColor rounded-xl w-1/2 mx-auto'>
                    <img className='h-full w-full rounded-xl transform rotate-12 hover:rotate-0 duration-75' src={person} alt="person" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex justify-start items-center gap-4'>
                        <article className='w-full rounded-lg bg-[#092635]
                        border-2
                        border-transparent
                         hover:border-2 hover:bg-opacity-60 hover:border-myColor text-center flex flex-col items-center justify-center p-6 space-y-2'>
                            <LuBookOpenCheck className='text-myColor'></LuBookOpenCheck>
                            <h1 className='font-semibold'>Experience</h1>
                            <small>+1 Years of Learning Experience</small>
                        </article>
                        <article className='w-full rounded-lg bg-[#092635]
                        border-2
                        border-transparent
                         hover:border-2 hover:bg-opacity-60 hover:border-myColor text-center flex flex-col items-center justify-center p-6 space-y-2'>
                            <FaFolder className='text-myColor'></FaFolder>
                            <h1 className='font-semibold'>Projects</h1>
                            <small>20+ Projects</small>
                        </article>
                        
                        
                    </div>
                    <p className='my-4'>I am a junior web developer with a strong foundation in HTML, CSS, and JavaScript, built some projects with React, MongoDb. Passionate about transforming design concepts into functional websites, I thrive in collaborative environments. With a keen eye for detail and a commitment to staying updated on industry trends, I am eager to contribute my problem-solving skills to create dynamic and visually appealing web solutions.</p>
                    <a className='w-fit' href='#contact'><ButtonFill text='Contact Me'></ButtonFill></a>
                </div>
            </div>
        </div>
    );
};

export default About;