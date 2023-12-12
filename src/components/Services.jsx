import React from 'react';
import SectionTitle from './shared/SectionTitle';
import ButtonFill from './shared/ButtonFill';
import ButtonOutline from './shared/ButtonOutline';
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const Services = () => {
    return (
        <div id='services' className='min-h-[100vh] pt-16'>
            <SectionTitle title='Projects' subtitle='What I have done!'></SectionTitle>
            <div className="carousel carousel-center max-w-md p-4 space-x-4">
                <div className="carousel-item relative z-0 pt-4 px-4 pb-16 bg-[#092635] rounded-xl">
                    <img src={project1} className=" h-80 rounded-xl" />
                    <div className='absolute bottom-3 w-full'>
                        <div className='flex gap-4 items-center justify-end mr-8'>
                            <a href="https://github.com/Pinku1211/dine-smart-client" target='_blank'><ButtonOutline text='GitHub'></ButtonOutline></a>
                            <a href='https://dinesmart-a232f.web.app' target='_blank'><ButtonFill text='Live Link'></ButtonFill></a> 
                        </div>
                    </div>
                </div>
                <div className="carousel-item relative z-0 pt-4 px-4 pb-16 bg-[#092635] rounded-xl">
                    <img src={project3} className=" h-80 rounded-xl" />
                    <div className='absolute bottom-3 w-full'>
                        <div className='flex gap-4 items-center justify-end mr-8'>
                            <a href="https://github.com/Pinku1211/nirjhara-fitness" target='_blank'><ButtonOutline text='GitHub'></ButtonOutline></a>
                            <a href='https://nirjhara-yoga.web.app' target='_blank'><ButtonFill text='Live Link'></ButtonFill></a> 
                        </div>
                    </div>
                </div>
                <div className="carousel-item relative z-0 pt-4 px-4 pb-16 bg-[#092635] rounded-xl">
                    <img src={project4} className=" h-80 rounded-xl" />
                    <div className='absolute bottom-3 w-full'>
                        <div className='flex gap-4 items-center justify-end mr-8'>
                            <a href="https://github.com/Pinku1211/cargo-client" target='_blank'><ButtonOutline text='GitHub'></ButtonOutline></a>
                            <a href='https://cargo-97b35.web.app' target='_blank'><ButtonFill text='Live Link'></ButtonFill></a> 
                        </div>
                    </div>
                </div>
                <div className="carousel-item relative z-0 pt-4 px-4 pb-16 bg-[#092635] rounded-xl">
                    <img src={project2} className=" h-80 rounded-xl" />
                    <div className='absolute bottom-3 w-full'>
                        <div className='flex gap-4 items-center justify-end mr-8'>
                            <a href="https://github.com/Pinku1211/job-hunt-client" target='_blank'><ButtonOutline text='GitHub'></ButtonOutline></a>
                            <a href='https://job-hunt-f101c.web.app' target='_blank'><ButtonFill text='Live Link'></ButtonFill></a> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;