import React from 'react'
import banner_image from '../../assets/Images/banner_image.svg'
import { ClockIcon } from '@heroicons/react/outline'
import { CollectionIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
import { UsersIcon } from '@heroicons/react/outline'
import { urlFor } from '../../utils/client'

const CourseCard = ({ title, author, mainImage, hours, lessons, price, likes, users, tags, categories }) => {
    return (
        <div className='border rounded-lg group cursor-pointer overflow-hidden shadow-md hover:shadow-purple-400'>
            {/* <img src={banner_image} alt="Post img" className='h-40 object-cover w-full group-hover:scale-105 transition-transform duration-200 ease-in-out' /> */}
            {mainImage && <img src={urlFor(mainImage).width(250).url()} alt="Post img" className='h-40 object-cover w-full group-hover:scale-105 transition-transform duration-200 ease-in-out' />}
            <div className='flex flex-col justify-between p-5 bg-white'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-md font-bold'>{title}</p>
                        <p className='text-xs'>by {author?.firstName} {author?.lastName}</p>
                    </div>
                    <img className='h-12 w-12 rounded-full' src={author?.avatar} alt="Author img" />
                </div>
                <div className='flex flex-row mt-4 space-x-5'>
                    <div className='flex'>
                        <ClockIcon className='w-5 mr-1 ' />
                        <p className='text-xs flex mt-0.5'>{hours} hours</p>
                    </div>
                    <div className='flex'>
                        <CollectionIcon className='w-5 mr-1 ' />
                        <p className='text-xs flex mt-0.5'> {lessons} Lessons</p>
                    </div>
                </div>
                {/* <div>
                    {tags.map((tag, index) => {
                            return (
                                <span className='' key={index}>{tag}</span>
                            )
                        })}
                </div> */}

                <hr className='my-5 border border-gray-300' />

                <div className='flex flex-row justify-between'>
                    <p className='text-md text-purple-500 font-bold'>{price}$</p>
                    <div className='flex space-x-5'>
                        <div className='flex'>
                            <HeartIcon className='w-5 mr-1 ' />
                            <p className='text-xs flex mt-1'> {likes}</p>
                        </div>
                        <div className='flex'>
                            <UsersIcon className='w-5 mr-1 ' />
                            <p className='text-xs flex mt-1'> {users}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard