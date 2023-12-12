import React from 'react';
import SectionTitle from './shared/SectionTitle';
import ButtonFill from './shared/ButtonFill';
import ButtonOutline from './shared/ButtonOutline';

const Services = () => {
    return (
        <div id='services' className='min-h-[100vh] pt-16'>
            <SectionTitle title='Projects' subtitle='What I have done!'></SectionTitle>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 ">
                <div className="carousel-item relative z-0">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                    <div className='absolute bottom-4 w-full'>
                        <div className='flex gap-4 items-center justify-end mr-5'>
                            <a href="https://github.com"><ButtonOutline text='GitHub'></ButtonOutline></a>
                            <a href=''><ButtonFill text='Live Link'></ButtonFill></a> 
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                </div>

            </div>

        </div>
    );
};

export default Services;