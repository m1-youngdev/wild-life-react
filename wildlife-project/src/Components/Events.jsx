import React from 'react'

function Events() {
  return (
    <div className='bg-[#71AC8b] bg-opacity-15'>
        <div className='w-10/12 pl-44 pt-8'>
            <h2 className='font-montserrat font-semibold text-3xl mb-3'>Events</h2>
        </div>
        <div className='max-w-screen flex justify-center items-center'>
            <div className='cards grid grid-cols-3 w-9/12 gap-5 py-10'>
                <div className="card rounded-lg shadow-[#71AC8b] shadow-md p-5">
                    <h2 className='font-montserrat font-semibold text-2xl mb-3'>Saving the Endangered Rhino</h2>
                    <p className="font-montserrat mb-3 text-[15px]">Explore the journey and challenges faced in protecting one of the most endangered species on Earth.</p>
                    <a href='#' className='font-montserrat text-[16px]'>Read more</a>
                </div>
                <div className="card rounded-lg shadow-[#71AC8b] shadow-md p-5">
                    <h2 className='font-montserrat font-semibold text-2xl mb-3'>The Journey of Migrating Elephants</h2>
                    <p className="font-montserrat mb-3 text-[15px]">Learn about the incredible migration of elephants across Africa.</p>
                    <a href='#' className='font-montserrat text-[16px]'>Read more</a>
                </div>
                <div className="card rounded-lg shadow-[#71AC8b] shadow-md p-5">
                    <h2 className='font-montserrat font-semibold text-2xl mb-3'>The Secret Life of Tigers</h2>
                    <p className="font-montserrat mb-3 text-[15px]">An in-depth look into the behaviors and habits of wild tigers</p>
                    <a href='#' className='font-montserrat text-[16px]'>Read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events