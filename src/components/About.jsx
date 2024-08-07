import React from 'react';
import SectionTitle from './shared/SectionTitle';
import person from '../assets/me.jpg';
import { LuBookOpenCheck } from "react-icons/lu";
import ButtonFill from './shared/ButtonFill';
import { FaFolder } from "react-icons/fa";
import ButtonOutline from './shared/ButtonOutline';
import CV from '../assets/my_resume.pdf'
import Certificate from '../assets/certificate_2.pdf'
import { MdFileDownload } from "react-icons/md";

const About = () => {
    return (
        <div id='about' className='min-h-[100vh] pt-16'>
            <SectionTitle title='Get to Know'></SectionTitle>
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
                <div className='flex gap-4'>
                    <a className='w-fit' href='#contact'><ButtonFill text='Contact'></ButtonFill></a>
                    <a href={CV} download><ButtonOutline text={'Resume'}></ButtonOutline></a>
                    <a href={Certificate} download><ButtonOutline text='Certificate'></ButtonOutline></a>
                </div>
            </div>
        </div>
    );
};

export default About;