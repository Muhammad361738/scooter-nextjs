import React from 'react';
import Image from 'next/image';
import f1 from "../../Assests/f1.jpg"
import f2 from "../../Assests/f2.jpg"
import f6 from "../../Assests/f6.jpg"
import footer from "../../Assests/footer.png"

const Page = () => {
    return (
        <div className='bg-gray-700'>
        <div className='flex flex-wrap gap-20 lg:justify-start relative  md:top-0'>
                <Image className='w-96 h-auto z-10 ' src={footer} alt=''></Image>
            
            {/* second coloumn */}
            <div className='p-10'>
              <h3 className='text-white text-xl font-serif '>About</h3>
                <div className='text-white pt-5'>
                <p className='hover:text-amber-600 mt-5'>Company </p>
                <p className='pt-3 hover:text-amber-600 mt-5'>Teams</p>
                <p className='pt-3 hover:text-amber-600 mt-5'>profile</p>
                <p className='pt-3 hover:text-amber-600 mt-5'>Careers</p>
                </div>
             </div>
             {/* third coloumn  */}
             <div className='p-10'>
              <h3 className='text-white text-xl font-serif '>Resources</h3>
                <div className='text-white pt-5'>
                <p className='hover:text-amber-600 mt-5'>Contact</p>
                <p className='pt-3 hover:text-amber-600 mt-5'>Application</p>
                <p className='pt-3 hover:text-amber-600 mt-5'>FQA Features</p>                
                 </div> 
             </div>
             <div className='p-10 '>
                <h3 className='text-white text-xl font-serif '>Leagels</h3>
                <div className='text-white pt-5'>
                <p className='hover:text-amber-600 mt-5'>Copyright privacy</p>
                <p className='pt-3 hover:text-amber-600 mt-5'>policy Disclamier</p>
                <p className='pt-3 hover:text-amber-600 mt-5'>Terms</p>                
                 </div> 

                <div className='flex gap-3 mt-5'>
                    <div>
                        <Image className='h-10 w-10 rounded-full' src={f1} alt = ""></Image>
                    </div>
                    <div>
                        <Image className='h-10 w-10 rounded-full  bg-white' src={f2} alt = ""></Image>
                    </div>
                    <div className=''>
                        <Image className='h-10 w-10 rounded-full bg-white ' src={f6} alt = ""></Image>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <p className='text-center text-white pt-3 pb-3'>copyright 2021. All rights reserved </p>
            </div>
        </div>
    );
}

export default Page;