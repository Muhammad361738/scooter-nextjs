import React from 'react';
import Image from 'next/image';
import image2 from "../Assests/image2.png"
import image1 from "../Assests/image1.png"
import Link from 'next/link';
import arrow from "../Assests/arrow.jpg"

const Hero = () => {
    return (
        <div className=' w-full h-auto '>
        <div className='md:flex justify-between'>
            <div className=' pl-[30px] grid md:block justify-center mt-10  w-full md:w-[400px]'>
                <h1 className='lg:text-[60px] md:text-[50px] sm:tex[40px] text-[30px] text-gray-700'>LETS RIDE </h1>
                <p className=' md:text-[50px] sm:tex[40px] text-[30px] font-bold text-gray-700'>THE FUTURE .</p>
                <div className='w-[300px] h-1 bg-gray-700 rounded-xl mt-12 mb-12'></div>
                <p className='w-[280px] text-gray-700'>Simple and sleek design with users in mind .</p>
                <div className='flex justify-between w-[350px] text-gray-700'>
                    <div className='flex justify-center gap-5 items-center'>
                        <Image className='w-10' src={arrow} alt=''></Image>
                            <button>Buy Now </button>
                    </div>
                    <div className='flex gap-2 '>
                       <div className=''>
                        <p>Watch our</p>
                        <p>video how</p>
                        <p>it works </p>
                    </div>
                    <Image className='w-12' src={image2} alt=''></Image>
                    </div>
                </div>
            </div>
            <div className='flex justify-center md:block'><Image  className='w-96 md:w-full lg:w-[800px] h-[500px] mt-10' src={image1} alt="" /></div>
        </div>
            <div className=' flex flex-wrap gap-3 justify-center mt-5'>
                <div className='w-[178px] h-[137px] pt-8 pl-8 justify-center   border-white  shadow-slate-700 rounded-xl shadow-2xl'>
                    <p className='font-bold text-4xl text-gray-700'>105 <span className='font-bold text-gray-700 text-xl'>lbs</span></p>
                    <p className='text-gray-700 mt-3'>Net Weight </p>
                </div>
                <div className='w-[178px] h-[137px] pt-8 pl-8 justify-center border-white  shadow-slate-700 rounded-xl shadow-2xl'>
                    <p className='font-bold text-4xl text-gray-700'>26 <span className='font-bold text-gray-700 text-xl'>mph</span></p>
                    <p className='text-gray-700 mt-3'>Top Speed </p>
                </div>
                <div className='w-[178px] h-[137px] pt-8 pl-8 justify-center border-white  shadow-slate-700 rounded-xl shadow-2xl'>
                    <p className='font-bold text-4xl text-gray-700'>28<span className='font-bold text-gray-700 text-xl'>miles</span></p>
                    <p className='text-gray-700 mt-3'>Max Range </p>
                </div>
                <div className='w-[178px] h-[137px] pt-8 pl-8 justify-center  border-white  shadow-slate-700 rounded-xl shadow-2xl'>
                    <p className='font-bold text-4xl text-gray-700'>89 <span className='font-bold text-gray-700 text-xl'>nm</span></p>
                    <p className='text-gray-700 mt-3'>max Torques </p>
                </div>
                <div className='w-[178px] h-[137px] pt-8 pl-8 justify-center border-white  shadow-slate-700 rounded-xl shadow-2xl'>
                    <p className='font-bold text-4xl text-gray-700'>22% <span className='font-bold text-gray-700 text-xl'>slope</span></p>
                    <p className='text-gray-700 mt-3'>  Hill Climbing</p>
                </div>
                <div className='w-[178px] h-[137px] pt-8 pl-8 justify-center border-white  shadow-slate-700 rounded-xl shadow-2xl'>
                    <p className='font-bold text-4xl text-gray-700'>2x <span className='font-bold text-gray-700 text-xl'>lbs</span></p>
                    <p className='text-gray-700 mt-3'>hydralic Disc Brakes  </p>
                </div>
            </div>

        </div>
     
        
    );
}

export default Hero;
