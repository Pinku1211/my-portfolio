import React from 'react';
import SectionTitle from './shared/SectionTitle';
import Language from './shared/Language';

const Experience = () => {
    return (
        <div id='experience' className='min-h-[100vh] pt-16 w-full'>
            <SectionTitle title='Experience' subtitle='What Skills I Have'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='border-2 bg-[#092635] border-transparent hover:border-2 hover:bg-opacity-60  hover:border-myColor w-full rounded-lg p-10'>
                    <h1 className='font-semibold text-center text-myColor'>Frontend Development</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <Language language='HTML' status='Experienced'></Language>
                        <Language language='CSS' status='Intermediate'></Language>
                        <Language language='JavaScript' status='Intermediate'></Language>
                        <Language language='Tailwind' status='Experienced'></Language>
                        <Language language='React' status='Experienced'></Language>
                    </div>
                </div>
                <div className='border-2 bg-[#092635] border-transparent hover:border-2 hover:bg-opacity-60  hover:border-myColor w-full rounded-lg p-10'>
                    <h1 className='font-semibold text-center text-myColor'>Backend Development</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <Language language='Node JS' status='Intermediate'></Language>
                        <Language language='MongoDB' status='Intermediate'></Language>
                        <Language language='Python' status='Intermediate'></Language>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Experience;