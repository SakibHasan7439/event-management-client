import React from 'react';
import PrimaryButton from '../Shared/Primary-button/PrimaryButton';

const SliderOption = ({image, date, city, location}) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={`bg-cover pt-20 text-center bg-center w-full h-[300px] md:h-[400px] lg:h-[500px]`}>
            <div>
                <p className='date'>{date}</p>
                <h3 className='text-4xl font-extralight text-white'>{city}</h3>
                <h2 className='font-bold text-4xl text-[#ffbe30] mb-6'>{location}</h2>
                <PrimaryButton variant='outline' size='lg'>Event Details</PrimaryButton>
            </div>
        </div>
    );
};

export default SliderOption;