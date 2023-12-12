import React from 'react';

const ButtonOutline = ({text}) => {
    return (
        <div>
            <button className='px-4 py-2 border border-myColor rounded-md hover:bg-myColor hover:text-[#1f1f38]'>{text}</button>
        </div>
    );
};

export default ButtonOutline;