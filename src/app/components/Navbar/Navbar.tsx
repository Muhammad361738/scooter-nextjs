"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "../../Assests/logo.png"

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white  w-full z-10 mx-auto h-16 mt-5 text-center text-black">
        <div className="flex justify-between items-center">
          <div className=" text-2xl font-serif pt-4 pl-6">
            <Image className='w-10' src={logo} alt=''></Image>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block pt-4 ">
            <ul className="outline-none flex gap-5 pr-10">
            <li className="relative group">
          <Link href="/" className=" flex items-center">
            PRODUCTS <span className="ml-1">▼</span>
          </Link>
               <ul className="absolute left-0 mt-2 space-y-2 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
            <li>
              <Link href="/ProductInfo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              ProductInfo
              </Link>
            </li>
            <li>
              <Link href="/MultipleAcc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                MultipleAcc
              </Link>
            </li>
            <li>
              <Link href="/HighMotor" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                HighMotor
              </Link>
            </li>
          </ul>
        </li>

              <li><Link href="/ProductInfo">GALLERY</Link></li>
              <li><Link href="/Contact">CONTACT</Link></li>
            </ul>
          </div>
          <div className='hidden md:block'>
            <ul className='outline-none flex gap-4 pr-10'>
                <li>LOG IN</li>
                <li>SIGN UP</li>
            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block md:hidden ">
            <button onClick={toggleMenu} className="text-4xl text-black p-3">&#8801;</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-4xl text-black">&#10006;</button>
          <ul className="text-center text-black text-2xl space-y-6">
            <li><Link href="/" onClick={toggleMenu}>Product</Link></li>
            <li><Link href="/ProductInfo" onClick={toggleMenu}>ProductInfo</Link></li>
            <li><Link href="/Contact" onClick={toggleMenu}>CONTACT</Link></li>
            <li><Link href="/MultipleAcc" onClick={toggleMenu}>MultipleAcc</Link></li>
            <li><Link href="/Gallery" onClick={toggleMenu}>Gallery</Link></li>

            <li><Link href="" onClick={toggleMenu}>LOG IN</Link></li>
            <li><Link className='bg-gray-700  p-2 rounded-xl' href="" onClick={toggleMenu}>SIGN UP</Link></li>
          </ul>   
        </div>
        
      )}
    </div>
  );
};

export default Page;
