import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='text-center mb-20'>
            <h1>{subtitle}</h1>
            <h1 className='text-3xl text-myColor font-semibold'>{title}</h1>
        </div>
    );
};

export default SectionTitle;