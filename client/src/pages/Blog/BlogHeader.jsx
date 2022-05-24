import React from 'react'
import { Link } from 'react-router-dom'
import banner_image from '../../assets/Images/banner_image.svg'

export default function BlogHeader() {
    return (
        <>
        <div className='custom-layout'>
            <div className='custom-layout flex flex-row gap-20'>
                    <div className='mt-20 mb-10 max-w-lg'>
                        <h1 className='my-2'>Where possibilities begin</h1>
                        <p>We are a leading marketplace platform for learning and teaching online. Explore some of our most popular content and learn something new.</p>
                    </div>
                
                <div>
                    <img src={banner_image} alt="Course App" />
                </div>
            </div>

                <div className='bg-black min-h-12 max-h-12 flex flex-row gap-5 justify-around px-20'>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                </div>
        </div>
        </>
    )
}
