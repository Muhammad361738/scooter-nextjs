import React from 'react';
import Image from 'next/image';
import icon from "../Assests/icon.png"
import image5 from "../Assests/image5.png"
import image6 from "../Assests/image6.png"
import image7 from "../Assests/image7.png"
import image8 from "../Assests/image8.png"

const MultipleAcc = () => {
    return (
        <div>
              <h2 className='text-4xl text-center font-bold text-gray-700'>Multiple Accessories</h2>
              <p className='text-sm lg:text-xl text-center mt-10 text-gray-700' >There are multiple modes for the Scooter for your multiple needs </p>
             <div className='md:flex grid justify-center gap-10 items-center '>
                <div className='mt-10 grid justify-center md:block pl-5'>
                    <h5 className='text-4xl sm:text-[23px] mb-5 font-bold text-gray-800'>Golf bag Rock</h5>
                    <div className='flex items-center text-sm justify-start gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Material : Aluminium alloy </p>
                    </div>
                    <div className='flex items-cente text-sm  justify-start mt-8 gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Color : black </p>
                    </div>
                    <div className='flex items-center text-sm justify-start mt-8 gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Capacity: 45lbs  </p>
                    </div>
                    <div className='flex items-center text-sm justify-start mt-8 gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Ease: Steady & adjustable </p>
                    </div>
                </div>
             <div className='flex gap-0 md:mt-20'>
                <div><Image className='w-96 ' src={image5} alt=''></Image></div>
                <div><Image className='w-96 ' src={image6} alt=''></Image></div>
            </div>
        </div>
        <div className='md:flex grid justify-center gap-10 items-center '>
        <div className='flex justify-center items-center gap-0 md:mt-20'>
                <div><Image className='w-96 ' src={image7} alt=''></Image></div>
                <div><Image className='w-56 ' src={image8} alt=''></Image></div>
            </div>
                <div className='md:mt-10 grid justify-center md:block pl-5'>
                <h5 className='text-4xl sm:text-[23px] mb-5 font-bold text-gray-800'>Shopping Rack</h5>

                    <div className='flex items-center text-sm justify-start gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Material : Aluminium alloy </p>
                    </div>
                    <div className='flex items-cente text-sm  justify-start mt-8 gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Color : black </p>
                    </div>
                    <div className='flex items-center text-sm justify-start mt-8 gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Capacity: 45lbs  </p>
                    </div>
                    <div className='flex items-center text-sm justify-start mt-8 gap-4'>
                        <Image className='w-8 h-8 ' src={icon} alt=''></Image>
                        <p>Ease: Steady & adjustable </p>
                    </div>
                </div>
            
        </div>
                    <div className='text-center mt-10 flex justify-center '>
                    <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>More Accessories Coming Soon</button>
                    </div>

        </div>
    );
}

export default MultipleAcc;
