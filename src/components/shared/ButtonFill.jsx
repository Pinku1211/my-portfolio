import React from 'react';

const ButtonFill = ({text}) => {
    return (
        <div>
            <button className='px-4 py-2 bg-myColor text-[#1f1f38] rounded-md'>{text}</button>
        </div>
    );
};

export default ButtonFill;