import React from 'react'

function SideNav({ isOpen, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-6/12 py-10 pr-10 bg-[#71AC8B] z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className=' flex flex-col gap-[25px] items-end'>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Home</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Animals</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>About</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Login</a></li>
                <li> <a href='#' className='font-montserrat text-[18px] font-semibold hover:text-[#71AC8BE6]'>Discover More</a></li>
                <button onClick={onClose} className='mt-16 font-montserrat text-[14px]'>Close</button>
            </ul>
        
        
      </aside>
    </>
  )
}

export default SideNav