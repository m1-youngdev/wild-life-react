import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='w-screen flex justify-between px-[70px] py-[20px] fixed bg-opacity-20'>
           <div>
             <h1 className="logo font-montserrat text-4xl font-semibold">Jacob <span className='text-[#71AC8BE6]'>Wildlife</span></h1>
           </div>
           <div>
            <ul className='flex gap-[20px]'>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold'>Home</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold'>Animals</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold'>About</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold bg-[#71AC8BE6] text-white p-[10px] rounded-lg'>Discover More</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold'>Login</a></li>
            </ul>
           </div>

        </nav>
    </div>
  )
}

export default Navbar