import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { LuBookOpenCheck } from 'react-icons/lu';
import { FaFolder } from 'react-icons/fa';
import ButtonOutline from '../shared/ButtonOutline';
import ButtonFill from '../shared/ButtonFill';
import p from '../../assets/me.jpg';


const HomeAbout = () => {
    return (
        <div className='min-h-screen pt-16'>
            <SectionTitle title={'About Me'} subtitle={'Know More'}></SectionTitle>
            <div className='flex flex-col lg:flex-row justify-between gap-10 mt-12'>
                <div className='bg-myColor rounded-xl w-1/2 mx-auto'>
                    <img className='rounded-xl h-full transform rotate-12 hover:rotate-0 duration-75' src={p} alt="person" />
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-start items-center gap-4'>
                        <article className='w-full rounded-lg bg-[#092635]
                        border-2
                        border-transparent
                         hover:border-2 hover:bg-opacity-60 hover:border-myColor text-center flex flex-col items-center justify-center p-6 space-y-2'>
                            <LuBookOpenCheck className='text-myColor'></LuBookOpenCheck>
                            <h1 className='font-semibold'>Experience</h1>
                            <small>+1 Years of industrial working Experience</small>
                        </article>
                    </div>
                    <p className='my-4'>During my studies and job, I worked on projects and gained experience in footwear industry. I am passionate about the industry and excited to bring my fresh perspective to a dynamic team.</p><br>
                    </br>
                    <p>I am particularly interested in chemical industry. My goal is to contribute to innovative projects and collaborate with a talented team to drive success and growth. I am a quick learner, adaptable, and highly motivated to continuously develop my skills and knowledge.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;