import React from 'react';
import Image from 'next/image';
import image9 from "../Assests/image9.png" 
import image10 from "../Assests/image10.png" 
import image11 from "../Assests/image11.png" 

const Page = () => {
    return (
        <div className='w-auto h-auto mt-10'>
            <h2 className='text-4xl text-center font-bold text-gray-700'>Gallery</h2>
              <p className='text-sm lg:text-xl text-center mt-10 text-gray-700' >View gallery of our products and make yourself satisfied with our creation  </p>
              <div className='md:flex grid justify-center gap-10  '>
                <div className='md:w-[50%] w-80 s:w-96 mt-5  md:mt-40'>
                <div>
                    <Image className='w-auto' src={image9} alt=''></Image>
                </div>
                <div className='hidden md:block text-center mt-10 '>
                <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>More Accessories Coming Soon</button>
                </div>
                <div className='hidden md:block text-center mt-5'>
                    <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>More Accessories Coming Soon</button>
                  </div>
                    <div className=' hidden md:block text-center mt-5 '>
                    <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>More Accessories Coming Soon</button>
                    </div>
              </div>

              <div className='mt-20'>
              <Image className='w-80 md:w-96' src={image10} alt=''></Image>
              <Image className='w-80 h-80 md:w-96 mt-10' src={image11} alt=''></Image>

              </div>
              <div>
              <div className=' block md:hidden text-center mt-2' >
                <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>Battery Images</button>
                </div>
                <div className=' block md:hidden text-center mt-2'>
                    <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>Spare Parts Images</button>
                  </div>
                    <div className='  block md:hidden text-center mt-2'>
                    <button className='w-[370px] rounded-lg text-gray-700 font-bold border-gray-900 border-2 p-4'>Charging Cable Images</button>
                    </div>
                    </div>
              </div>
        </div>
    );
}

export default Page;
