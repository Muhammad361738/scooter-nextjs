import React from 'react';
import Image from 'next/image';
import image4 from "../Assests/image4.png"

const HighMoter = () => {
    return (
        <div className='w-auto h-auto'>
            <h1 className='text-4xl text-center font-bold text-gray-700'>High Efficiency Motor</h1>
            <p className=' text-sm lg:text-xl text-center mt-10 text-gray-700'>more torque for powerful riding with 22% maximum hill climbing capability</p>
            <div>
                <Image className='w-auto h-auto' src={image4} alt=''></Image>
            </div>
        </div>
    );
}

export default HighMoter;
