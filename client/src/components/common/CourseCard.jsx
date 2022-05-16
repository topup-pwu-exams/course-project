import React from 'react'
import banner_image from '../../assets/Images/banner_image.svg'

function CourseCard() {
    return (
        <div className='border rounded-lg group cursor-pointer overflow-hidden'>
            <img src={banner_image} alt="Post img" className='h-60 object-cover w-full group-hover:scale-105 transition-transform duration-200 ease-in-out' />
            <div className='flex justify-between p-5 bg-white'>
                <div>
                    <p className='text-lg font-bold'>Some random title</p>
                    <p className='text-xs'>Post description by John Doe</p>
                </div>

                <img className='h-12 w-12 rounded-full' src={banner_image} alt="Author img" />

            </div>
        </div>
    )
}

export default CourseCard