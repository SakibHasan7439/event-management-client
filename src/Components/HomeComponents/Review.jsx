import React from 'react';

const Review = ({description, name, profession}) => {
    return (
        <div className='flex items-center flex-col justify-center'>
            <img src="/quote.png" alt="quote image" className='mb-6 w-12'/>
            <p className='font-semibold mb-4 text-center'>{description}</p>
            <h4 className='text-[#ffbe30] font-2xl'>{name}</h4>
            <p className='text-gray-500'>{profession}</p>
        </div>
    );
};

export default Review;