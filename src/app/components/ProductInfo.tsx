import React from 'react';
import Image from 'next/image';
import image3 from "../Assests/image3.png"
import icon from "../Assests/icon.png"

const ProductInfo = () => {
    return (
        <div className=' w-auto mt-40 md: h-auto'>
            <h2 className='text-4xl text-center font-bold text-gray-700'>PRODUCT INFORMATION</h2>
            <p className='text-sm lg:text-xl text-center mt-10 text-gray-700' >Our  Scooter has following unique design and technology features </p>
            <div className='md:flex grid justify-center items-center md:justify-between'>
                <div><Image className='w-96 md:w-full lg:w-[748px] lg:h-[706px]' src={image3} alt=''></Image></div>
                <div className='p-5 md:p-0 md:mr-10'>
                    <div className='flex items-center justify-start gap-4'>
                        <Image className='w-12 h-12' src={icon} alt=''></Image>
                        <p>leightweight  aircraft grade aluminium frame </p>
                    </div>
                    <div className='flex items-center justify-start mt-8 gap-4'>
                        <Image className='w-12 h-12' src={icon} alt=''></Image>
                        <p>Car grade lithium battery </p>
                    </div>
                    <div className='flex items-center justify-start mt-8 gap-4'>
                        <Image className='w-12 h-12' src={icon} alt=''></Image>
                        <p>Self-balanced  </p>
                    </div>
                    <div className='flex items-center justify-start mt-8 gap-4'>
                        <Image className='w-12 h-12' src={icon} alt=''></Image>
                        <p>plug n play </p>
                    </div>
                    <div className='flex items-center justify-start mt-8 gap-4'>
                        <Image className='w-12 h-12' src={icon} alt=''></Image>
                        <p>Quick release adapter  </p>
                    </div>
                    <div className='flex items-center justify-start mt-8 gap-4'>
                        <Image className='w-12 h-12' src={icon} alt=''></Image>
                        <p>RFID kEY CARDS </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
