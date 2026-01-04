import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='max-w-screen bg-[#3E6F54]'>
            <div className="footercontainer max-w-screen flex p-10 gap-5 justify-center ">
                <div className="content w-4/12 ">
                    <h2 className='font-montserrat font-semibold text-2xl mb-3 text-white'>About Us</h2>
                    <p className='font-montserrat text-[16px] mb-3 text-white'>Dedicated to the conservation and protection of wildlife, our reserve is a sanctuary for endangered species and a place to experience nature's beauty.</p>
                <a href="#" className='font-montserrat text-[16px] mb-2 text-white hover:text-[#71AC8b]'>Learn More</a>
                </div>
                <div className="content quicklinks w-4/12 flex flex-col items-center">
                    <h2 className='font-montserrat font-semibold text-2xl mb-3 text-white'>Quick Links</h2>
                    <a href="#" className='font-montserrat text-[16px] mb-2 text-white hover:text-[#71AC8b]'>Plan your visits</a>
                    <a href="#" className='font-montserrat text-[16px] mb-2 text-white hover:text-[#71AC8b]'>Volunteer</a>
                    <a href="#" className='font-montserrat text-[16px] mb-2 text-white hover:text-[#71AC8b]'>Make a Donation</a>
                    <a href="#" className='font-montserrat text-[16px] mb-2 text-white hover:text-[#71AC8b]'>Upcoming Events</a>
                </div>
                <div className="content w-4/12">
                    <h2 className='font-montserrat font-semibold text-2xl mb-3 text-white'>Contact Us</h2>
                    <p className='font-montserrat text-[16px] mb-2 text-white'>Address: 123 Wildlife Avenue, Nature City, Earth.</p>
                    <p className='font-montserrat text-[16px] mb-2 text-white'>Email: <a href='#'>contact@wildlifereserve.com</a></p>
                    <p className='font-montserrat text-[16px] mb-2 text-white'>Phone: <a href='#'>+123 456 7890</a></p>
                </div>
            </div>
            <div className="footerBelow flex flex-col items-center p-5 max-w-screen border-t border-[#C97A5A]">
                <p className='font-montserrat text-[16px] mb-2 text-white'>&copy; 2025 Wildlife Reserve. All Rights Reserved</p>
                <p className='font-montserrat text-[16px] mb-2 text-[#C97A5A]'> <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </div>
        </footer>
    </div>
  )
}

export default Footer