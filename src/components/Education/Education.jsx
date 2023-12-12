import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { BiSolidInstitution } from "react-icons/bi";
import { GrOrganization } from "react-icons/gr";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi2";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Education.css'


const Education = () => {
    return (
        <div id='education' className='min-h-[100vh] pt-16 w-full relative'>
            <SectionTitle title='Education' subtitle='Know More'></SectionTitle>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={20}
                className="pb-16 lg:w-[40%]">
                <SwiperSlide className='bg-[#092635] hover:bg-opacity-60 w-3/4 h-[200px] mx-auto flex items-center justify-center rounded-lg'>
                    <article className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-[#ef86a9] flex items-center justify-center'><HiAcademicCap className='text-2xl'></HiAcademicCap></div>
                        <div>
                            <h1 className='text-myColor'>Academic Credentials:</h1>
                            <h1 className='font-bold'>B.Sc. in Leather Engineering</h1>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide className='bg-[#092635] hover:bg-opacity-60 w-3/4 h-[200px] mx-auto flex items-center justify-center rounded-lg'>
                    <article>
                        <h1 className='text-myColor'>Institution:</h1>
                        <h1 className='font-bold'>University of Dhaka</h1>
                        <div className='flex items-center gap-2'>
                            <BiSolidInstitution></BiSolidInstitution>
                            <small>Institute of Leather Engineering & Technology</small>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide className='bg-[#092635] hover:bg-opacity-60 w-3/4 h-[200px] mx-auto flex items-center justify-center rounded-lg'>
                    <article>
                        <h1 className='text-myColor'>Relevant Activities:</h1>
                        <div className='flex'>
                            <VscDebugBreakpointData className='mt-1 mr-2'></VscDebugBreakpointData>
                            <div>
                                <h1 className='font-bold'>Organizing Secretary</h1>
                                <div className='flex items-center gap-2'>
                                    <GrOrganization></GrOrganization>
                                    <small>Dhaka University Youth Against Hunger</small>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <VscDebugBreakpointData className='mt-1 mr-2'></VscDebugBreakpointData>
                            <div>
                                <h1 className='font-bold'>General Member</h1>
                                <div className='flex items-center gap-2'>
                                    <GrOrganization></GrOrganization>
                                    <small>ILET Sports Club</small>
                                </div>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Education;