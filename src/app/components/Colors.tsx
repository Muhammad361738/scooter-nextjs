import React from 'react';
import Image from 'next/image';
import image12 from "../Assests/image12.png"
import image13 from "../Assests/image13.png"
import image14 from "../Assests/image14.png"
import image15 from "../Assests/image15.png"
import image16 from "../Assests/image16.png"
const Colors = () => {
    return (
        <div className='w-auto h-auto mt-10'>
             <div className=''>
            <h1 className='text-4xl text-center font-bold text-gray-700'>Colors</h1>
            <p className=' text-sm lg:text-xl text-center mt-5 text-gray-700'>Check out our products colors</p>
            <div>
                <Image className='w-auto h-auto relative' src={image12} alt=''></Image>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-center '>
        <Image className='w-48 lg:w-60 h-56 relative' src={image13} alt=''></Image>
        <Image className='w-48 lg:w-60 h-56 relative' src={image14} alt=''></Image>
        <Image className='w-48 lg:w-60 h-56 relative' src={image15} alt=''></Image>
        <Image className='w-48 lg:w-60 h-56 relative' src={image16} alt=''></Image>

        </div>

        </div>
    );
}

export default Colors;
