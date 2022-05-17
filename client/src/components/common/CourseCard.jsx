import React from 'react'
import banner_image from '../../assets/Images/banner_image.svg'
import { ClockIcon } from '@heroicons/react/outline'
import { CollectionIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
import { UsersIcon } from '@heroicons/react/outline'

function CourseCard() {
    return (
        <div className='border rounded-lg group cursor-pointer overflow-hidden shadow-md hover:shadow-purple-400'>
            <img src={banner_image} alt="Post img" className='h-40 object-cover w-full group-hover:scale-105 transition-transform duration-200 ease-in-out' />
            <div className='flex flex-col justify-between p-5 bg-white'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-md font-bold'>Some random title</p>
                        <p className='text-xs'>by John Doe</p>
                    </div>
                    <img className='h-12 w-12 rounded-full' src={banner_image} alt="Author img" />
                </div>
                <div className='flex flex-row mt-4 space-x-5'>
                    <div className='flex'>
                        <ClockIcon className='w-5 mr-1 ' />
                        <p className='text-xs flex mt-0.5'>47 hours</p>
                    </div>
                    <div className='flex'>
                        <CollectionIcon className='w-5 mr-1 ' />
                        <p className='text-xs flex mt-0.5'> 15 Lessons</p>
                    </div>
                </div>

                <hr className='my-5 border border-gray-300' />

                <div className='flex flex-row justify-between'>
                    <p className='text-md text-purple-500 font-bold'>90$</p>
                    <div className='flex space-x-5'>
                    <div className='flex'>
                        <HeartIcon className='w-5 mr-1 ' />
                        <p className='text-xs flex mt-1'> 473</p>
                    </div>
                    <div className='flex'>
                        <UsersIcon className='w-5 mr-1 ' />
                        <p className='text-xs flex mt-1'> 473</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard