import React from 'react'

function Footer() {
  return (
    
    <div> <h2 className='p-5'>Footer</h2>
            <div className='flex flex-col justify-around w-full mx-auto my-0 bg-white'>
            <div className='flex flex-row justify-around w-full '>
                <div className='flex flex-col justify-start bg-white'>
                <div className='text-2xl no-underline hover:bg-sky-700 text-purple-500'>About Us</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Story</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Clients</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Testimonials</div>
                </div>
                <div className='flex flex-col justify-start bg-white'>
                <div className='text-2xl no-underline hover:bg-sky-700 text-purple-500'>Services</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Marketing</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Consulting</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Development</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Design</div>
                </div>
                <div className='flex flex-col justify-start bg-white'>
                <div className='text-2xl no-underline hover:bg-sky-700 text-purple-500'>Contact Us</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>United States</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>United Kingdom</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Australia</div>
                    <div href="#" className='mb-5 text-lg no-underline cursor-pointer text-purple-800'>Support</div>
                </div>
                <div className='flex flex-col justify-start bg-white'>
                <div className='text-2xl no-underline hover:bg-sky-700 hover:ease-in hover:duration200 text-purple-500'>Social</div>
                    <div href="#" className="mb-5 text-lg no-underline cursor-pointer text-purple-800" >Facebook</div>
                    <div href="#" className="mb-5 text-lg no-underline cursor-pointer text-purple-800" >Instagram</div>
                    <div href="#" className="mb-5 text-lg no-underline cursor-pointer text-purple-800" >Youtube</div>
                    <div href="#" className="mb-5 text-lg no-underline cursor-pointer text-purple-800" >Twitter</div>
                </div>
            </div>
            </div>
        </div>
        
  )
}

export default Footer