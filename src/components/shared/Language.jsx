import React from 'react';
import { MdVerified } from "react-icons/md";

const Language = ({ language, status }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mt-4'>
                <MdVerified className='text-myColor'></MdVerified>
                <h1>{language}</h1>
                
            </div>
            <small className='ml-6'>{status}</small>
        </div>
    );
};

export default Language;