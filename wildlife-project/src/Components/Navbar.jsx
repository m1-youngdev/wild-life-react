import React from 'react';
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div>
        <nav className='nav w-screen flex justify-between items-center px-[70px] py-[20px] fixed'>
           <div>
             <h1 className="logo font-montserrat text-4xl font-semibold">Jacob <span className='text-[#71AC8BE6]'>Wildlife</span></h1>
           </div>
           <div className='links'>
            <ul className=' flex gap-[20px]'>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Home</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Animals</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>About</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold bg-[#71AC8B80] text-white p-[10px] rounded-lg hover:bg-[#71AC8BE6]'>Discover More</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Login</a></li>
            </ul>
           </div>
           <div className="hamburger hidden">
              <FiMenu className='ham text-2xl text-[#71AC8BE6]'/>
            </div>

        </nav>
    </div>
  )
}

export default Navbar