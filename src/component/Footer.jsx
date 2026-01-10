import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4 '>
                    <FaInstagramSquare size={24}/>
                    <FaLinkedin size={24}/>
                    <FaTelegramPlane size={24}/>
                    <RiTwitterXLine size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>
                        &copy; 2024 Your Company .All rights reserved.
                    </p>
                </div>
            </div>

        </div>
    </footer>
        </>
  )
}

export default Footer