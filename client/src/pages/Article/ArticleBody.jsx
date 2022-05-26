import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/outline'
import fakeImage from '../../assets/Images/blank_image.png'


export default function ArticleBody(author) {
    return (
        <div className='custom-layout'>
            <div className='font-medium text-gray-400 flex mb-5'>
                <NavLink to={-1} className='hover:text-black'>Categories </NavLink>
                <ChevronRightIcon className='w-5 mx-1' />
                <span className='text-black'> C# vs. C++: Which One Is Better for Your Project?</span>
            </div>
            <div className='max-w-3xl mx-auto'>
                <div className='flex flex-col text-left mt-4 mb-10'>
                    <h3 className='text-base'>Development</h3>
                    <h1 className='text-5xl'>C# vs. C++: Which One Is Better for Your Project?</h1>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-4'>
                        {author?.avatar ? <img className='ml-2 h-14 w-14 rounded-full min-w-14 min-h-14' src={author?.avatar} alt="Author" /> :
                            <UserCircleIcon className='h-14 w-14 min-w-14 min-h-14' />
                        }
                        <div>
                            <p className='font-bold text-xl'>Ben Tristem</p>
                            <p className='font-light text-base'>Lrner blogger</p>
                        </div>
                    </div>
                    <button type="button" className="text-blue-900 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border-2">
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Share with Google
                    </button>
                </div>
                <hr className='my-5' />
                <div>
                    <p className='my-10'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <img src={fakeImage} alt="Fake" className='block mx-auto min-w-100 min-h-48' />
                    <p className='my-10'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            <div>
            <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-4'>
                        {author?.avatar ? <img className='ml-2 h-14 w-14 rounded-full min-w-14 min-h-14' src={author?.avatar} alt="Author" /> :
                            <UserCircleIcon className='h-14 w-14 min-w-14 min-h-14' />
                        }
                        <div>
                            <p className='font-bold text-xl'>Ben Tristem</p>
                            <p className='font-light text-base'>Lrner blogger</p>
                        </div>
                    </div>
                    <button type="button" className="text-blue-900 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border-2">
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Share with Google
                    </button>
                </div>
                <div>
                    <p className='mt-2 font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className='mt-2 font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className='mt-40'>relevant blogs/courses</div>
            </div>
        </div>
    )
}
